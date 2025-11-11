/* 
  Script questionnaire + calculs
  Ne modifie PAS test-data.js
*/

let answers = {};        // clé "QID-DIM" -> 0..4
let profileComputed = false;

/* ----- RENDU DES QUESTIONS ----- */
function renderQuestions(){
  const root = document.getElementById("questionsContainer");

  root.innerHTML = QUESTIONS.map(q => `
    <div class="question-block">
      <div class="question-title">${q.title}</div>
      ${q.options.map(opt => `
        <div class="option-row">
          <div class="option-text">${opt.text}</div>
          <div class="rating-buttons">
            ${[0,1,2,3,4].map(v => `
              <div class="rate-btn" data-q="${q.id}" data-dim="${opt.dim}" data-val="${v}">${v}</div>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `).join("");

  // Gestion clics sur ronds
  document.querySelectorAll(".rate-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const q   = btn.dataset.q;
      const dim = btn.dataset.dim;
      const v   = Number(btn.dataset.val);

      const key = `${q}-${dim}`;
      answers[key] = v;

      // Retire sélection sur les 5 ronds de cette option
      const selector = `.rate-btn[data-q='${q}'][data-dim='${dim}']`;
      document.querySelectorAll(selector).forEach(b=>{
        b.classList.remove("selected","v0","v1","v2","v3","v4");
      });
      // Applique sélection + couleur
      btn.classList.add("selected", `v${v}`);

      // Si le profil a déjà été calculé une 1ère fois, propose REcalculer
      if(profileComputed){
        const btnCalc = document.getElementById("calculateBtn");
        btnCalc.textContent = "🔁 Recalculer mon profil";
        btnCalc.classList.add("needs-recalc");
      }
    });
  });
}

/* ----- CALCUL PROFIL (12 dimensions) ----- */
function calcProfile(){
  const scores = Object.fromEntries(DIMENSIONS.map(d=>[d.code,0]));
  Object.keys(answers).forEach(key=>{
    const [,dim] = key.split("-");
    const val = answers[key]; // 0..4
    scores[dim] += val;
  });
  return scores;
}

/* ----- AFFICHAGE PROFIL ----- */
function percentFromSum(sum){
  // 4 occurrences par dimension × max 4 = 16
  return Math.round((sum/16)*100);
}

/* ----- CALCUL UNIVERS (TRI PAR SCORE DÉCROISSANT) ----- */
function calcUnivers(){
  const s = calcProfile();
  return universes.map(u=>{
    let score=0, max=0;
    u.weights.forEach((w,i)=>{
      const dimCode = DIMENSIONS[i].code;
      score += s[dimCode]*w;      // somme pondérée
      max   += 16 * w;            // max possible
    });
    const pct = Math.round((score/max)*100);
    return {...u, pct};
  }).sort((a,b)=>b.pct-a.pct);  // TRI DÉCROISSANT
}

/* ----- INITIALISATION AU CHARGEMENT DU DOM ----- */
document.addEventListener('DOMContentLoaded', function() {
  
  // Rendre les questions
  renderQuestions();

  // Bouton calcul profil
  const btnCalc = document.getElementById("calculateBtn");
  
  function calculerEtAfficherProfil() {
    const scores = calcProfile();
    const root = document.getElementById("profileResults");

    root.innerHTML = DIMENSIONS.map(dim=>{
      const sum = scores[dim.code];
      const pct = percentFromSum(sum);
      return `
        <div class="profile-row">
          <div class="profile-label">${dim.name}</div>
          <div class="profile-bar"><div class="profile-fill" style="width:${pct}%"></div></div>
          <div><strong>${pct}%</strong></div>
        </div>
      `;
    }).join("");

    document.getElementById("profileSection").classList.remove("hidden");

    // Marquer comme calculé
    profileComputed = true;
    btnCalc.classList.remove("needs-recalc");
    btnCalc.textContent = "🔁 Recalculer mon profil";
    
    // Cacher la section univers si elle était affichée (pour forcer recalcul)
    const universSection = document.getElementById("univers-section");
    if(universSection && !universSection.classList.contains("hidden")){
      universSection.classList.add("hidden");
      // Réinitialiser le bouton "Voir tous les univers"
      const btnShowAll = document.getElementById("btn-show-all");
      if(btnShowAll) btnShowAll.classList.add("hidden");
    }
  }
  
  btnCalc.addEventListener("click", calculerEtAfficherProfil);

  // Bouton vers univers
  const btnUnivers = document.getElementById("goUniversesBtn");
  btnUnivers.addEventListener("click", ()=>{
    // Vérifier si un recalcul est nécessaire
    if(btnCalc.classList.contains("needs-recalc")){
      alert("⚠️ Tu as modifié tes réponses. Clique d'abord sur 'Recalculer mon profil' avant de voir les univers.");
      return;
    }
    
    const list = calcUnivers();
    const root = document.getElementById("univers-results");

    const top5 = list.slice(0,5);
    const others = list.slice(5);

    // Affichage avec scores triés par ordre décroissant
    root.innerHTML = top5.map(u => `
      <div class="univers-card" style="display:flex;justify-content:space-between;align-items:center;border:1px solid var(--line);border-radius:12px;padding:12px;margin:8px 0;background:#fff;">
        <div>${u.icon} ${u.name}</div>
        <div><strong>${u.pct}%</strong></div>
      </div>
    `).join("");

    const btnShow = document.getElementById("btn-show-all");
    btnShow.classList.remove("hidden");
    
    // Retirer l'ancien event listener en clonant le bouton
    const newBtnShow = btnShow.cloneNode(true);
    btnShow.parentNode.replaceChild(newBtnShow, btnShow);
    
    newBtnShow.addEventListener("click", ()=>{
      root.innerHTML += others.map(u => `
        <div class="univers-card" style="display:flex;justify-content:space-between;align-items:center;border:1px solid var(--line);border-radius:12px;padding:12px;margin:8px 0;background:#fff;">
          <div>${u.icon} ${u.name}</div>
          <div><strong>${u.pct}%</strong></div>
        </div>
      `).join("");
      newBtnShow.classList.add("hidden");
    });

    document.getElementById("univers-section").classList.remove("hidden");
    
    // Scroll vers la section univers
    setTimeout(() => {
      document.getElementById("univers-section").scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  });
});
