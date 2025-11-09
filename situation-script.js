// Fonction pour afficher/masquer les champs "Autre"
function toggleAutrePermis() {
    const checkbox = document.querySelector('input[name="permis"][value="autre"]');
    const autreDiv = document.getElementById('autrePermis');
    autreDiv.style.display = checkbox.checked ? 'block' : 'none';
}

// Fonction pour afficher la précision de mobilité
function checkMobilite() {
    const select = document.getElementById('mobiliteSelect');
    const precisionDiv = document.getElementById('mobilitePrecision');
    
    if (select.value === 'locale' || select.value === 'regionale') {
        precisionDiv.style.display = 'block';
        precisionDiv.querySelector('input').required = true;
    } else {
        precisionDiv.style.display = 'none';
        precisionDiv.querySelector('input').required = false;
    }
}

// Gestion du formulaire
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('situationForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Vérifier que toutes les questions obligatoires sont remplies
        const requiredFields = form.querySelectorAll('[required]');
        let allFilled = true;
        let firstEmpty = null;
        
        requiredFields.forEach(field => {
            if (!field.value || !field.value.trim()) {
                allFilled = false;
                field.style.borderColor = '#e74c3c';
                if (!firstEmpty) firstEmpty = field;
            } else {
                field.style.borderColor = '#27ae60';
            }
        });
        
        // Vérifier qu'au moins une checkbox "contrat" est cochée
        const contratCheckboxes = form.querySelectorAll('input[name="contrat"]:checked');
        if (contratCheckboxes.length === 0) {
            allFilled = false;
            alert('⚠️ Veuillez sélectionner au moins un type de contrat recherché.');
            return;
        }
        
        if (!allFilled) {
            alert('⚠️ Veuillez remplir tous les champs obligatoires (marqués d\'un *)');
            if (firstEmpty) {
                firstEmpty.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstEmpty.focus();
            }
            return;
        }
        
        // Validation basique du contenu
        const textareas = form.querySelectorAll('textarea[required]');
        let hasInvalidContent = false;
        
        textareas.forEach(textarea => {
            const value = textarea.value.trim();
            // Vérifier que ce n'est pas juste des caractères non-alphabétiques
            if (value.length > 0 && value.length < 3) {
                hasInvalidContent = true;
                textarea.style.borderColor = '#e74c3c';
            }
        });
        
        if (hasInvalidContent) {
            alert('⚠️ Certaines réponses semblent incomplètes. Veuillez vérifier vos réponses.');
            return;
        }
        
        // Sauvegarder les données
        const formData = new FormData(form);
        const data = {};
        
        for (const [key, value] of formData.entries()) {
            if (key === 'contrat' || key === 'permis') {
                if (!data[key]) data[key] = [];
                data[key].push(value);
            } else {
                data[key] = value;
            }
        }
        
        // Convertir les arrays en chaînes
        if (data.contrat) data.contrat = data.contrat.join(', ');
        if (data.permis) data.permis = data.permis.join(', ');
        
        // Sauvegarder dans localStorage
        localStorage.setItem('reconversion360_situation_data', JSON.stringify(data));
        localStorage.setItem('reconversion360_situation_completed', 'true');
        
        // Afficher notification de succès
        showNotification('✅ Votre bilan de situation a été validé avec succès !');
        
        // Rediriger vers la page d\'accueil après 2 secondes
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    });
});

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
        max-width: 400px;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
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
