// Stockage des univers sélectionnés
let selectedUniverses = new Set();

// Charger les sélections sauvegardées
function loadSavedSelections() {
    try {
        const saved = localStorage.getItem('orientation360_selected_universes');
        if (saved) {
            selectedUniverses = new Set(JSON.parse(saved));
        }
    } catch (e) {
        console.log('Impossible de charger les sélections:', e);
    }
}

// Sauvegarder les sélections
function saveSelections() {
    try {
        localStorage.setItem('orientation360_selected_universes', JSON.stringify([...selectedUniverses]));
    } catch (e) {
        console.log('Impossible de sauvegarder les sélections:', e);
    }
}

// Fonction pour générer les cartes d'univers
function renderUniverses() {
    const grid = document.getElementById('universesGrid');
    
    grid.innerHTML = universesData.map(universe => `
        <div class="universe-card ${selectedUniverses.has(universe.id) ? 'selected' : ''}" 
             data-universe-id="${universe.id}">
            <div class="selection-checkbox" onclick="event.stopPropagation(); toggleSelection(${universe.id})">
                ${selectedUniverses.has(universe.id) ? '✓' : ''}
            </div>
            <div class="universe-image">
                ${universe.icon}
            </div>
            <div class="universe-content">
                <div class="universe-name">${universe.name}</div>
                <div class="universe-description">${universe.description}</div>
            </div>
        </div>
    `).join('');
    
    // Ajouter les event listeners pour ouvrir les détails
    document.querySelectorAll('.universe-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Ne pas ouvrir si on clique sur la checkbox
            if (e.target.closest('.selection-checkbox')) return;
            
            const universeId = parseInt(this.getAttribute('data-universe-id'));
            openModal(universeId);
        });
    });
    
    updateSelectionInfo();
}

// Fonction pour basculer la sélection
function toggleSelection(universeId) {
    if (selectedUniverses.has(universeId)) {
        selectedUniverses.delete(universeId);
    } else {
        selectedUniverses.add(universeId);
    }
    
    saveSelections();
    renderUniverses();
}

// Mettre à jour les informations de sélection
function updateSelectionInfo() {
    const count = selectedUniverses.size;
    document.getElementById('selectionCount').textContent = `${count} univers sélectionné${count > 1 ? 's' : ''}`;
    document.getElementById('downloadBtn').disabled = count === 0;
}

// Fonction pour ouvrir le modal avec les sous-univers
function openModal(universeId) {
    const universe = universesData.find(u => u.id === universeId);
    if (!universe) return;
    
    const modal = document.getElementById('subUniversesModal');
    const modalTitle = document.getElementById('modalTitle');
    const subUniversesList = document.getElementById('subUniversesList');
    
    modalTitle.textContent = universe.icon + ' ' + universe.name;
    
    subUniversesList.innerHTML = universe.subUniverses.map(sub => `
        <div class="sub-universe-card">
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

// Gérer la touche Echap
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Fermer le modal si on clique en dehors
window.onclick = function(event) {
    const modal = document.getElementById('subUniversesModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Fonction pour télécharger les univers sélectionnés en PDF
function downloadSelectedUniverses() {
    if (selectedUniverses.size === 0) {
        alert('Veuillez sélectionner au moins un univers.');
        return;
    }
    
    if (typeof window.jspdf === 'undefined') {
        alert('La bibliothèque PDF n\'est pas chargée. Veuillez réessayer.');
        return;
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString('fr-FR');
    
    let yPos = 20;
    
    // Titre
    doc.setFontSize(18);
    doc.setFont(undefined, 'bold');
    doc.text('Orientation 360 IA', 105, yPos, { align: 'center' });
    
    yPos += 10;
    doc.setFontSize(14);
    doc.text('Mes univers professionnels selectionnés', 105, yPos, { align: 'center' });
    
    yPos += 5;
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text('Date : ' + date, 105, yPos, { align: 'center' });
    
    yPos += 10;
    doc.setFontSize(9);
    doc.text('Ces informations seront utilisees par votre coach virtuel', 105, yPos, { align: 'center' });
    doc.text('pour personnaliser ses recommandations.', 105, yPos + 5, { align: 'center' });
    
    yPos += 20;
    
    // Pour chaque univers sélectionné
    const selectedUniversesData = universesData.filter(u => selectedUniverses.has(u.id));
    
    selectedUniversesData.forEach((universe, index) => {
        // Vérifier si on doit ajouter une nouvelle page
        if (yPos > 250) {
            doc.addPage();
            yPos = 20;
        }
        
        // Nom de l'univers
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.text(`${index + 1}. ${universe.name}`, 20, yPos);
        
        yPos += 7;
        doc.setFontSize(10);
        doc.setFont(undefined, 'italic');
        const descLines = doc.splitTextToSize(universe.description, 170);
        doc.text(descLines, 20, yPos);
        yPos += descLines.length * 5 + 5;
        
        // Sous-univers
        doc.setFont(undefined, 'bold');
        doc.text('Sous-univers :', 20, yPos);
        yPos += 6;
        
        doc.setFont(undefined, 'normal');
        doc.setFontSize(9);
        
        universe.subUniverses.forEach(sub => {
            if (yPos > 270) {
                doc.addPage();
                yPos = 20;
            }
            
            // Nom du sous-univers
            doc.setFont(undefined, 'bold');
            doc.text('• ' + sub.name, 25, yPos);
            yPos += 5;
            
            // Description du sous-univers
            doc.setFont(undefined, 'normal');
            const subDescLines = doc.splitTextToSize(sub.description, 160);
            doc.text(subDescLines, 28, yPos);
            yPos += subDescLines.length * 4 + 3;
        });
        
        yPos += 8;
    });
    
    // Note finale
    if (yPos > 250) {
        doc.addPage();
        yPos = 20;
    }
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'italic');
    doc.text('---', 105, yPos, { align: 'center' });
    yPos += 7;
    doc.text('Document genere par Orientation 360 IA', 105, yPos, { align: 'center' });
    yPos += 5;
    doc.text('Conservez ce document pour votre accompagnement', 105, yPos, { align: 'center' });
    
    // Sauvegarde
    doc.save('Orientation360IA_Univers_Selectionnes_' + date.replace(/\//g, '-') + '.pdf');
    showNotification('PDF téléchargé avec succès !');
}

// Fonction pour afficher une notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        font-weight: bold;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Ajout des animations CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    loadSavedSelections();
    renderUniverses();
});
