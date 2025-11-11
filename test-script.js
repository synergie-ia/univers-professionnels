let answers = JSON.parse(localStorage.getItem("answers") || "{}");

function saveAnswers() {
  localStorage.setItem("answers", JSON.stringify(answers));
}

function renderQuestions() {
  const root = document.getElementById("questionnaire");

  root.innerHTML = QUESTIONS.map(q => `
    <div class="question-block">
      <div class="question-title">${q.title}</div>
      ${q.options.map(opt => `
        <div class="option-row">
          <div class="option-text">${opt.text}</div>
          <div class="rating-buttons">
            ${[0,1,2,3,4].map(v => `
              <div class="rate-btn ${answers[q.id+"-"+opt.dim]===val(v)?"selected":""}"
                data-q="${q.id}" data-dim="${opt.dim}" data-value="${v}">
                ${v}
              </div>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `).join("");

  document.querySelectorAll(".rate-btn").forEach(btn =>
    btn.addEventListener("click", () => {
      const k = btn.dataset.q + "-" + btn.dataset.dim;
      answers[k] = val(btn.dataset.value);
      saveAnswers();
      document.getElementById("recalc-hint").classList.remove("hidden");

      document.querySelectorAll(`[data-q='${btn.dataset.q}'][data-dim='${btn.dataset.dim}']`)
        .forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    })
  );
}

function val(v) { return [0,1,4,9,16][v]; }

renderQuestions();

/* Calcul profil */
function calcProfile() {
  let scores = Object.fromEntries(DIMENSIONS.map(d => [d.code, 0]));
  for (let key in answers) {
    const dim = key.split("-")[1];
    scores[dim] += answers[key];
  }
  return scores;
}

/* Affichage profil */
document.getElementById("btn-calc-profile").addEventListener("click", () => {
  const scores = calcProfile();
  document.getElementById("recalc-hint").classList.add("hidden");
  const root = document.getElementById("profile-results");

  root.innerHTML = DIMENSIONS
    .map(d => ({...d, score:scores[d.code]}))
    .sort((a,b)=>b.score-a.score)
    .map(dim => {
      const percent = Math.round((dim.score / (16*4)) * 100);
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

/* Univers */
function calcUnivers() {
  const scores = calcProfile();
  return universes.map(u => {
    let score = 0, max = 0;
    u.weights.forEach((w,i)=>{
      score += scores[DIMENSIONS[i].code] * w;
      max += (16*4) * w;
    });
    return {...u, pct:Math.round((score/max)*100)};
  }).sort((a,b)=>b.pct-a.pct);
}

document.getElementById("btn-calc-univers").addEventListener("click", () => {
  const list = calcUnivers();
  const top5 = list.slice(0,5);
  const others = list.slice(5);
  const root = document.getElementById("univers-results");

  root.innerHTML = top5.map(u => `
    <div class="univers-card">
      <div>${u.icon} ${u.name}</div>
      <div><strong>${u.pct}%</strong></div>
    </div>
  `).join("");

  const btnShow = document.getElementById("btn-show-all");
  btnShow.classList.remove("hidden");
  btnShow.onclick = () => {
    root.innerHTML += others.map(u => `
      <div class="univers-card">
        <div>${u.icon} ${u.name}</div>
        <div><strong>${u.pct}%</strong></div>
      </div>
    `).join("");
    btnShow.classList.add("hidden");
  };

  document.getElementById("univers-section").classList.remove("hidden");
});
