// ==========================================================
// test-data.js — Données du Test d'Intérêts Reconversion 360 IA
// ==========================================================

// 12 Dimensions d'intérêts professionnels (Questionnaire adulte)
window.interests = [
  { id: 1, code: "MO", name: "Méthode & organisation", title: "Méthode & organisation", description: "Quand vous travaillez sur quelque chose d'important" },
  { id: 2, code: "PT", name: "Pratique & technique", title: "Pratique & technique", description: "Face à un problème concret" },
  { id: 3, code: "AL", name: "Analyse & logique", title: "Analyse & logique", description: "Quand un problème se présente" },
  { id: 4, code: "SI", name: "Sciences & innovation", title: "Sciences & innovation", description: "Face à l'inconnu ou à un défi technique" },
  { id: 5, code: "CS", name: "Conception & structuration d'idées", title: "Conception & structuration d'idées", description: "Avant de passer à l'action" },
  { id: 6, code: "EC", name: "Expression & création", title: "Expression & création", description: "Dans vos productions (travaux, projets, créations)" },
  { id: 7, code: "MP", name: "Mouvement & plein air", title: "Mouvement & plein air", description: "Dans votre quotidien" },
  { id: 8, code: "CP", name: "Coordination & pilotage", title: "Coordination & pilotage", description: "Dans une dynamique de groupe" },
  { id: 9, code: "IP", name: "Initiative & projet", title: "Initiative & projet", description: "Face à une situation établie" },
  { id: 10, code: "AT", name: "Action & efficacité terrain", title: "Action & efficacité terrain", description: "Au travail, vous préférez" },
  { id: 11, code: "AA", name: "Aide & Accompagnement", title: "Aide & Accompagnement", description: "Dans vos interactions avec les autres" },
  { id: 12, code: "RI", name: "Relationnel & influence", title: "Relationnel & influence", description: "Dans vos échanges avec les autres" }
];

// 21 Univers professionnels
// Ordre des poids: MO, PT, AL, SI, CS, EC, MP, CP, IP, AT, AA, RI
window.universes = [
  { id: 1, name: "Agriculture, nature & animaux", icon: "🌾", weights: [1, 6, 3, 1, 0, 0, 6, 0, 1, 3, 1, 0] },
  { id: 2, name: "Arts, design & création", icon: "🎨", weights: [0, 3, 1, 0, 6, 6, 0, 1, 1, 1, 0, 1] },
  { id: 3, name: "Commerce, marketing & vente", icon: "🛒", weights: [0, 0, 1, 0, 1, 3, 0, 1, 1, 1, 3, 6] },
  { id: 4, name: "Communication, médias & culture", icon: "📺", weights: [1, 0, 1, 0, 3, 6, 0, 3, 1, 0, 1, 6] },
  { id: 5, name: "Construction, BTP & habitat", icon: "🏗️", weights: [3, 6, 1, 0, 1, 0, 3, 6, 1, 3, 0, 1] },
  { id: 6, name: "Droit, administration & politique publique", icon: "⚖️", weights: [6, 0, 6, 0, 0, 1, 0, 0, 1, 0, 1, 3] },
  { id: 7, name: "Éducation, formation & apprentissage", icon: "🎓", weights: [3, 1, 1, 1, 1, 3, 0, 1, 1, 0, 6, 6] },
  { id: 8, name: "Environnement, climat & énergies", icon: "🌍", weights: [1, 3, 6, 6, 1, 0, 1, 1, 3, 1, 0, 1] },
  { id: 9, name: "Gestion, finance & comptabilité", icon: "💰", weights: [6, 0, 6, 0, 0, 0, 0, 1, 0, 1, 0, 3] },
  { id: 10, name: "Hôtellerie, restauration & tourisme", icon: "🏨", weights: [3, 3, 0, 0, 0, 1, 6, 1, 0, 3, 6, 3] },
  { id: 11, name: "Immobilier & patrimoine", icon: "🏠", weights: [1, 3, 6, 0, 1, 1, 0, 1, 1, 1, 1, 6] },
  { id: 12, name: "Industrie, fabrication & production", icon: "⚙️", weights: [6, 6, 1, 1, 0, 0, 3, 3, 1, 3, 0, 1] },
  { id: 13, name: "Logistique, transport & mobilité", icon: "🚚", weights: [6, 3, 1, 0, 0, 0, 3, 6, 1, 3, 1, 1] },
  { id: 14, name: "Management, entrepreneuriat & stratégie", icon: "📊", weights: [3, 0, 3, 1, 1, 1, 0, 6, 6, 1, 3, 3] },
  { id: 15, name: "Numérique, informatique & data", icon: "💻", weights: [1, 3, 6, 6, 1, 1, 0, 1, 3, 3, 0, 1] },
  { id: 16, name: "Santé, bien-être & médical", icon: "⚕️", weights: [1, 6, 3, 1, 0, 1, 3, 1, 1, 3, 6, 3] },
  { id: 17, name: "Sciences, recherche & innovation", icon: "🔬", weights: [3, 1, 6, 6, 3, 1, 0, 1, 3, 1, 0, 1] },
  { id: 18, name: "Sécurité, défense & urgence", icon: "🚨", weights: [3, 3, 1, 0, 0, 0, 6, 6, 1, 3, 3, 1] },
  { id: 19, name: "Social, aide & solidarité", icon: "❤️", weights: [1, 1, 1, 0, 0, 3, 0, 3, 1, 1, 6, 6] },
  { id: 20, name: "Sport, loisirs & vie active", icon: "⚽", weights: [1, 3, 0, 0, 1, 3, 6, 3, 1, 1, 3, 6] },
  { id: 21, name: "Technologies émergentes & futur du travail", icon: "🚀", weights: [1, 1, 3, 6, 3, 1, 0, 1, 6, 1, 1, 3] }
];

// Clé de stockage local
window.R360_STORAGE_KEY = 'reconversion360_ratings';
