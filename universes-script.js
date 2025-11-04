// Fonction pour générer les cartes d'univers
function renderUniverses() {
    const grid = document.getElementById('universesGrid');
    
    grid.innerHTML = universesData.map(universe => `
        <div class="universe-card" onclick="openModal(${universe.id})">
            <div class="universe-image">
                ${universe.icon}
            </div>
            <div class="universe-content">
                <div class="universe-name">${universe.name}</div>
                <div class="universe-description">${universe.description}</div>
                <div class="universe-footer">
                    <span class="universe-arrow">→</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Fonction pour ouvrir le modal avec les sous-univers
function openModal(universeId) {
    const universe = universesData.find(u => u.id === universeId);
    if (!universe) return;
    
    const modal = document.getElementById('subUniversesModal');
    const modalTitle = document.getElementById('modalTitle');
    const subUniversesList = document.getElementById('subUniversesList');
    
    modalTitle.textContent = universe.icon + ' ' + universe.name;
    
    subUniversesList.innerHTML = universe.subUniverses.map((sub, index) => `
        <div class="sub-universe-card" onclick="toggleDescription(event, ${universeId}, ${index})">
            <div class="sub-universe-header">
                <div class="sub-universe-icon">${sub.icon}</div>
                <div class="sub-universe-name">${sub.name}</div>
            </div>
            <div class="sub-universe-description">${sub.description}</div>
        </div>
    `).join('');
    
    modal.style.display = 'block';
}

// Fonction pour fermer le modal
function closeModal() {
    document.getElementById('subUniversesModal').style.display = 'none';
}

// Fonction pour afficher/masquer la description
function toggleDescription(event, universeId, subIndex) {
    event.currentTarget.classList.toggle('expanded');
}

// Fermer le modal si on clique en dehors
window.onclick = function(event) {
    const modal = document.getElementById('subUniversesModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    renderUniverses();
});
