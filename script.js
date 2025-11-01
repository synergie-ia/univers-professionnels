let selections = { interets: [], personnalite: [], valeurs: [] };

function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("visible"));
  document.getElementById(id).classList.add("visible");
}

function start() {
  showSection("interets");
  renderList("interets", interets);
}

function back(p) {
  if (p === 0) showSection("welcome");
  if (p === 1) showSection("interets");
  if (p === 2) showSection("personnalite");
  if (p === 3) showSection("valeurs");
}

function next(p) {
  if (p === 1 && checkSelection("interets")) {
    showSection("personnalite");
    renderList("personnalite", personnalite);
  } else if (p === 2 && checkSelection("personnalite")) {
    showSection("valeurs");
    renderList("valeurs", valeurs);
  } else if (p === 3 && checkSelection("valeurs")) {
    showProfile();
  }
}

function checkSelection(type) {
  const n = selections[type].length;
  if (n < 3 || n > 6) {
    alert("Merci de choisir entre 3 et 6 éléments.");
    return false;
  }
  return true;
}

function renderList(type, data) {
  const list = document.getElementById(`${type}-list`);
  list.innerHTML = "";
  data.forEach((item, i) => {
    const id = `${type}-${i}`;
    const checked = selections[type].includes(item.verbe) ? "checked" : "";
    list.innerHTML += `
      <div class="bloc">
        <input type="checkbox" id="${id}" ${checked} onchange="toggleSelection('${type}','${item.verbe}')">
        <label for="${id}"><strong>${item.verbe}</strong><br><small>${item.phrase}</small></label>
      </div>`;
  });
}

function toggleSelection(type, verbe) {
  const arr = selections[type];
  if (arr.includes(verbe)) {
    selections[type] = arr.filter(v => v !== verbe);
  } else {
    if (arr.length >= 6) {
      alert("Tu peux sélectionner jusqu’à 6 éléments maximum.");
    } else {
      arr.push(verbe);
    }
  }
}

function showProfile() {
  showSection("profil");
  const container = document.getElementById("profileDisplay");
  container.innerHTML = `
    <h3>🎯 Tes Intérêts</h3>
    <ul>${selections.interets.map(i => `<li>${i}</li>`).join("")}</ul>
    <h3>🧠 Ta Personnalité</h3>
    <ul>${selections.personnalite.map(i => `<li>${i}</li>`).join("")}</ul>
    <h3>💎 Tes Valeurs</h3>
    <ul>${selections.valeurs.map(i => `<li>${i}</li>`).join("")}</ul>
  `;
}

function copyProfile() {
  const text = `
🎯 INTÉRÊTS :
${selections.interets.join(", ")}

🧠 PERSONNALITÉ :
${selections.personnalite.join(", ")}

💎 VALEURS :
${selections.valeurs.join(", ")}
  `;
  navigator.clipboard.writeText(text).then(() => alert("✅ Profil copié pour l’IA !"));
}

// ========= EXPORT PDF =========
function downloadPDF() {
  const content = `
Orientation 360 IA
----------------------------
🎯 INTÉRÊTS :
${selections.interets.join(", ")}

🧠 PERSONNALITÉ :
${selections.personnalite.join(", ")}

💎 VALEURS :
${selections.valeurs.join(", ")}
`;

  const blob = new Blob([content], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "profil_IA360.pdf";
  link.click();
  URL.revokeObjectURL(url);
}
