// =====================================================
// SCRIPT — logique multi-pages (3–6 sélections/page)
// =====================================================

const state = {
  stepIndex: 0,
  selections: {
    interets: new Set(),
    personnalite: new Set(),
    valeurs: new Set()
  }
};

const ids = {
  stepTitle: document.getElementById('stepTitle'),
  container: document.getElementById('cardsContainer'),
  limitMsg: document.getElementById('limitMsg'),
  btnBack: document.getElementById('btnBack'),
  btnNext: document.getElementById('btnNext'),
  progressBar: document.getElementById('progressBar'),
  results: document.getElementById('results'),
  resultsBlocks: document.getElementById('resultsBlocks'),
  exportText: document.getElementById('exportText'),
  printArea: document.getElementById('printArea'),
  btnCopy: null, // set later
  btnPrint: null,
  btnRestart: null
};

// ---------- Helpers
function currentKey(){ return STEPS[state.stepIndex].key; }
function currentList(){ return CATALOG[currentKey()]; }
function clamp(min,v,max){ return Math.max(min, Math.min(max, v)); }
function countFor(key){ return state.selections[key].size; }
function inRange(count){ return count >= MIN_PER_STEP && count <= MAX_PER_STEP; }
function pctProgress(){
  const total = STEPS.length;
  // progress inside current step: proportion de sélection (0→1) plafonnée
  const ratio = clamp(0, countFor(currentKey())/MAX_PER_STEP, 1);
  return ((state.stepIndex) * 100/total) + (ratio * (100/total));
}

// ---------- Render step
function renderStep(){
  const step = STEPS[state.stepIndex];
  ids.results.classList.add('hidden');
  ids.stepTitle.innerHTML = `
    <div>${step.title}</div>
    <span class="hint">${step.hint}</span>
  `;

  ids.container.innerHTML = '';
  ids.limitMsg.classList.add('hidden');

  const list = currentList();
  list.forEach((item, idx) => {
    const checked = state.selections[step.key].has(idx);
    const card = document.createElement('label');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-header">
        <div>
          <div class="card-title">${item.label}</div>
          <div class="card-phrase">${item.phrase}</div>
        </div>
        <input type="checkbox" ${checked ? 'checked':''} data-idx="${idx}"/>
      </div>
      <div class="card-phrase small">Verbes : ${item.verbs.join(' · ')}</div>
    `;
    ids.container.appendChild(card);
  });

  // interactions
  ids.container.querySelectorAll('input[type="checkbox"]').forEach(cb=>{
    cb.addEventListener('change', onToggle);
  });

  // nav buttons
  ids.btnBack.disabled = state.stepIndex === 0;
  ids.btnNext.textContent = (state.stepIndex === STEPS.length-1) ? 'Voir mon profil' : 'Suivant';

  // progress
  ids.progressBar.style.width = `${pctProgress().toFixed(1)}%`;
}

// ---------- Toggle selection
function onToggle(e){
  const stepKey = currentKey();
  const idx = Number(e.target.dataset.idx);
  const set = state.selections[stepKey];

  if(e.target.checked){
    if(set.size >= MAX_PER_STEP){
      // refuse + message
      e.target.checked = false;
      showLimit(`Tu as déjà ${MAX_PER_STEP} choix. Décoche-en un pour en ajouter un autre.`);
      return;
    }
    set.add(idx);
  }else{
    set.delete(idx);
  }
  hideLimit();
  ids.progressBar.style.width = `${pctProgress().toFixed(1)}%`;
}

// ---------- Messages
function showLimit(msg){
  ids.limitMsg.textContent = msg;
  ids.limitMsg.classList.remove('hidden');
}
function hideLimit(){ ids.limitMsg.classList.add('hidden'); }

// ---------- Navigation
function goNext(){
  const stepKey = currentKey();
  const nb = countFor(stepKey);
  if(nb < MIN_PER_STEP){
    showLimit(`Sélectionne au moins ${MIN_PER_STEP} éléments avant de continuer.`);
    return;
  }
  if(nb > MAX_PER_STEP){
    showLimit(`Tu ne peux pas dépasser ${MAX_PER_STEP} éléments sur cette page.`);
    return;
  }
  hideLimit();

  if(state.stepIndex < STEPS.length-1){
    state.stepIndex++;
    renderStep();
  }else{
    // show results
    buildResults();
  }
}

function goBack(){
  if(state.stepIndex === 0) return;
  state.stepIndex--;
  renderStep();
}

ids.btnNext.addEventListener('click', goNext);
ids.btnBack.addEventListener('click', goBack);

// ---------- Results
function buildResults(){
  // verrouille la progression à 100%
  ids.progressBar.style.width = '100%';

  // cache les cartes et montre résultats
  ids.results.classList.remove('hidden');
  ids.stepTitle.innerHTML = '';
  ids.container.innerHTML = '';
  ids.limitMsg.classList.add('hidden');

  // blocs par catégorie
  ids.resultsBlocks.innerHTML = '';
  STEPS.forEach(step=>{
    const set = state.selections[step.key];
    const source = CATALOG[step.key];

    const block = document.createElement('section');
    block.className = 'block';

    const title = document.createElement('h3');
    title.textContent = step.title;
    block.appendChild(title);

    const wrap = document.createElement('div');
    wrap.className = 'selected-badges';

    // garde l’ordre d’origine
    [...set].sort((a,b)=>a-b).forEach(i=>{
      const it = source[i];
      const badge = document.createElement('div');
      badge.className = 'badge';
      badge.innerHTML = `<strong>${it.label}</strong><small>${it.phrase}</small>`;
      wrap.appendChild(badge);
    });

    block.appendChild(wrap);
    ids.resultsBlocks.appendChild(block);
  });

  // export texte
  const exportTxt = buildExportText();
  ids.exportText.value = exportTxt;

  // boutons results
  const btnCopy = document.getElementById('btnCopy') || document.getElementById('btnCopy');
  const btnPrint = document.getElementById('btnPrint') || document.getElementById('btnPrint');
  const btnRestart = document.getElementById('btnRestart') || document.getElementById('btnRestart');

  btnCopy.addEventListener('click', ()=>copyText(exportTxt));
  btnPrint.addEventListener('click', ()=>printProfile());
  btnRestart.addEventListener('click', resetAll);
}

// ---------- Export builders
function buildExportText(){
  const dateStr = new Date().toLocaleDateString('fr-FR');

  const lines = [];
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push('PROFIL ORIENTATION 360IA');
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push(`Date : ${dateStr}\n`);

  STEPS.forEach(step=>{
    lines.push(step.title);
    const arr = [...state.selections[step.key]].sort((a,b)=>a-b).map(i=>{
      const it = CATALOG[step.key][i];
      return `- ${it.label} — ${it.phrase}`;
    });
    if(arr.length===0){ lines.push('(aucune sélection)'); }
    else{ lines.push(...arr); }
    lines.push('');
  });

  return lines.join('\n');
}

function copyText(text){
  navigator.clipboard.writeText(text).then(()=>{
    notify('Texte copié ✅');
  }).catch(()=>{
    notify('Impossible de copier. Sélectionne manuellement le texte ci-dessous.');
  });
}

function printProfile(){
  // génère un HTML simple dans #printArea puis lance window.print
  const dateStr = new Date().toLocaleDateString('fr-FR');
  const html = [
    `<h1 style="color:#2e55cf;margin:0 0 6px">Orientation 360IA — Profil</h1>`,
    `<div style="color:#64748b;margin:0 0 12px">Date : ${dateStr}</div>`,
    ...STEPS.map(step=>{
      const list = [...state.selections[step.key]].sort((a,b)=>a-b).map(i=>{
        const it = CATALOG[step.key][i];
        return `<li><strong>${escapeHTML(it.label)}</strong> — ${escapeHTML(it.phrase)}</li>`;
      }).join('');
      return `
      <section style="border:2px solid #cfe0ff;border-radius:12px;padding:12px 14px;margin:10px 0">
        <h2 style="margin:0 0 8px;color:#2e55cf;font-size:18px">${escapeHTML(step.title)}</h2>
        <ul style="margin:0 0 0 18px;padding:0">${list || '<li>(aucune sélection)</li>'}</ul>
      </section>`;
    })
  ].join('');

  ids.printArea.innerHTML = html;
  window.print();
}

function escapeHTML(s){ return s.replace(/[&<>"']/g, (m)=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m])); }

function notify(msg){
  ids.limitMsg.textContent = msg;
  ids.limitMsg.classList.remove('hidden');
  setTimeout(()=>ids.limitMsg.classList.add('hidden'), 1800);
}

// ---------- Reset
function resetAll(){
  state.stepIndex = 0;
  state.selections.interets.clear();
  state.selections.personnalite.clear();
  state.selections.valeurs.clear();
  ids.results.classList.add('hidden');
  ids.progressBar.style.width = '0%';
  renderStep();
}

// ---------- Init
document.addEventListener('DOMContentLoaded', ()=>{
  renderStep();
});
