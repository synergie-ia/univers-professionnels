/* 
  ============================================
  RECONVERSION 360 IA - BILAN DE SITUATION
  ============================================
  Script pour sauvegarder et charger les données du formulaire
*/

document.addEventListener('DOMContentLoaded', function() {
  
  const form = document.getElementById('situationForm');
  
  // ===== CHARGEMENT DES DONNÉES EXISTANTES =====
  function loadSavedData(){
    const saved = localStorage.getItem('situation_data');
    if(!saved){
      console.log('Aucune donnée sauvegardée trouvée');
      return;
    }
    
    try {
      const data = JSON.parse(saved);
      console.log('📥 Chargement des données:', data);
      
      // Remplir tous les champs du formulaire
      Object.keys(data).forEach(key => {
        const field = document.getElementById(key);
        if(field && data[key]){
          field.value = data[key];
          console.log(`✓ Champ ${key} rempli`);
        }
      });
      
      console.log('✅ Données chargées avec succès');
      
    } catch(e) {
      console.error('❌ Erreur lors du chargement des données:', e);
    }
  }
  
  // ===== SAUVEGARDE AUTOMATIQUE =====
  function autoSave(){
    try {
      const formData = new FormData(form);
      const data = {};
      
      formData.forEach((value, key) => {
        if(value && value.trim() !== ''){
          data[key] = value.trim();
        }
      });
      
      // Ne sauvegarder que si on a au moins quelques données
      if(Object.keys(data).length > 2){
        localStorage.setItem('situation_data', JSON.stringify(data));
        console.log('💾 Sauvegarde automatique OK');
      }
      
    } catch(e) {
      console.error('❌ Erreur sauvegarde automatique:', e);
    }
  }
  
  // Sauvegarder automatiquement à chaque modification (avec délai)
  let saveTimeout;
  form.addEventListener('input', function(){
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      autoSave();
    }, 500); // Attendre 500ms après la dernière frappe
  });
  
  // ===== SOUMISSION DU FORMULAIRE =====
  form.addEventListener('submit', function(e){
    e.preventDefault(); // IMPORTANT : Empêcher le rechargement de la page
    e.stopPropagation();
    
    console.log('📝 Tentative d\'enregistrement du bilan...');
    
    // Récupérer toutes les données
    const formData = new FormData(form);
    const data = {};
    
    formData.forEach((value, key) => {
      data[key] = value.trim();
    });
    
    console.log('📊 Données récupérées:', data);
    
    // Vérifier que tous les champs obligatoires sont remplis
    const required = [
      'prenom', 'age', 
      'q1', 'q2', 'q3', 'q4',
      'q5', 'q6', 'q7', 'q8', 
      'q9', 'q10',
      'q11', 'q12', 'q13', 'q14', 'q15', 'q16', 'q17',
      'q18',
      'q19'
    ];
    
    const missing = required.filter(field => !data[field] || data[field] === '');
    
    if(missing.length > 0){
      console.error('❌ Champs manquants:', missing);
      alert(`⚠️ Veuillez remplir tous les champs obligatoires.\n\nChamps manquants: ${missing.join(', ')}`);
      
      // Scroller vers le premier champ manquant
      const firstMissing = document.getElementById(missing[0]);
      if(firstMissing){
        firstMissing.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstMissing.focus();
      }
      
      return false;
    }
    
    // Sauvegarder dans localStorage
    try {
      localStorage.setItem('situation_data', JSON.stringify(data));
      console.log('✅ Données sauvegardées dans localStorage');
      
      // Vérifier immédiatement que la sauvegarde a fonctionné
      const verification = localStorage.getItem('situation_data');
      if(!verification){
        throw new Error('La sauvegarde a échoué');
      }
      
      console.log('✅ Vérification: données bien enregistrées');
      
      // Message de confirmation
      alert('✅ Votre bilan de situation a été enregistré avec succès !\n\n' + Object.keys(data).length + ' champs sauvegardés.\n\nVous allez être redirigé vers l\'accueil.');
      
      // Rediriger vers l'accueil après 1 seconde
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
      
    } catch(e) {
      console.error('❌ Erreur lors de la sauvegarde:', e);
      alert('❌ Erreur lors de la sauvegarde. Veuillez réessayer.\n\nDétails: ' + e.message);
    }
    
    return false; // Empêcher tout comportement par défaut
  });
  
  // ===== CHARGER LES DONNÉES AU DÉMARRAGE =====
  console.log('🚀 Initialisation du formulaire de situation');
  loadSavedData();
  
  // ===== BOUTON DE DEBUG (optionnel - à retirer en production) =====
  console.log('💡 Pour débugger, tapez dans la console:');
  console.log('   localStorage.getItem("situation_data")');
  
});
