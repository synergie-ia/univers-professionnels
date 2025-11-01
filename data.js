// ============================================
// DATA.JS — MATRICE PRINCIPALE IA360 (v2025)
// ============================================

// --- 1️⃣ QUESTIONS D’INTÉRÊTS ---

const questions = [
  { title: "Bouger, être actif physiquement", description: "Te déplacer sur le terrain, mobiliser ton corps, ne pas rester derrière un bureau.", examples: "Faire du sport, marcher, porter, être debout, te déplacer souvent." },
  { title: "Travailler avec tes mains", description: "Fabriquer, assembler, manipuler des outils, créer ou réparer.", examples: "Bricoler, construire, cuisiner, réparer, travailler le bois, faire de l’artisanat." },
  { title: "Enquêter, observer, comprendre", description: "Observer, analyser, chercher à comprendre les causes et les faits.", examples: "Faire des recherches, comparer, mener une enquête, analyser une situation." },
  { title: "Explorer les sciences ou les technologies", description: "Utiliser des outils techniques ou scientifiques, expérimenter, coder.", examples: "Faire des expériences, utiliser des logiciels, manipuler des appareils, programmer." },
  { title: "Utiliser des chiffres, calculer, raisonner logiquement", description: "Analyser des données, résoudre des problèmes logiques ou financiers.", examples: "Faire des maths, gérer un budget, analyser des statistiques, résoudre des énigmes." },
  { title: "Créer artistiquement, imaginer", description: "Exprimer ta créativité, produire des formes, sons ou idées originales.", examples: "Dessiner, écrire, composer, concevoir, créer du contenu visuel ou sonore." },
  { title: "Concevoir, résoudre des problèmes, innover", description: "Imaginer des solutions nouvelles, améliorer l’existant, inventer.", examples: "Imaginer un produit, innover, améliorer un système, lancer un projet." },
  { title: "Aider, accompagner, prendre soin", description: "Soutenir quelqu’un, écouter, soigner, conseiller, rassurer.", examples: "Aider un proche, soigner, accompagner des personnes, écouter, rassurer." },
  { title: "Enseigner, transmettre, expliquer", description: "Partager des savoirs ou des techniques, former quelqu’un.", examples: "Donner des cours, former quelqu’un, expliquer une méthode." },
  { title: "Communiquer, écrire, t’exprimer", description: "Informer, raconter, parler en public, écrire, animer un groupe.", examples: "Écrire un texte, faire une présentation, créer du contenu." },
  { title: "Convaincre, vendre, négocier", description: "Persuader, défendre une idée, influencer, trouver un accord.", examples: "Vendre, négocier, convaincre, défendre un projet." },
  { title: "Organiser, décider, diriger", description: "Planifier, coordonner, gérer des équipes ou projets.", examples: "Organiser un événement, gérer une équipe, prendre des décisions." },
  { title: "Travailler en autonomie", description: "Avancer seul, gérer ton temps et tes priorités librement.", examples: "Freelance, indépendance, auto-entrepreneuriat, projets personnels." },
  { title: "Suivre un cadre structuré", description: "Respecter des règles, suivre des consignes, appliquer une méthode claire.", examples: "Travailler avec des procédures, des horaires fixes, un cadre stable." }
];

// --- 2️⃣ DÉFINITION DES UNIVERS ET SOUS-UNIVERS ---

const universNoms = {
  AGRI: "🌾 Agriculture, Nature & Animaux",
  ARTS: "🎨 Arts, Design & Création",
  COMM: "🛒 Commerce, Marketing & Vente",
  MEDIA: "🎙️ Communication, Médias & Culture",
  BTP: "🏗️ Construction, BTP & Habitat",
  DROIT: "⚖️ Droit, Administration & Politique",
  EDU: "🎓 Éducation, Formation & Apprentissage",
  ENV: "🌍 Environnement, Climat & Énergies",
  FIN: "💶 Gestion, Finance & Comptabilité",
  HRT: "🍽️ Hôtellerie, Restauration & Tourisme",
  IND: "⚙️ Industrie, Fabrication & Production",
  LOG: "🚚 Logistique, Transport & Mobilité",
  MGT: "💼 Management, Entrepreneuriat & Stratégie",
  NUM: "💻 Numérique, Informatique & Data",
  SANTE: "⚕️ Santé, Bien-être & Médical",
  SCI: "🔬 Sciences, Recherche & Innovation",
  SECUR: "🛡️ Sécurité, Défense & Urgence",
  SOCIAL: "❤️ Social, Aide & Solidarité",
  SPORT: "🏋️ Sport, Loisirs & Vie Active",
  TECH: "🚀 Technologies Émergentes & Futur du Travail",
  IMMO: "🏠 Immobilier & Patrimoine"
};

// Exemple simplifié : 3 sous-univers par univers (à compléter plus tard si besoin)
const sousUnivers = {
  AGRI: ["Agroalimentaire", "Maraîchage", "Élevage"],
  ARTS: ["Design graphique", "Mode & stylisme", "Cinéma & audiovisuel"],
  COMM: ["Marketing digital", "Vente B2B", "E-commerce"],
  MEDIA: ["Journalisme", "Audiovisuel", "Relations publiques"],
  BTP: ["Architecture", "Chantier", "Éco-construction"],
  DROIT: ["Droit privé", "Administration publique", "Ressources humaines"],
  EDU: ["Enseignement", "Formation professionnelle", "Orientation"],
  ENV: ["Recyclage", "Énergies renouvelables", "Protection de la biodiversité"],
  FIN: ["Comptabilité", "Audit", "Banque"],
  HRT: ["Cuisine", "Tourisme", "Hôtellerie"],
  IND: ["Production industrielle", "Maintenance", "Robotique"],
  LOG: ["Transport", "Supply chain", "Mobilité durable"],
  MGT: ["Gestion de projet", "Création d’entreprise", "Stratégie"],
  NUM: ["Développement web", "Cybersécurité", "Data science"],
  SANTE: ["Médecine", "Paramédical", "Prévention santé"],
  SCI: ["Physique", "Biotechnologies", "Climatologie"],
  SECUR: ["Police", "Pompiers", "Cyberdéfense"],
  SOCIAL: ["Aide à domicile", "Insertion", "Handicap"],
  SPORT: ["Coaching sportif", "Animation", "Tourisme sportif"],
  TECH: ["Robotique avancée", "CleanTech", "HealthTech"],
  IMMO: ["Transaction", "Promotion immobilière", "Gestion locative"]
};

// --- 3️⃣ MATRICE PRINCIPALE IA360 ---
// Valeurs = importance de chaque intérêt (2 = peu structurant → 10 = très structurant)
// Exposant appliqué dans script.js si >= 8

const matricePrincipale = {
  AGRI:  [10,10,4,4,4,2,4,6,2,2,2,2,8,6],
  ARTS:  [4,8,4,4,2,10,8,2,2,8,4,4,8,2],
  COMM:  [4,4,6,4,6,4,6,2,4,8,10,8,8,4],
  MEDIA: [2,2,6,6,4,8,8,2,8,10,8,6,6,2],
  BTP:   [8,10,6,6,6,2,8,2,2,2,2,6,8,8],
  DROIT: [2,2,8,8,10,2,6,6,8,6,6,8,6,8],
  EDU:   [4,2,6,4,2,6,8,10,10,6,2,4,8,4],
  ENV:   [6,6,8,10,8,4,8,6,2,2,2,4,8,6],
  FIN:   [2,2,8,8,10,2,8,2,2,4,6,8,8,8],
  HRT:   [8,8,4,2,2,8,4,6,4,4,8,8,6,6],
  IND:   [8,10,8,8,8,2,8,2,2,2,2,8,8,8],
  LOG:   [6,8,4,6,8,2,6,2,2,4,4,8,8,8],
  MGT:   [2,2,6,6,6,4,8,6,4,6,8,10,10,4],
  NUM:   [2,2,6,10,8,6,8,2,4,6,4,6,8,6],
  SANTE: [2,2,8,6,4,2,6,10,8,4,2,4,8,8],
  SCI:   [2,2,10,10,10,4,8,4,6,4,2,4,8,8],
  SECUR: [10,8,6,6,6,2,6,8,4,4,4,8,8,8],
  SOCIAL:[4,4,6,4,2,4,6,10,8,4,4,4,8,6],
  SPORT: [10,10,4,4,2,4,6,8,4,4,4,4,10,4],
  TECH:  [2,2,6,10,8,6,10,4,4,6,4,6,8,6],
  IMMO:  [4,6,6,4,6,2,4,2,2,4,8,8,8,8]
};
