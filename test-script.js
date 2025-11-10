/* ===== 12 Dimensions (ordre de référence pour la matrice des univers) =====
   Ordre (DOIT rester le même) : 
   MO, PT, AL, SI, CS, EC, MP, CP, IP, AT, AA, RI
*/
const DIMENSIONS = [
  { code:"MO", name:"Méthode & organisation" },
  { code:"PT", name:"Pratique & technique" },
  { code:"AL", name:"Analyse & logique" },
  { code:"SI", name:"Sciences & innovation" },
  { code:"CS", name:"Conception & structuration d’idées" },
  { code:"EC", name:"Expression & création" },
  { code:"MP", name:"Mouvement & plein air" },
  { code:"CP", name:"Coordination & pilotage" },
  { code:"IP", name:"Initiative & projet" },
  { code:"AT", name:"Action & efficacité terrain" },
  { code:"AA", name:"Aide & Accompagnement" },
  { code:"RI", name:"Relation & influence" }
];

/* Légendes des niveaux 0→4 (infobulle title) */
const LEVEL_LABELS = {
  0: "0 – Pas du tout",
  1: "1 – Un peu",
  2: "2 – Moyennement",
  3: "3 – Plutôt",
  4: "4 – Totalement"
};

/* ===== 12 Questions – 4 propositions chacune (sans parenthèses codes) =====
   MAPPING : chaque proposition pointe une dimension (code)
   ATTENTION : les 12 dimensions apparaissent chacune 4 fois (équilibre).
*/
const QUESTIONS = [
  // Q1 – bloc MO, PT, AL, SI
  {
    id: 1, title: "On vous propose de rejoindre une nouvelle équipe, vous choisissez :",
    options: [
      { text: "Organiser le planning et structurer les tâches", dim: "MO" },
      { text: "Utiliser des outils techniques et équipements", dim: "PT" },
      { text: "Analyser les données et faire des bilans", dim: "AL" },
      { text: "Tester de nouvelles méthodes et expérimenter", dim: "SI" }
    ]
  },
  // Q2 – bloc CS, EC, CP, IP
  {
    id: 2, title: "Dans un projet créatif, vous préférez :",
    options: [
      { text: "Concevoir la structure et l’organisation générale", dim: "CS" },
      { text: "Créer les éléments visuels ou artistiques", dim: "EC" },
      { text: "Coordonner l’équipe et répartir les rôles", dim: "CP" },
      { text: "Proposer des idées nouvelles et lancer des pistes", dim: "IP" }
    ]
  },
  // Q3 – bloc MP, AT, AA, RI
  {
    id: 3, title: "Au travail, vous préférez :",
    options: [
      { text: "Être en mouvement et travailler dehors", dim: "MP" },
      { text: "Agir rapidement pour régler des situations urgentes", dim: "AT" },
      { text: "Écouter et aider les personnes en difficulté", dim: "AA" },
      { text: "Convaincre et faire changer d’avis", dim: "RI" }
    ]
  },
  // Q4 – MO, PT, AL, SI
  {
    id: 4, title: "Pour progresser, vous choisissez d’apprendre à :",
    options: [
      { text: "Mieux planifier et suivre l’avancement des projets", dim: "MO" },
      { text: "Maîtriser de nouvelles techniques manuelles", dim: "PT" },
      { text: "Résoudre des problèmes complexes par l’analyse", dim: "AL" },
      { text: "Comprendre les dernières avancées scientifiques", dim: "SI" }
    ]
  },
  // Q5 – CS, EC, CP, IP
  {
    id: 5, title: "Dans un nouveau projet, vous préférez :",
    options: [
      { text: "Définir le concept et l’architecture d’ensemble", dim: "CS" },
      { text: "Créer l’identité visuelle et l’ambiance", dim: "EC" },
      { text: "Superviser l’avancement et gérer les priorités", dim: "CP" },
      { text: "Lancer de nouvelles initiatives sans attendre", dim: "IP" }
    ]
  },
  // Q6 – MP, AT, AA, RI
  {
    id: 6, title: "Votre journée idéale inclut :",
    options: [
      { text: "Bouger, vous déplacer et être en extérieur", dim: "MP" },
      { text: "Intervenir sur le terrain avec des résultats directs", dim: "AT" },
      { text: "Accompagner des personnes individuellement", dim: "AA" },
      { text: "Négocier et défendre des positions", dim: "RI" }
    ]
  },
  // Q7 – MO, PT, AL, SI
  {
    id: 7, title: "On vous confie une mission, vous choisissez de :",
    options: [
      { text: "Mettre en place des procédures claires", dim: "MO" },
      { text: "Réparer, assembler ou fabriquer quelque chose", dim: "PT" },
      { text: "Examiner la situation et établir un diagnostic", dim: "AL" },
      { text: "Explorer des solutions innovantes", dim: "SI" }
    ]
  },
  // Q8 – CS, EC, CP, IP
  {
    id: 8, title: "Dans un projet culturel, vous préférez :",
    options: [
      { text: "Structurer le contenu et le scénario", dim: "CS" },
      { text: "Créer l’univers sonore ou visuel", dim: "EC" },
      { text: "Organiser la production et les équipes", dim: "CP" },
      { text: "Inventer de nouveaux formats d’expression", dim: "IP" }
    ]
  },
  // Q9 – MP, AT, AA, RI
  {
    id: 9, title: "Dans une association, vous choisissez de :",
    options: [
      { text: "Partir en mission dans des lieux variés", dim: "MP" },
      { text: "Répondre aux urgences et situations critiques", dim: "AT" },
      { text: "Soutenir et conseiller les bénéficiaires", dim: "AA" },
      { text: "Représenter l’association et mobiliser des partenaires", dim: "RI" }
    ]
  },
  // Q10 – MO, PT, AL, SI
  {
    id: 10, title: "Vous souhaitez développer vos compétences en :",
    options: [
      { text: "Organisation et gestion du temps", dim: "MO" },
      { text: "Savoir-faire technique et pratique", dim: "PT" },
      { text: "Raisonnement logique et synthèse", dim: "AL" },
      { text: "Recherche et découverte de nouvelles connaissances", dim: "SI" }
    ]
  },
  // Q11 – CS, EC, CP, IP
  {
    id: 11, title: "Dans une équipe créative, vous aimez :",
    options: [
      { text: "Concevoir la stratégie globale", dim: "CS" },
      { text: "Produire les créations artistiques", dim: "EC" },
      { text: "Piloter le projet et coordonner", dim: "CP" },
      { text: "Proposer des approches originales", dim: "IP" }
    ]
  },
  // Q12 – MP, AT, AA, RI
  {
    id: 12, title: "Vous êtes attiré(e) par des activités de :",
    options: [
      { text: "Animation sportive en plein air", dim: "MP" },
      { text: "Intervention rapide en situation d’urgence", dim: "AT" },
      { text: "Écoute et médiation avec les personnes", dim: "AA" },
      { text: "Persuasion et influence dans les discussions", dim: "RI" }
    ]
  }
];

/* ===== Matrice des 21 univers (pondérations 0/1/3/6) =====
   Ordre des poids = DIMENSIONS dans l’ordre ci-dessus.
*/
const universes = [
  { id: 1, name: "Agriculture, nature & animaux", icon: "🌾", weights: [1,6,3,1,0,0,6,0,1,3,1,0] },
  { id: 2, name: "Arts, design & création", icon: "🎨", weights: [0,3,1,0,6,6,0,1,1,1,0,1] },
  { id: 3, name: "Commerce, marketing & vente", icon: "🛒", weights: [0,0,1,0,1,3,0,1,1,1,3,6] },
  { id: 4, name: "Communication, médias & culture", icon: "📺", weights: [1,0,1,0,3,6,0,3,1,0,1,6] },
  { id: 5, name: "Construction, BTP & habitat", icon: "🏗️", weights: [3,6,1,0,1,0,3,6,1,3,0,1] },
  { id: 6, name: "Droit, administration & politique publique", icon: "⚖️", weights: [6,0,6,0,0,1,0,0,1,0,1,3] },
  { id: 7, name: "Éducation, formation & apprentissage", icon: "🎓", weights: [3,1,1,1,1,3,0,1,1,0,6,6] },
  { id: 8, name: "Environnement, climat & énergies", icon: "🌍", weights: [1,3,6,6,1,0,1,1,3,1,0,1] },
  { id: 9, name: "Gestion, finance & comptabilité", icon: "💰", weights: [6,0,6,0,0,0,0,1,0,1,0,3] },
  { id: 10, name: "Hôtellerie, restauration & tourisme", icon: "🏨", weights: [3,3,0,0,0,1,6,1,0,3,6,3] },
  { id: 11, name: "Immobilier & patrimoine", icon: "🏠", weights: [1,3,6,0,1,1,0,1,1,1,1,6] },
  { id: 12, name: "Industrie, fabrication & production", icon: "⚙️", weights: [6,6,1,1,0,0,3,3,1,3,0,1] },
  { id: 13, name: "Logistique, transport & mobilité", icon: "🚚", weights: [6,3,1,0,0,0,3,6,1,3,1,1] },
  { id: 14, name: "Management, entrepreneuriat & stratégie", icon: "📊", weights: [3,0,3,1,1,1,0,6,6,1,3,3] },
  { id: 15, name: "Numérique, informatique & data", icon: "💻", weights: [1,3,6,6,1,1,0,1,3,3,0,1] },
  { id: 16, name: "Santé, bien-être & médical", icon: "⚕️", weights: [1,6,3,1,0,1,3,1,1,3,6,3] },
  { id: 17, name: "Sciences, recherche & innovation", icon: "🔬", weights: [3,1,6,6,3,1,0,1,3,1,0,1] },
  { id: 18, name: "Sécurité, défense & urgence", icon: "🚨", weights: [3,3,1,0,0,0,6,6,1,3,3,1] },
  { id: 19, name: "Social, aide & solidarité", icon: "❤️", weights: [1,1,1,0,0,3,0,3,1,1,6,6] },
  { id: 20, name: "Sport, loisirs & vie active", icon: "⚽", weights: [1,3,0,0,1,3,6,3,1,1,3,6] },
  { id: 21, name: "Technologies émergentes & futur du travail", icon: "🚀", weights: [1,1,3,6,3,1,0,1,6,1,1,3] }
];
