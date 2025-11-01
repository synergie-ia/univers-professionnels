// =====================================================
// DATA — Paquets de verbes + phrases (sans emojis)
// =====================================================

const STEPS = [
  { key: 'interets', title: 'INTÉRÊTS — Ce que tu aimes faire', hint: 'Sélectionne entre 3 et 6 paquets qui te ressemblent le plus.' },
  { key: 'personnalite', title: 'PERSONNALITÉ — Ta manière d’être au quotidien', hint: 'Sélectionne entre 3 et 6 paquets.' },
  { key: 'valeurs', title: 'VALEURS — Ce qui compte vraiment pour toi', hint: 'Sélectionne entre 3 et 6 paquets.' },
];

const MIN_PER_STEP = 3;
const MAX_PER_STEP = 6;

// 12 paquets INTÉRÊTS
const INTERETS = [
  { label:'Sports & Nature', verbs:['bouger','être dehors','agir physiquement'], phrase:'Je me projette dans des activités actives, au grand air ou en mouvement.' },
  { label:'Manuel & Technique', verbs:['fabriquer','réparer','manipuler'], phrase:'J’aime travailler avec mes mains et la matière, passer à l’atelier plutôt qu’au bureau.' },
  { label:'Information & Investigation', verbs:['observer','chercher','comprendre'], phrase:'J’aime enquêter, comparer des faits et tirer des conclusions solides.' },
  { label:'Sciences & Technologies', verbs:['expérimenter','programmer','utiliser des outils techniques'], phrase:'Je me vois explorer des phénomènes, utiliser du matériel ou coder.' },
  { label:'Données & Chiffres', verbs:['calculer','analyser','modéliser'], phrase:'Les chiffres ne me font pas peur ; j’aime raisonner logiquement.' },
  { label:'Arts & Expression', verbs:['dessiner','écrire','concevoir'], phrase:'Créer, imaginer, donner une forme originale aux idées me stimule.' },
  { label:'Idées & Conception', verbs:['innover','résoudre','améliorer'], phrase:'Je cherche des solutions nouvelles et j’aime construire des projets.' },
  { label:'Aide & Accompagnement', verbs:['écouter','soutenir','soigner'], phrase:'Je veux être utile aux autres et contribuer à leur mieux-être.' },
  { label:'Relations & Sociabilité', verbs:['échanger','collaborer','animer'], phrase:'Le contact et le travail d’équipe sont essentiels pour moi.' },
  { label:'Leadership & Entrepreneuriat', verbs:['décider','manager','initier'], phrase:'Piloter, prendre des responsabilités et lancer des initiatives me motive.' },
  { label:'Autonomie & Initiative', verbs:['organiser','prioriser','progresser seul'], phrase:'J’aime avancer en autonomie et structurer mon propre rythme.' },
  { label:'Règles & Méthode', verbs:['appliquer','structurer','sécuriser'], phrase:'J’apprécie les cadres clairs, les procédures et la rigueur.' },
];

// 12 paquets PERSONNALITÉ
const PERSONNALITE = [
  { label:'Curieux & Analytique', verbs:['explorer','questionner','relier'], phrase:'Je creuse les sujets en profondeur et je fais des liens.' },
  { label:'Créatif & Imaginatif', verbs:['imaginer','composer','réinventer'], phrase:'J’aime produire des idées originales et sortir des sentiers battus.' },
  { label:'Pragmatique & Concret', verbs:['tester','itérer','finaliser'], phrase:'Je passe vite à l’action et j’aime voir des résultats tangibles.' },
  { label:'Sociable & Coopératif', verbs:['écouter','coordonner','faciliter'], phrase:'Je fonctionne bien en équipe et j’aime l’ambiance collaborative.' },
  { label:'Organisé & Méthodique', verbs:['planifier','structurer','contrôler'], phrase:'Je suis rigoureux·se, j’aime les méthodes et la fiabilité.' },
  { label:'Résilient & Calme', verbs:['garder son sang-froid','tenir la durée'], phrase:'Je gère la pression et les imprévus avec stabilité.' },
  { label:'Persuasif & Assumé', verbs:['argumenter','négocier','convaincre'], phrase:'Je sais défendre une idée et embarquer les autres.' },
  { label:'Autonome & Responsable', verbs:['prendre en main','assumer','progresser seul'], phrase:'Je n’attends pas qu’on me dise quoi faire pour avancer.' },
  { label:'Empathique & Aidant', verbs:['comprendre autrui','soutenir','rassurer'], phrase:'Le soin des autres et le sens humain sont centraux pour moi.' },
  { label:'Vision & Systèmes', verbs:['voir large','relier les enjeux','anticiper'], phrase:'Je pense long terme et j’aime les vues d’ensemble.' },
  { label:'Minutieux & Qualité', verbs:['soigner le détail','vérifier','peaufiner'], phrase:'Je vise la précision et la finition impeccable.' },
  { label:'Aventurier & Terrain', verbs:['bouger','essayer','oser'], phrase:'Je préfère l’action et les contextes vivants au statique.' },
];

// 12 paquets VALEURS
const VALEURS = [
  { label:'Utilité sociale', verbs:['aider','protéger','inclure'], phrase:'Contribuer au bien commun et à la solidarité compte pour moi.' },
  { label:'Éthique & Intégrité', verbs:['respecter','assumer','être juste'], phrase:'Agir proprement, avec transparence et respect, est non négociable.' },
  { label:'Écologie & Durabilité', verbs:['préserver','réparer','transmettre'], phrase:'Je veux limiter l’impact et construire des solutions durables.' },
  { label:'Liberté & Autonomie', verbs:['choisir','organiser','innover'], phrase:'Je tiens à mon indépendance d’action et de pensée.' },
  { label:'Sécurité & Stabilité', verbs:['prévenir','sécuriser','assurer'], phrase:'J’apprécie les environnements fiables et prévisibles.' },
  { label:'Ambition & Réussite', verbs:['progresser','viser haut','performer'], phrase:'Je cherche à me dépasser et à obtenir des résultats forts.' },
  { label:'Créativité & Expression', verbs:['inventer','partager','incarner'], phrase:'Je valorise l’originalité et l’expression personnelle.' },
  { label:'Apprentissage & Savoir', verbs:['comprendre','transmettre','diffuser'], phrase:'Apprendre continuellement et partager la connaissance m’anime.' },
  { label:'Esprit d’équipe', verbs:['coopérer','soutenir','faire ensemble'], phrase:'Le collectif et les relations de qualité sont essentiels.' },
  { label:'Impact économique', verbs:['développer','investir','créer de la valeur'], phrase:'J’aime produire un effet concret sur l’activité et l’emploi.' },
  { label:'Innovation & Changement', verbs:['transformer','moderniser','oser'], phrase:'Je veux expérimenter et améliorer les pratiques.' },
  { label:'Excellence & Qualité', verbs:['exiger','maîtriser','tenir ses promesses'], phrase:'Le niveau d’exigence et la qualité du résultat priment.' },
];

// map simple pour itérer
const CATALOG = {
  interets: INTERETS,
  personnalite: PERSONNALITE,
  valeurs: VALEURS
};
