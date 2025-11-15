// ============================================
// RECONVERSION 360 IA - DONNÉES COMPLÈTES
// ============================================
// VERSION OPTIMISÉE - Coefficients selon l'algorithme
// Ordre des dimensions : MO, PT, AL, SI, CS, EC, CP, IP, MP, AE, AA, RI

// ===== DIMENSIONS =====
const DIMENSIONS = [
  { code: "MO", name: "Méthode & organisation" },
  { code: "PT", name: "Pratique & technique" },
  { code: "AL", name: "Analyse & logique" },
  { code: "SI", name: "Sciences & innovation" },
  { code: "CS", name: "Conception & structuration d'idées" },
  { code: "EC", name: "Expression & création" },
  { code: "CP", name: "Coordination & pilotage" },
  { code: "IP", name: "Initiative & projet" },
  { code: "MP", name: "Mouvement & plein air" },
  { code: "AE", name: "Action & efficacité terrain" },
  { code: "AA", name: "Aide & Accompagnement" },
  { code: "RI", name: "Relation & influence" }
];

// ===== QUESTIONS DU QUESTIONNAIRE =====
const QUESTIONS = [
  {
    id: "q1",
    title: "SITUATION 1 — Découvrir un nouveau sujet",
    options: [
      { text: "J'ai besoin de mettre de l'ordre dans les informations (étapes, catégories, priorités) pour commencer à être à l'aise.", dim: "MO" },
      { text: "J'ai envie de manipuler concrètement quelque chose en lien avec le sujet (objet, outil, support, dispositif) pour mieux le comprendre.", dim: "PT" },
      { text: "Je cherche spontanément à observer, comparer et analyser pour comprendre les causes et les conséquences.", dim: "AL" },
      { text: "Ce qui m'attire le plus, c'est d'explorer des idées, des hypothèses ou des découvertes liées à ce sujet.", dim: "SI" }
    ]
  },
  {
    id: "q2",
    title: "SITUATION 2 — Contribuer à un projet",
    options: [
      { text: "J'aime concevoir la structure globale du projet : l'architecture, les grands axes, le "scénario" d'ensemble.", dim: "CS" },
      { text: "Je prends plaisir à imaginer et produire des contenus créatifs (idées visuelles, textes, ambiances, mises en forme).", dim: "EC" },
      { text: "Je suis naturellement porté(e) vers le fait de superviser, planifier et gérer les priorités pour que le projet avance.", dim: "CP" },
      { text: "Je me reconnais dans le fait de lancer, entreprendre, oser : proposer de nouveaux projets, prendre l'initiative, démarrer quelque chose.", dim: "IP" }
    ]
  },
  {
    id: "q3",
    title: "SITUATION 3 — Agir avec et pour les autres",
    options: [
      { text: "J'aime quand une activité me permet de bouger, me déplacer, être physiquement actif(ve) plutôt que de rester toujours au même endroit.", dim: "MP" },
      { text: "Je suis à l'aise quand il faut intervenir vite, passer à l'action et être efficace sur le terrain.", dim: "AE" },
      { text: "Je me retrouve bien dans le fait de soutenir, écouter, former ou prendre soin des autres.", dim: "AA" },
      { text: "Je me sens dans mon élément lorsque je peux convaincre, négocier, influencer ou représenter un groupe, une idée, une position.", dim: "RI" }
    ]
  },
  {
    id: "q4",
    title: "SITUATION 4 — Porter une responsabilité ou un dossier",
    options: [
      { text: "Je veille naturellement à structurer le travail : procédures, méthodes, outils d'organisation, suivi rigoureux.", dim: "MO" },
      { text: "Je me vois bien dans un rôle où je supervise, coordonne et ajuste le travail des autres au fil du temps.", dim: "CP" },
      { text: "Ce qui me correspond, c'est de prendre des initiatives, proposer des projets, ouvrir des pistes nouvelles plutôt que d'attendre qu'on me dise quoi faire.", dim: "IP" },
      { text: "J'accorde une place importante au fait d'accompagner les personnes, les soutenir, les rassurer, les aider à progresser.", dim: "AA" }
    ]
  },
  {
    id: "q5",
    title: "SITUATION 5 — Résoudre un problème concret",
    options: [
      { text: "J'aime être en lien avec la dimension pratique ou technique : manipuler, ajuster, bricoler, faire fonctionner un dispositif ou un outil.", dim: "PT" },
      { text: "Mon premier réflexe est souvent d'analyser calmement la situation : observer, poser un "diagnostic", comprendre ce qui cloche.", dim: "AL" },
      { text: "Je prends plaisir à formuler des hypothèses, à tester des pistes, à chercher des explications "scientifiques" ou rationnelles.", dim: "SI" },
      { text: "Ce qui m'attire, c'est de passer rapidement à l'action pour tester une solution concrète et voir si elle fonctionne.", dim: "AE" }
    ]
  },
  {
    id: "q6",
    title: "SITUATION 6 — Activités qui vous nourrissent vraiment",
    options: [
      { text: "Je suis stimulé(e) par le fait de concevoir des idées structurées, des concepts, des scénarios, des plans d'ensemble.", dim: "CS" },
      { text: "Je ressens un vrai plaisir à créer : écrire, dessiner, imaginer des univers, produire des choses expressives ou artistiques.", dim: "EC" },
      { text: "J'aime que mon activité me permette d'être en mouvement, de changer de lieu, d'avoir une part physique ou "plein air".", dim: "MP" },
      { text: "Je me sens vivant(e) quand je peux parler, argumenter, influencer, créer un lien fort par la parole ou la présence.", dim: "RI" }
    ]
  },
  {
    id: "q7",
    title: "SITUATION 7 — Une journée de travail variée",
    options: [
      { text: "J'apprécie les moments où je peux organiser : préparer un planning, structurer des dossiers, clarifier les priorités.", dim: "MO" },
      { text: "J'aime aussi les moments où je peux faire quelque chose de concret avec mes mains : assembler, installer, ajuster, manipuler des outils ou du matériel.", dim: "PT" },
      { text: "Je suis à l'aise dès que mon activité me permet de bouger, d'alterner les lieux ou les postures, de ne pas rester figé.", dim: "MP" },
      { text: "Je me retrouve bien dans des tâches où il faut agir efficacement, aller au résultat, être utile de façon très pratique.", dim: "AE" }
    ]
  },
  {
    id: "q8",
    title: "SITUATION 8 — Réfléchir à une décision importante",
    options: [
      { text: "Je prends le temps d'observer la situation sous plusieurs angles, d'identifier les signaux faibles, les risques, les effets possibles.", dim: "AL" },
      { text: "Je cherche à m'appuyer sur des principes généraux, des connaissances, des explications solides pour orienter mon choix.", dim: "SI" },
      { text: "Je pense naturellement à la répartition des rôles, au calendrier, aux priorités, comme si j'organisais un petit système.", dim: "CP" },
      { text: "Je tiens compte de la façon dont je pourrai expliquer, défendre et faire accepter cette décision aux autres.", dim: "RI" }
    ]
  },
  {
    id: "q9",
    title: "SITUATION 9 — Imaginer un projet qui a du sens pour vous",
    options: [
      { text: "J'aimerais pouvoir concevoir la logique d'ensemble d'un projet : son concept, son architecture, la façon dont tout s'articule.", dim: "CS" },
      { text: "J'aimerais aussi que ce projet laisse de la place à l'expression, la créativité, la production de contenus originaux.", dim: "EC" },
      { text: "Il serait important pour moi que ce projet me permette d'accompagner, former, soutenir ou prendre soin d'autres personnes.", dim: "AA" },
      { text: "Je me vois bien dans un projet que je pourrais lancer moi-même, faire évoluer, développer avec une part de prise de risque ou d'innovation.", dim: "IP" }
    ]
  }
];

// ===== MATRICES DE CORRÉLATION =====
// Ordre : MO, PT, AL, SI, CS, EC, CP, IP, MP, AE, AA, RI
// Coefficients : 6=essentiel, 5=très important, 4=important, 3=utile, 2=bonus

const UNIVERS_WEIGHTS = [
  { id: 1,  weights: [0, 6, 0, 0, 0, 0, 0, 0, 6, 5, 0, 0] },
  { id: 2,  weights: [0, 0, 0, 0, 6, 6, 0, 4, 0, 0, 0, 0] },
  { id: 3,  weights: [0, 0, 0, 0, 2, 4, 0, 0, 0, 0, 0, 6] },
  { id: 4,  weights: [0, 0, 0, 0, 4, 6, 0, 0, 0, 0, 0, 6] },
  { id: 5,  weights: [0, 6, 0, 0, 0, 0, 5, 0, 6, 0, 0, 0] },
  { id: 6,  weights: [6, 0, 6, 0, 0, 0, 4, 0, 0, 0, 0, 0] },
  { id: 7,  weights: [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6] },
  { id: 8,  weights: [0, 5, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0] },
  { id: 9,  weights: [6, 0, 6, 0, 0, 0, 4, 0, 0, 0, 0, 0] },
  { id: 10, weights: [0, 6, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0] },
  { id: 11, weights: [4, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 6] },
  { id: 12, weights: [6, 6, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0] },
  { id: 13, weights: [6, 0, 0, 0, 0, 0, 5, 0, 6, 0, 0, 0] },
  { id: 14, weights: [5, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0] },
  { id: 15, weights: [0, 5, 6, 0, 0, 0, 0, 6, 0, 0, 0, 0] },
  { id: 16, weights: [0, 6, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0] },
  { id: 17, weights: [0, 0, 6, 6, 5, 0, 0, 0, 0, 0, 0, 0] },
  { id: 18, weights: [3, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0] },
  { id: 19, weights: [0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 6, 6] },
  { id: 20, weights: [0, 6, 0, 0, 0, 0, 2, 0, 6, 0, 0, 0] },
  { id: 21, weights: [0, 0, 6, 6, 0, 0, 0, 5, 0, 0, 0, 0] }
];

// ===== DONNÉES DES UNIVERS =====
const universesData = [
  {
    id: 1,
    name: "Agriculture, nature & animaux",
    icon: "🌾",
    description: "Cultivez, élevez, protégez la nature et travaillez avec les animaux dans des métiers en plein air.",
    subUniverses: [
      { icon: "🏭", name: "Agroalimentaire industriel", description: "Transformation et production à grande échelle." },
      { icon: "🌱", name: "Production biologique & circuits courts", description: "Agriculture respectueuse de l'environnement." },
      { icon: "🔬", name: "Agronomie & recherche appliquée", description: "Études pour améliorer rendements et durabilité." },
      { icon: "🌾", name: "Cultures céréalières", description: "Gestion de grandes surfaces agricoles." },
      { icon: "🍇", name: "Viticulture & œnologie", description: "Culture de la vigne et production du vin." }
    ]
  },
  {
    id: 2,
    name: "Arts, design & création",
    icon: "🎨",
    description: "Créez, dessinez, designez et exprimez votre créativité.",
    subUniverses: [
      { icon: "🎨", name: "Arts visuels & peinture", description: "Création artistique sur support visuel." },
      { icon: "💻", name: "Design graphique", description: "Création d'images et supports de communication." },
      { icon: "🛋️", name: "Design produit & industriel", description: "Conception d'objets manufacturés." },
      { icon: "📷", name: "Photographie & image numérique", description: "Prise de vue et retouche." },
      { icon: "🎬", name: "Cinéma & audiovisuel", description: "Production de films et contenus visuels." }
    ]
  },
  {
    id: 3,
    name: "Commerce, marketing & vente",
    icon: "🛒",
    description: "Vendez, négociez, développez des stratégies commerciales.",
    subUniverses: [
      { icon: "🏪", name: "Commerce de détail", description: "Vente directe aux consommateurs." },
      { icon: "💻", name: "E-commerce", description: "Vente en ligne et marketplaces." },
      { icon: "🤝", name: "Vente B2B", description: "Relations commerciales entre entreprises." },
      { icon: "📊", name: "Marketing stratégique", description: "Étude de marché et positionnement." },
      { icon: "📱", name: "Marketing digital", description: "Promotion via outils numériques." }
    ]
  },
  {
    id: 4,
    name: "Communication, médias & culture",
    icon: "📺",
    description: "Informez, divertissez, communiquez à travers les médias.",
    subUniverses: [
      { icon: "📰", name: "Journalisme & presse", description: "Recherche et diffusion d'informations." },
      { icon: "📻", name: "Audiovisuel & production", description: "Réalisation d'émissions et reportages." },
      { icon: "🎉", name: "Relations publiques", description: "Gestion de l'image et événementiel." },
      { icon: "📖", name: "Édition & correction", description: "Publication et diffusion d'ouvrages." },
      { icon: "🎥", name: "Création de contenus", description: "Production vidéos, podcasts, blogs." }
    ]
  },
  {
    id: 5,
    name: "Construction, BTP & habitat",
    icon: "🏗️",
    description: "Construisez, rénovez, aménagez des bâtiments.",
    subUniverses: [
      { icon: "📐", name: "Architecture & conception", description: "Création de bâtiments et espaces." },
      { icon: "🧱", name: "Gros œuvre & maçonnerie", description: "Construction des structures." },
      { icon: "🪵", name: "Menuiserie & charpente", description: "Fabrication et pose en bois." },
      { icon: "🔧", name: "Plomberie & chauffage", description: "Installation des réseaux techniques." },
      { icon: "⚡", name: "Électricité & domotique", description: "Réseaux électriques et automatismes." }
    ]
  },
  {
    id: 6,
    name: "Droit, administration & politique publique",
    icon: "⚖️",
    description: "Appliquez les lois, gérez l'administration publique.",
    subUniverses: [
      { icon: "⚖️", name: "Droit privé & judiciaire", description: "Défense des droits des particuliers." },
      { icon: "💼", name: "Droit des affaires", description: "Conseil juridique aux entreprises." },
      { icon: "🏛️", name: "Droit public", description: "Encadrement des politiques publiques." },
      { icon: "📋", name: "Administration publique", description: "Gestion des services de l'État." },
      { icon: "👥", name: "Ressources humaines", description: "Recrutement et dialogue social." }
    ]
  },
  {
    id: 7,
    name: "Éducation, formation & apprentissage",
    icon: "🎓",
    description: "Enseignez, formez et accompagnez les apprenants.",
    subUniverses: [
      { icon: "📚", name: "Enseignement primaire", description: "Transmission des savoirs fondamentaux." },
      { icon: "🏫", name: "Enseignement secondaire", description: "Encadrement des adolescents." },
      { icon: "🎓", name: "Enseignement supérieur", description: "Formation et recherche universitaire." },
      { icon: "💼", name: "Formation professionnelle", description: "Apprentissage pour adultes." },
      { icon: "🧭", name: "Orientation & accompagnement", description: "Aide à la construction de parcours." }
    ]
  },
  {
    id: 8,
    name: "Environnement, climat & énergies",
    icon: "🌍",
    description: "Protégez l'environnement et développez les énergies renouvelables.",
    subUniverses: [
      { icon: "♻️", name: "Gestion des déchets", description: "Valorisation des matières usées." },
      { icon: "💧", name: "Traitement de l'eau", description: "Purification et gestion des eaux." },
      { icon: "☀️", name: "Énergies renouvelables", description: "Production d'énergie verte." },
      { icon: "🌡️", name: "Efficacité énergétique", description: "Optimisation de la consommation." },
      { icon: "🌿", name: "Protection de la biodiversité", description: "Sauvegarde des écosystèmes." }
    ]
  },
  {
    id: 9,
    name: "Gestion, finance & comptabilité",
    icon: "💰",
    description: "Gérez les finances, tenez la comptabilité.",
    subUniverses: [
      { icon: "📊", name: "Comptabilité & fiscalité", description: "Suivi des comptes et déclarations." },
      { icon: "🔍", name: "Audit & contrôle", description: "Vérification de la performance." },
      { icon: "💵", name: "Trésorerie & financement", description: "Gestion des flux financiers." },
      { icon: "🏦", name: "Banque & assurance", description: "Services financiers." },
      { icon: "💼", name: "Gestion de patrimoine", description: "Optimisation de l'épargne." }
    ]
  },
  {
    id: 10,
    name: "Hôtellerie, restauration & tourisme",
    icon: "🏨",
    description: "Accueillez, cuisinez, servez et faites découvrir.",
    subUniverses: [
      { icon: "👨‍🍳", name: "Cuisine gastronomique", description: "Création culinaire haut de gamme." },
      { icon: "🍽️", name: "Restauration collective", description: "Préparation de repas pour groupes." },
      { icon: "🛎️", name: "Service & sommellerie", description: "Accueil et conseil en salle." },
      { icon: "🏨", name: "Hôtellerie", description: "Gestion de séjours et services." },
      { icon: "🗺️", name: "Tourisme local & culturel", description: "Valorisation du patrimoine." }
    ]
  },
  {
    id: 11,
    name: "Immobilier & patrimoine",
    icon: "🏠",
    description: "Vendez, louez, gérez des biens immobiliers.",
    subUniverses: [
      { icon: "🏡", name: "Transaction résidentielle", description: "Achat et vente de logements." },
      { icon: "🏢", name: "Immobilier d'entreprise", description: "Négociation de biens professionnels." },
      { icon: "🏗️", name: "Promotion immobilière", description: "Construction et valorisation." },
      { icon: "🔑", name: "Gestion locative", description: "Administration de biens." },
      { icon: "💰", name: "Expertise immobilière", description: "Analyse de la valeur." }
    ]
  },
  {
    id: 12,
    name: "Industrie, fabrication & production",
    icon: "⚙️",
    description: "Produisez, assemblez, contrôlez la fabrication.",
    subUniverses: [
      { icon: "🏭", name: "Production industrielle", description: "Fabrication en série." },
      { icon: "🔧", name: "Maintenance & SAV", description: "Entretien des équipements." },
      { icon: "🔩", name: "Mécanique & usinage", description: "Transformation de pièces." },
      { icon: "⚡", name: "Électrotechnique", description: "Systèmes électriques automatisés." },
      { icon: "🤖", name: "Robotique", description: "Collaboration homme-machine." }
    ]
  },
  {
    id: 13,
    name: "Logistique, transport & mobilité",
    icon: "🚚",
    description: "Organisez et transportez marchandises et personnes.",
    subUniverses: [
      { icon: "📦", name: "Logistique & entreposage", description: "Gestion des flux et stockage." },
      { icon: "🔗", name: "Supply chain", description: "Pilotage des chaînes d'approvisionnement." },
      { icon: "🚛", name: "Transport routier", description: "Acheminement terrestre." },
      { icon: "✈️", name: "Transport aérien", description: "Organisation du trafic aérien." },
      { icon: "🚌", name: "Mobilité urbaine", description: "Déplacements collectifs en ville." }
    ]
  },
  {
    id: 14,
    name: "Management, entrepreneuriat & stratégie",
    icon: "📊",
    description: "Dirigez, entreprenez, définissez des stratégies.",
    subUniverses: [
      { icon: "🚀", name: "Création d'entreprise", description: "Lancement d'activités innovantes." },
      { icon: "📋", name: "Gestion de projets", description: "Organisation et suivi d'objectifs." },
      { icon: "💡", name: "Innovation & transformation", description: "Intégration de nouvelles technologies." },
      { icon: "👥", name: "Management d'équipe", description: "Encadrement et motivation." },
      { icon: "🎯", name: "Stratégie d'entreprise", description: "Planification long terme." }
    ]
  },
  {
    id: 15,
    name: "Numérique, informatique & data",
    icon: "💻",
    description: "Développez, analysez, sécurisez les systèmes numériques.",
    subUniverses: [
      { icon: "🌐", name: "Développement web & mobile", description: "Création d'applications." },
      { icon: "☁️", name: "DevOps & cloud", description: "Automatisation et hébergement." },
      { icon: "🔐", name: "Cybersécurité", description: "Protection des réseaux." },
      { icon: "🤖", name: "Intelligence artificielle", description: "Algorithmes d'apprentissage." },
      { icon: "📊", name: "Data science", description: "Analyse de grandes bases de données." }
    ]
  },
  {
    id: 16,
    name: "Santé, bien-être & médical",
    icon: "⚕️",
    description: "Soignez, diagnostiquez, accompagnez la santé.",
    subUniverses: [
      { icon: "🩺", name: "Médecine générale", description: "Soins courants et prévention." },
      { icon: "🏥", name: "Chirurgie & spécialités", description: "Interventions et soins techniques." },
      { icon: "💊", name: "Pharmacie", description: "Développement et distribution." },
      { icon: "🩹", name: "Soins paramédicaux", description: "Accompagnement des patients." },
      { icon: "🧠", name: "Santé mentale", description: "Prise en charge psychologique." }
    ]
  },
  {
    id: 17,
    name: "Sciences, recherche & innovation",
    icon: "🔬",
    description: "Cherchez, expérimentez, découvrez dans les sciences.",
    subUniverses: [
      { icon: "🌌", name: "Physique & astrophysique", description: "Étude des lois de l'univers." },
      { icon: "📐", name: "Mathématiques", description: "Modélisation et analyse." },
      { icon: "⚗️", name: "Chimie & matériaux", description: "Recherche sur les réactions." },
      { icon: "🧬", name: "Biotechnologies", description: "Innovation à partir du vivant." },
      { icon: "🔬", name: "Recherche appliquée", description: "Passage de la science au produit." }
    ]
  },
  {
    id: 18,
    name: "Sécurité, défense & urgence",
    icon: "🚨",
    description: "Protégez, intervenez, sécurisez les personnes.",
    subUniverses: [
      { icon: "👮", name: "Police & gendarmerie", description: "Maintien de l'ordre." },
      { icon: "🚒", name: "Pompiers & secours", description: "Interventions d'urgence." },
      { icon: "🛡️", name: "Sécurité privée", description: "Protection des biens." },
      { icon: "🌪️", name: "Protection civile", description: "Secours en cas de catastrophe." },
      { icon: "⚔️", name: "Défense & armée", description: "Sécurité nationale." }
    ]
  },
  {
    id: 19,
    name: "Social, aide & solidarité",
    icon: "❤️",
    description: "Aidez, accompagnez, soutenez les personnes vulnérables.",
    subUniverses: [
      { icon: "👨‍👩‍👧", name: "Travail social", description: "Accompagnement et insertion." },
      { icon: "🏠", name: "Hébergement d'urgence", description: "Accueil de personnes en précarité." },
      { icon: "🤝", name: "Médiation sociale", description: "Résolution de conflits." },
      { icon: "🌍", name: "Action humanitaire", description: "Interventions solidaires." },
      { icon: "♿", name: "Accompagnement du handicap", description: "Soutien aux personnes handicapées." }
    ]
  },
  {
    id: 20,
    name: "Sport, loisirs & vie active",
    icon: "⚽",
    description: "Entraînez, animez, organisez des activités sportives.",
    subUniverses: [
      { icon: "🏃", name: "Éducation sportive", description: "Enseignement et animation." },
      { icon: "🏋️", name: "Préparation physique", description: "Optimisation des performances." },
      { icon: "🏆", name: "Sport de haut niveau", description: "Pratique professionnelle." },
      { icon: "🏢", name: "Management sportif", description: "Gestion d'équipements." },
      { icon: "🎭", name: "Animation socioculturelle", description: "Activités récréatives." }
    ]
  },
  {
    id: 21,
    name: "Technologies émergentes & futur du travail",
    icon: "🚀",
    description: "Explorez l'IA, la robotique, le métavers.",
    subUniverses: [
      { icon: "🤖", name: "Intelligence artificielle générative", description: "Création de contenus par l'IA." },
      { icon: "🧠", name: "IA éthique", description: "Encadrement responsable des systèmes." },
      { icon: "🦾", name: "Robotique humanoïde", description: "Robots pour assistance." },
      { icon: "🌌", name: "Exploration spatiale", description: "Satellites et lanceurs." },
      { icon: "🏠", name: "Travail hybride", description: "Nouvelles organisations du travail." }
    ]
  }
];

console.log("✅ universes-data.js chargé avec succès");
console.log("📊", DIMENSIONS.length, "dimensions");
console.log("❓", QUESTIONS.length, "questions");
console.log("🌍", universesData.length, "univers");
console.log("⚙️", UNIVERS_WEIGHTS.length, "matrices");
