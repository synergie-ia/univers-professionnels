function displayUnivers(){
  console.log("Calcul des univers...");
  
  try {
    const list = calcUnivers();
    console.log(`${list.length} univers calculés`);
    
    if(list.length === 0){
      alert("Erreur : Aucun univers n'a pu être calculé. Vérifiez que universes-data.js est bien chargé.");
      return;
    }
    
    // ✨ SAUVEGARDER LES POURCENTAGES DES UNIVERS
    const percentages = {};
    list.forEach(u => {
      percentages[u.id] = u.pct;
    });
    localStorage.setItem('univers_percentages', JSON.stringify(percentages));
    
    const root = document.getElementById("univers-results");
    const top5 = list.slice(0, 5);
    const others = list.slice(5);

    // ... reste du code inchangé
