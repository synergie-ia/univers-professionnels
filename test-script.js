/* ===== STOCKAGE ===== */
let answers = JSON.parse(localStorage.getItem("ia360_answers")) || {};
let profileCalculated = false;

/* ===== RENDU QUESTIONNAIRE ===== */
function renderQuestions() {
  const container = document.getElementById("questionnaire");

  container.innerHTML = QUESTIONS.map(q => `
    <div class="question-block">
      <div class="question-title">${q.title}</div>
      ${q.options.map((opt, idx) => {
        const savedValue = answers[`${q.id}-${opt.dim}`];
        return `
          <div class="option-row">
            <div class="option-text">${opt.text}</div>
            <div class="rating-buttons">
              ${[0,1,2,3,4].map(v => `
                <div 
                  class="circle ${savedValue === v ? "selected" : ""}"
                  data-q="${q.id}" 
                  data-dim="${opt.dim}" 
                  data-value="${v}">
                  ${v}
                </div>
              `).join("")}
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `).join("");

  bindCircles();
}

function bindCircles() {
  document.querySelectorAll(".circle").forEach(btn => {
    btn.addEventListener("click", () => {
      const q = btn.dataset.q;
      const dim = btn.dataset.dim;
      const v = Number(btn.dataset.value);

      answers[`${q}-${dim}`] = v;
      localStorage.setItem("ia360_answers", JSON.stringify(answers));

      document.querySelectorAll(`.circle[data-q='${q}'][data-dim='${dim}']`)
        .forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");

      if (profileCalculated) {
        document.getElementById("btn-calc-profile").textContent = "🔁 Recalculer mon profil";
      }
    });
  });
}

renderQuestions();

/* ===== CALCUL PROFIL ===== */

function calcProfile() {
  let scores = Object.fromEntries(DIMENSIONS.map(d => [d.code, 0]));

  Object.keys(answers).forEach(key => {
    const dim = key.split("-")[1];
    const v = answers[key];

    // Échelle incrémentale
    const weighted = v === 0 ? 0 :
                     v === 1 ? 1 :
                     v === 2 ? 4 :
                     v === 3 ? 9 :
                               16;

    scores[dim] += weighted;
  });

  return scores;
}

/* ===== AFFICHAGE PROFIL ===== */
document.getElementById("btn-calc-profile").addEventListener("click", () => {
  profileCalculated = true;

  const scores = calcProfile();
  localStorage.setItem("ia360_profile", JSON.stringify(scores));

  const root = document.getElementById("profile-results");
  root.innerHTML = Object.keys(scores).map(code => {
    const dim = DIMENSIONS.find(d => d.code === code);
    const val = scores[code];
    const percent = Math.round((val / 64) * 100); // 4 questions × 16 max = 64 max
    return `
      <div class="profile-row">
        <div class="profile-label">${dim.name}</div>
        <div class="profile-bar"><div class="profile-fill" style="width:${percent}%"></div></div>
        <div>${percent}%</div>
      </div>
    `;
  }).join("");

  document.getElementById("profile-section").classList.remove("hidden");
});

/* ===== CALCUL UNIVERS ===== */
document.getElementById("btn-calc-univers").addEventListener("click", () => {
  const scores = JSON.parse(localStorage.getItem("ia360_profile")) || calcProfile();

  const results = universes.map(u => {
    let total = 0, max = 0;
    u.weights.forEach((w,i) => {
      const dim = DIMENSIONS[i].code;
      total += scores[dim] * w;
      max += 64 * w;
    });
    return {...u, pct: Math.round((total / max) * 100)};
  }).sort((a,b)=>b.pct-a.pct);

  localStorage.setItem("ia360_univers", JSON.stringify(results));
  displayUnivers(results);
});

function displayUnivers(list) {
  const section = document.getElementById("univers-section");
  const container = document.getElementById("univers-results");

  container.innerHTML = list.map(u => `
    <div class="univers-card">
      <div>${u.icon} ${u.name}</div>
      <div><strong>${u.pct}%</strong></div>
    </div>
  `).join("");

  section.classList.remove("hidden");
}
