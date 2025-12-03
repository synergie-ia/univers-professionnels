/* 
  ============================================
  RECONVERSION 360 IA - BILAN DE SITUATION
  ============================================
  Gestion du formulaire de bilan personnel
  VERSION 36 - Ajout Q21 Tests psychotechniques
  VERSION 39 - Ajout préfixe transition360_ pour localStorage
  VERSION 40 - Sauvegarde automatique instantanée à chaque saisie
  ============================================
*/

document.addEventListener('DOMContentLoaded', function() {
  
  console.log("📋 PAGE BILAN - Initialisation");
  console.log("================================\n");
  
  // Charger les données existantes si disponibles
  loadSavedData();
  
  // Gestion de la soumission du formulaire
  const form = document.getElementById('situationForm');
  if(form) {
    form.addEventListener('submit', handleFormSubmit);
  }
  
  // ✨ NOUVEAU: Auto-sauvegarde instantanée à chaque saisie
  setupAutoSave();
  
  console.log("✅ Initialisation terminée");
});

/* ===== CHARGEMENT DES DONNÉES SAUVEGARDÉES ===== */

function loadSavedData() {
  try {
    // Priorité 1: Données définitivement enregistrées
    let savedData = localStorage.getItem('transition360_situation_data');
    
    // Priorité 2: Auto-sauvegarde si pas de données définitives
    if(!savedData) {
      savedData = localStorage.getItem('transition360_situation_data_autosave');
    }
    
    if(savedData) {
      const data = JSON.parse(savedData);
      console.log("📥 Chargement des données sauvegardées...");
      
      // Remplir tous les champs du formulaire
      Object.keys(data).forEach(key => {
        const field = document.getElementById(key);
        if(field && data[key]) {
          field.value = data[key];
        }
      });
      
      console.log("✅ Données chargées avec succès");
    }
  } catch(error) {
    console.error("❌ Erreur lors du chargement:", error);
  }
}

/* ===== SOUMISSION DU FORMULAIRE ===== */

function handleFormSubmit(event) {
  // IMPORTANT: Empêcher le rechargement de la page
  event.preventDefault();
  
  console.log("💾 Enregistrement du bilan...");
  
  // Validation
  if(!validateForm()) {
    return false;
  }
  
  // Collecte des données
  const formData = collectFormData();
  
  // Sauvegarde dans localStorage
  try {
    localStorage.setItem('transition360_situation_data', JSON.stringify(formData));
    console.log("✅ Bilan enregistré avec succès");
    console.log("📊 Données sauvegardées:", formData);
    
    // Afficher message de succès
    showSuccessMessage();
    
    // Proposer de retourner à l'accueil après 2 secondes
    setTimeout(() => {
      const goHome = confirm(
        "✅ Votre bilan a été enregistré avec succès !\n\n" +
        "Voulez-vous retourner à la page d'accueil ?"
      );
      
      if(goHome) {
        window.location.href = 'index.html';
      }
    }, 500);
    
  } catch(error) {
    console.error("❌ Erreur lors de la sauvegarde:", error);
    alert("❌ Une erreur s'est produite lors de l'enregistrement.\n\nDétails: " + error.message);
  }
  
  return false;
}

/* ===== VALIDATION DU FORMULAIRE ===== */

function validateForm() {
  const form = document.getElementById('situationForm');
  let isValid = true;
  let firstError = null;
  
  // Récupérer tous les champs requis
  const requiredFields = form.querySelectorAll('[required]');
  
  // Supprimer les anciennes erreurs
  document.querySelectorAll('.error').forEach(el => {
    el.classList.remove('error');
  });
  document.querySelectorAll('.error-message').forEach(el => {
    el.remove();
  });
  
  // Valider chaque champ
  requiredFields.forEach(field => {
    if(!field.value.trim()) {
      isValid = false;
      field.classList.add('error');
      
      // Ajouter un message d'erreur
      const errorMsg = document.createElement('span');
      errorMsg.className = 'error-message';
      errorMsg.textContent = 'Ce champ est obligatoire';
      field.parentNode.appendChild(errorMsg);
      
      // Mémoriser le premier champ en erreur
      if(!firstError) {
        firstError = field;
      }
    }
  });
  
  // Validation spécifique pour l'âge
  const ageField = document.getElementById('age');
  if(ageField && ageField.value) {
    const age = parseInt(ageField.value);
    if(age < 16 || age > 99) {
      isValid = false;
      ageField.classList.add('error');
      
      const errorMsg = document.createElement('span');
      errorMsg.className = 'error-message';
      errorMsg.textContent = 'L\'âge doit être entre 16 et 99 ans';
      ageField.parentNode.appendChild(errorMsg);
      
      if(!firstError) {
        firstError = ageField;
      }
    }
  }
  
  // Si erreur, scroller vers le premier champ en erreur
  if(!isValid && firstError) {
    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    firstError.focus();
    
    alert(
      "⚠️ Formulaire incomplet\n\n" +
      "Veuillez remplir tous les champs obligatoires (marqués d'un astérisque *)."
    );
  }
  
  return isValid;
}

/* ===== COLLECTE DES DONNÉES ===== */

function collectFormData() {
  const formData = {};
  
  // Liste de tous les champs du formulaire (ajout de q21)
  const fields = [
    'prenom', 'age',
    'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10',
    'q11', 'q12', 'q13', 'q14', 'q15', 'q16', 'q17', 'q18', 'q19', 'q20', 'q21'
  ];
  
  fields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if(field) {
      formData[fieldId] = field.value.trim();
    }
  });
  
  // Ajouter un timestamp
  formData.timestamp = new Date().toISOString();
  
  return formData;
}

/* ===== ✨ NOUVELLE FONCTION: AUTO-SAUVEGARDE INSTANTANÉE ===== */

let autoSaveTimeout = null;

function setupAutoSave() {
  const form = document.getElementById('situationForm');
  if(!form) return;
  
  // Écouter tous les champs input et textarea
  const fields = form.querySelectorAll('input, textarea');
  
  fields.forEach(field => {
    // Événement "input" se déclenche à chaque caractère tapé
    field.addEventListener('input', function() {
      // Debounce: attendre 500ms après la dernière frappe
      clearTimeout(autoSaveTimeout);
      
      autoSaveTimeout = setTimeout(() => {
        performAutoSave();
      }, 500);
    });
  });
  
  console.log("✅ Auto-sauvegarde instantanée activée");
}

function performAutoSave() {
  try {
    const formData = collectFormData();
    
    // Vérifier si au moins un champ est rempli
    const hasData = Object.keys(formData).some(key => {
      return key !== 'timestamp' && formData[key] && formData[key].length > 0;
    });
    
    if(hasData) {
      localStorage.setItem('transition360_situation_data_autosave', JSON.stringify(formData));
      console.log("💾 Auto-sauvegarde effectuée");
      
      // ✨ Afficher un petit indicateur visuel discret
      showAutoSaveIndicator();
    }
  } catch(error) {
    console.error("❌ Erreur auto-sauvegarde:", error);
  }
}

function showAutoSaveIndicator() {
  // Chercher ou créer l'indicateur
  let indicator = document.getElementById('autosave-indicator');
  
  if(!indicator) {
    indicator = document.createElement('div');
    indicator.id = 'autosave-indicator';
    indicator.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: rgba(16, 185, 129, 0.9);
      color: white;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      z-index: 10000;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
    indicator.textContent = '💾 Sauvegardé automatiquement';
    document.body.appendChild(indicator);
  }
  
  // Afficher l'indicateur
  indicator.style.opacity = '1';
  
  // Masquer après 2 secondes
  setTimeout(() => {
    indicator.style.opacity = '0';
  }, 2000);
}

/* ===== MESSAGES & NOTIFICATIONS ===== */

function showSuccessMessage() {
  const btn = document.querySelector('.main-btn');
  if(!btn) return;
  
  const originalHTML = btn.innerHTML;
  const originalBg = btn.style.background;
  
  btn.innerHTML = `
    <svg class="btn-icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>✅ Bilan enregistré !</span>
  `;
  btn.style.background = '#10b981';
  btn.disabled = true;
  
  setTimeout(() => {
    btn.innerHTML = originalHTML;
    btn.style.background = originalBg;
    btn.disabled = false;
  }, 3000);
}

/* ===== GESTION DES ERREURS DE SAISIE ===== */

// Supprimer l'erreur quand l'utilisateur commence à taper
document.addEventListener('input', function(event) {
  if(event.target.matches('input[required], textarea[required]')) {
    if(event.target.value.trim()) {
      event.target.classList.remove('error');
      const errorMsg = event.target.parentNode.querySelector('.error-message');
      if(errorMsg) {
        errorMsg.remove();
      }
    }
  }
});

/* ===== ANIMATIONS CSS ===== */

// Ajouter les styles d'animation au document
const style = document.createElement('style');
style.textContent = `
  .btn-icon-small {
    width: 20px;
    height: 20px;
  }
`;
document.head.appendChild(style);

console.log("✅ Script situation chargé et prêt");
