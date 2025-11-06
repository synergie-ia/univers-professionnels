bash

cat > /home/claude/create_universes.py << 'ENDOFFILE'
# Script pour créer universes-data.js avec emojis propres

content = """// Données complètes des 21 univers avec leurs sous-univers
const universesData = [
    {
        id: 1,
        icon: '🌾',
        name: 'Agriculture, nature & animaux',
        description: 'Cultivez, élevez, protégez la nature et travaillez avec les animaux dans des métiers en plein air.',
        subUniverses: [
            { icon: '🏭', name: 'Agroalimentaire industriel', description: 'Transformation et production à grande échelle des produits agricoles.' },
            { icon: '🌱', name: 'Production biologique & circuits courts', description: 'Cultures et élevages respectueux de l\\'environnement, vente locale.' },
            { icon: '🔬', name: 'Agronomie & recherche appliquée', description: 'Études scientifiques pour améliorer les rendements et la durabilité.' },
            { icon: '🌾', name: 'Cultures céréalières & grandes exploitations', description: 'Gestion de grandes surfaces agricoles mécanisées.' },
            { icon: '🍇', name: 'Viticulture & œnologie', description: 'Culture de la vigne et production du vin.' },
            { icon: '🥕', name: 'Maraîchage & production maraîchère', description: 'Culture de légumes et fruits de saison.' },
            { icon: '🌺', name: 'Horticulture & pépinière', description: 'Production de plantes ornementales et d\\'arbustes.' },
            { icon: '🌳', name: 'Paysagisme & aménagement végétal', description: 'Création et entretien d\\'espaces verts.' },
            { icon: '🌲', name: 'Forêt & sylviculture durable', description: 'Gestion et exploitation raisonnée des forêts.' },
            { icon: '🐄', name: 'Élevage bovin / ovin / porcin / avicole', description: 'Production animale pour la viande, le lait ou les œufs.' },
            { icon: '🐟', name: 'Aquaculture & pêche durable', description: 'Élevage de poissons et gestion responsable des ressources marines.' },
            { icon: '🐝', name: 'Apiculture & insectes utiles', description: 'Élevage d\\'abeilles et valorisation des insectes pollinisateurs.' },
            { icon: '💧', name: 'Gestion de l\\'eau, irrigation & bassins versants', description: 'Maîtrise des ressources hydriques pour l\\'agriculture.' },
            { icon: '📦', name: 'Valorisation & transformation des produits agricoles', description: 'Fabrication de produits finis à partir des matières premières.' }
        ]
    },
    {
        id: 2,
        icon: '🎨',
        name: 'Arts, design & création',
        description: 'Créez, dessinez, designez et exprimez votre créativité dans l\\'art visuel, graphique ou appliqué.',
        subUniverses: [
            { icon: '🖼️', name: 'Arts visuels & peinture', description: 'Création artistique sur support visuel.' },
            { icon: '🗿', name: 'Sculpture & installations', description: 'Conception d\\'œuvres tridimensionnelles.' },
            { icon: '📐', name: 'Design graphique & communication visuelle', description: 'Création d\\'images et supports de communication.' },
            { icon: '💡', name: 'Design produit & industriel', description: 'Conception d\\'objets et produits manufacturés.' },
            { icon: '🏠', name: 'Architecture intérieure & décoration', description: 'Aménagement esthétique et fonctionnel des espaces.' },
            { icon: '📷', name: 'Photographie & image numérique', description: 'Prise de vue, retouche et diffusion d\\'images.' },
            { icon: '🎬', name: 'Cinéma, audiovisuel & animation', description: 'Production de films et contenus visuels.' },
            { icon: '👗', name: 'Mode, stylisme & textile', description: 'Conception de vêtements et accessoires.' },
            { icon: '✂️', name: 'Artisanat d\\'art traditionnel', description: 'Création manuelle de pièces uniques.' },
            { icon: '🎭', name: 'Scénographie & design d\\'espace', description: 'Mise en scène d\\'expositions ou de spectacles.' },
            { icon: '✏️', name: 'Illustration & bande dessinée', description: 'Narration visuelle et création d\\'univers graphiques.' },
            { icon: '🏛️', name: 'Patrimoine, muséographie & restauration d\\'art', description: 'Conservation et mise en valeur d\\'œuvres anciennes.' },
            { icon: '🎪', name: 'Spectacle vivant & arts de la scène', description: 'Interprétation et production théâtrale ou musicale.' },
            { icon: '💎', name: 'Métiers du luxe & savoir-faire d\\'exception', description: 'Création haut de gamme mêlant tradition et innovation.' },
            { icon: '🎬', name: 'Régie & technique du spectacle', description: 'Gestion des aspects techniques d\\'événements artistiques.' }
        ]
    },
    {
        id: 3,
        icon: '🛒',
        name: 'Commerce, marketing & vente',
        description: 'Vendez, négociez, développez des stratégies commerciales et fidélisez les clients.',
        subUniverses: [
            { icon: '🏪', name: 'Commerce de détail & retail', description: 'Vente directe aux consommateurs.' },
            { icon: '💻', name: 'E-commerce & marketplaces', description: 'Vente en ligne et gestion de plateformes numériques.' },
            { icon: '🤝', name: 'Vente B2B & négociation commerciale', description: 'Relations commerciales entre entreprises.' },
            { icon: '📞', name: 'Représentation & prospection', description: 'Développement de clientèle sur le terrain.' },
            { icon: '📊', name: 'Merchandising & mise en valeur produits', description: 'Optimisation de la présentation des produits.' },
            { icon: '🎯', name: 'Marketing stratégique', description: 'Étude de marché et positionnement des offres.' },
            { icon: '📱', name: 'Marketing digital & réseaux sociaux', description: 'Promotion via les outils numériques.' },
            { icon: '📢', name: 'Communication commerciale & influence', description: 'Stratégies de persuasion et fidélisation.' },
            { icon: '🛍️', name: 'Achats & approvisionnement', description: 'Sélection et négociation avec les fournisseurs.' },
            { icon: '🏬', name: 'Gestion de rayon & management de point de vente', description: 'Pilotage opérationnel des équipes et stocks.' },
            { icon: '🏢', name: 'Immobilier commercial', description: 'Vente et location d\\'espaces professionnels.' },
            { icon: '💳', name: 'Banque & assurance commerciale', description: 'Vente de produits financiers et d\\'assurance.' },
            { icon: '📞', name: 'Service client & relation après-vente', description: 'Suivi et satisfaction des clients.' },
            { icon: '💎', name: 'Commerce du luxe & clientèle premium', description: 'Vente haut de gamme et expérience exclusive.' },
            { icon: '🌐', name: 'Vente en ligne & marketplaces spécialisées', description: 'Plateformes ciblées sur des niches de produits.' }
        ]
    },
    {
        id: 4,
        icon: '📺',
        name: 'Communication, médias & culture',
        description: 'Informez, divertissez, communiquez à travers les médias, la culture et l\\'événementiel.',
        subUniverses: [
            { icon: '📰', name: 'Journalisme & presse écrite', description: 'Recherche, rédaction et diffusion d\\'informations vérifiées.' },
            { icon: '📻', name: 'Audiovisuel & production radio/TV', description: 'Réalisation et diffusion d\\'émissions ou reportages.' },
            { icon: '🎤', name: 'Relations publiques & événementiel', description: 'Gestion de l\\'image d\\'une organisation et organisation d\\'événements.' },
            { icon: '📢', name: 'Communication d\\'entreprise', description: 'Promotion interne et externe d\\'une marque ou institution.' },
            { icon: '🏛️', name: 'Communication publique & politique', description: 'Information et influence dans le secteur public.' },
            { icon: '📚', name: 'Édition & correction', description: 'Relecture, mise en page et diffusion d\\'ouvrages.' },
            { icon: '✍️', name: 'Création de contenus numériques', description: 'Production de vidéos, posts, podcasts ou blogs.' },
            { icon: '📱', name: 'Community management & réseaux sociaux', description: 'Animation de communautés en ligne.' },
            { icon: '🎬', name: 'Production audiovisuelle & cinéma', description: 'Création de contenus visuels et films.' },
            { icon: '🎭', name: 'Arts de la scène & spectacle vivant', description: 'Théâtre, danse, musique et performance.' },
            { icon: '🎪', name: 'Organisation d\\'événements culturels', description: 'Festivals, expositions et manifestations artistiques.' },
            { icon: '🏛️', name: 'Médiation culturelle & patrimoine', description: 'Transmission et valorisation de la culture.' }
        ]
    },
    {
        id: 5,
        icon: '🏗️',
        name: 'Construction, BTP & habitat',
        description: 'Construisez, rénovez, aménagez des bâtiments et des infrastructures.',
        subUniverses: [
            { icon: '🏗️', name: 'Gros œuvre & structure', description: 'Construction de la structure principale des bâtiments.' },
            { icon: '🔨', name: 'Second œuvre & finitions', description: 'Aménagements intérieurs et finitions.' },
            { icon: '⚡', name: 'Électricité & domotique', description: 'Installation électrique et maison connectée.' },
            { icon: '🚿', name: 'Plomberie & sanitaire', description: 'Installation de réseaux d\\'eau et sanitaires.' },
            { icon: '🔥', name: 'Chauffage, ventilation & climatisation', description: 'Systèmes de confort thermique.' },
            { icon: '🎨', name: 'Peinture & revêtements', description: 'Finitions murales et sols.' },
            { icon: '🪟', name: 'Menuiserie & agencement', description: 'Fabrication et pose de boiseries.' },
            { icon: '🏢', name: 'Architecture & maîtrise d\\'œuvre', description: 'Conception et supervision de projets.' },
            { icon: '📐', name: 'Bureau d\\'études & ingénierie', description: 'Calculs et études techniques.' },
            { icon: '🛣️', name: 'Travaux publics & infrastructures', description: 'Routes, ponts et aménagements urbains.' },
            { icon: '🏘️', name: 'Promotion immobilière & lotissement', description: 'Développement de programmes immobiliers.' },
            { icon: '🔧', name: 'Maintenance & rénovation', description: 'Entretien et remise en état de bâtiments.' }
        ]
    },
    {
        id: 6,
        icon: '⚖️',
        name: 'Droit, administration & politique publique',
        description: 'Appliquez les lois, gérez l\\'administration et contribuez à la politique publique.',
        subUniverses: [
            { icon: '👨‍⚖️', name: 'Magistrature & justice', description: 'Application de la loi et jugements.' },
            { icon: '👔', name: 'Avocature & conseil juridique', description: 'Défense et conseil en droit.' },
            { icon: '📝', name: 'Notariat & professions réglementées', description: 'Actes authentiques et conseil patrimonial.' },
            { icon: '🏛️', name: 'Administration publique', description: 'Gestion des services de l\\'État.' },
            { icon: '🗳️', name: 'Politique & élus locaux', description: 'Mandats électifs et représentation.' },
            { icon: '📋', name: 'Fonction publique territoriale', description: 'Services des collectivités locales.' },
            { icon: '🌍', name: 'Relations internationales & diplomatie', description: 'Représentation à l\\'international.' },
            { icon: '📄', name: 'Droit des affaires', description: 'Conseil juridique aux entreprises.' },
            { icon: '👥', name: 'Droit social & ressources humaines', description: 'Gestion juridique du personnel.' },
            { icon: '🏢', name: 'Droit immobilier', description: 'Transactions et contentieux immobiliers.' },
            { icon: '🌐', name: 'Droit du numérique', description: 'Réglementation des technologies.' }
        ]
    },
    {
        id: 7,
        icon: '📚',
        name: 'Éducation, formation & apprentissage',
        description: 'Enseignez, formez et accompagnez les apprenants de tous âges.',
        subUniverses: [
            { icon: '👶', name: 'Petite enfance & maternelle', description: 'Éveil et apprentissages précoces.' },
            { icon: '📖', name: 'Enseignement primaire', description: 'Instruction de base et fondamentaux.' },
            { icon: '📚', name: 'Enseignement secondaire', description: 'Collège et lycée.' },
            { icon: '🎓', name: 'Enseignement supérieur & recherche', description: 'Université et grandes écoles.' },
            { icon: '💼', name: 'Formation professionnelle', description: 'Formation continue et apprentissage.' },
            { icon: '🌐', name: 'Formation à distance & e-learning', description: 'Enseignement numérique.' },
            { icon: '🎯', name: 'Coaching & développement personnel', description: 'Accompagnement individuel.' },
            { icon: '📝', name: 'Ingénierie pédagogique', description: 'Conception de programmes de formation.' },
            { icon: '🎨', name: 'Éducation artistique & culturelle', description: 'Transmission des arts et de la culture.' },
            { icon: '🏃', name: 'Éducation sportive', description: 'Enseignement du sport et de l\\'EPS.' },
            { icon: '🌍', name: 'Enseignement des langues', description: 'Apprentissage linguistique.' }
        ]
    },
    {
        id: 8,
        icon: '🌍',
        name: 'Environnement, climat & énergies',
        description: 'Protégez l\\'environnement et développez les énergies renouvelables.',
        subUniverses: [
            { icon: '♻️', name: 'Gestion des déchets & économie circulaire', description: 'Recyclage et valorisation.' },
            { icon: '💧', name: 'Gestion de l\\'eau & assainissement', description: 'Traitement et distribution de l\\'eau.' },
            { icon: '🌱', name: 'Protection de la biodiversité', description: 'Conservation des écosystèmes.' },
            { icon: '☀️', name: 'Énergies renouvelables', description: 'Solaire, éolien, hydraulique.' },
            { icon: '🌡️', name: 'Transition énergétique', description: 'Efficacité et sobriété énergétique.' },
            { icon: '🏭', name: 'Dépollution & traitement', description: 'Nettoyage des sites contaminés.' },
            { icon: '📊', name: 'Audit environnemental', description: 'Évaluation d\\'impact écologique.' },
            { icon: '🌍', name: 'Développement durable', description: 'Stratégies RSE et durabilité.' },
            { icon: '🌳', name: 'Foresterie & gestion des espaces naturels', description: 'Préservation des forêts.' },
            { icon: '🐾', name: 'Protection de la faune', description: 'Sauvegarde des espèces animales.' }
        ]
    },
    {
        id: 9,
        icon: '💼',
        name: 'Gestion, finance & comptabilité',
        description: 'Gérez les finances, tenez la comptabilité et conseillez en gestion.',
        subUniverses: [
            { icon: '📊', name: 'Comptabilité générale', description: 'Tenue des comptes et états financiers.' },
            { icon: '💰', name: 'Audit & expertise comptable', description: 'Contrôle et certification des comptes.' },
            { icon: '📈', name: 'Contrôle de gestion', description: 'Pilotage de la performance.' },
            { icon: '💼', name: 'Finance d\\'entreprise', description: 'Gestion financière et trésorerie.' },
            { icon: '📉', name: 'Analyse financière', description: 'Évaluation et diagnostic financier.' },
            { icon: '🏦', name: 'Banque & services financiers', description: 'Opérations bancaires.' },
            { icon: '💳', name: 'Assurance & gestion des risques', description: 'Protection et prévention.' },
            { icon: '📱', name: 'Fintech & innovation financière', description: 'Technologies financières.' },
            { icon: '💎', name: 'Gestion de patrimoine', description: 'Conseil en investissement.' },
            { icon: '🌍', name: 'Finance internationale', description: 'Marchés et opérations globales.' }
        ]
    },
    {
        id: 10,
        icon: '🏨',
        name: 'Hôtellerie, restauration & tourisme',
        description: 'Accueillez, cuisinez, servez et faites découvrir des destinations.',
        subUniverses: [
            { icon: '🏨', name: 'Hôtellerie & hébergement', description: 'Gestion d\\'hôtels et accueil.' },
            { icon: '🍽️', name: 'Restauration traditionnelle', description: 'Service en salle et cuisine.' },
            { icon: '🍔', name: 'Restauration rapide', description: 'Fast-food et vente à emporter.' },
            { icon: '👨‍🍳', name: 'Cuisine & gastronomie', description: 'Art culinaire et création.' },
            { icon: '🍰', name: 'Pâtisserie & boulangerie', description: 'Pain, viennoiseries et desserts.' },
            { icon: '☕', name: 'Bar & café', description: 'Service de boissons.' },
            { icon: '🎉', name: 'Événementiel & banquets', description: 'Organisation de réceptions.' },
            { icon: '✈️', name: 'Tourisme & voyages', description: 'Agences et tour-opérateurs.' },
            { icon: '🗺️', name: 'Guidage & accompagnement touristique', description: 'Visites et découverte.' },
            { icon: '🏖️', name: 'Tourisme de loisirs', description: 'Animations et activités.' },
            { icon: '🌍', name: 'Tourisme durable', description: 'Voyages responsables.' }
        ]
    },
    {
        id: 11,
        icon: '🏠',
        name: 'Immobilier & patrimoine',
        description: 'Vendez, louez, gérez et valorisez des biens immobiliers.',
        subUniverses: [
            { icon: '🏢', name: 'Transaction immobilière', description: 'Vente et achat de biens.' },
            { icon: '🔑', name: 'Gestion locative', description: 'Location et administration.' },
            { icon: '🏗️', name: 'Promotion immobilière', description: 'Développement de programmes.' },
            { icon: '📊', name: 'Expertise & évaluation', description: 'Estimation de biens.' },
            { icon: '🏘️', name: 'Syndic & copropriété', description: 'Gestion d\\'immeubles collectifs.' },
            { icon: '💎', name: 'Immobilier de luxe', description: 'Biens d\\'exception.' },
            { icon: '🏢', name: 'Immobilier d\\'entreprise', description: 'Bureaux et locaux professionnels.' },
            { icon: '🏗️', name: 'Aménagement & urbanisme', description: 'Développement territorial.' },
            { icon: '📄', name: 'Juridique immobilier', description: 'Droit et contentieux.' }
        ]
    },
    {
        id: 12,
        icon: '🏭',
        name: 'Industrie, fabrication & production',
        description: 'Produisez, assemblez, contrôlez et optimisez la fabrication industrielle.',
        subUniverses: [
            { icon: '🔧', name: 'Production & opérations', description: 'Fabrication et assemblage.' },
            { icon: '🤖', name: 'Automatisation & robotique', description: 'Systèmes automatisés.' },
            { icon: '⚙️', name: 'Maintenance industrielle', description: 'Entretien des équipements.' },
            { icon: '🔬', name: 'Contrôle qualité', description: 'Vérification et normes.' },
            { icon: '📦', name: 'Supply chain & logistique', description: 'Chaîne d\\'approvisionnement.' },
            { icon: '🔩', name: 'Mécanique & usinage', description: 'Fabrication de pièces.' },
            { icon: '⚡', name: 'Électrotechnique', description: 'Systèmes électriques industriels.' },
            { icon: '🏭', name: 'Chimie & process', description: 'Transformation chimique.' },
            { icon: '🛠️', name: 'Bureau des méthodes', description: 'Optimisation de production.' },
            { icon: '📊', name: 'Lean management & amélioration continue', description: 'Optimisation des processus.' }
        ]
    },
    {
        id: 13,
        icon: '🚚',
        name: 'Logistique, transport & mobilité',
        description: 'Organisez, transportez et gérez les flux de marchandises et de personnes.',
        subUniverses: [
            { icon: '📦', name: 'Logistique & entreposage', description: 'Gestion de stocks et entrepôts.' },
            { icon: '🚛', name: 'Transport routier', description: 'Acheminement par camion.' },
            { icon: '🚂', name: 'Transport ferroviaire', description: 'Trains et métros.' },
            { icon: '✈️', name: 'Transport aérien', description: 'Fret et passagers aériens.' },
            { icon: '🚢', name: 'Transport maritime & fluvial', description: 'Navigation commerciale.' },
            { icon: '📊', name: 'Supply chain management', description: 'Pilotage des flux.' },
            { icon: '🌍', name: 'Import-export & commerce international', description: 'Douanes et transit.' },
            { icon: '📦', name: 'Préparation de commandes', description: 'Picking et conditionnement.' },
            { icon: '🚇', name: 'Transport urbain', description: 'Mobilité en ville.' },
            { icon: '🚴', name: 'Mobilités douces', description: 'Vélo et micro-mobilité.' }
        ]
    },
    {
        id: 14,
        icon: '📈',
        name: 'Management, entrepreneuriat & stratégie',
        description: 'Dirigez, entreprenez, définissez des stratégies et managez des équipes.',
        subUniverses: [
            { icon: '👔', name: 'Direction générale', description: 'Leadership et vision d\\'ensemble.' },
            { icon: '📊', name: 'Management d\\'équipe', description: 'Encadrement et coordination.' },
            { icon: '🚀', name: 'Entrepreneuriat & startup', description: 'Création d\\'entreprise.' },
            { icon: '💼', name: 'Conseil en stratégie', description: 'Accompagnement stratégique.' },
            { icon: '📈', name: 'Développement commercial', description: 'Croissance et expansion.' },
            { icon: '🎯', name: 'Gestion de projet', description: 'Pilotage de projets complexes.' },
            { icon: '🔄', name: 'Conduite du changement', description: 'Transformation organisationnelle.' },
            { icon: '🌟', name: 'Innovation & R&D', description: 'Recherche et développement.' },
            { icon: '🤝', name: 'Partenariats & alliances', description: 'Développement de collaborations.' }
        ]
    },
    {
        id: 15,
        icon: '💻',
        name: 'Numérique, informatique & data',
        description: 'Développez, analysez, sécurisez et gérez les systèmes et données numériques.',
        subUniverses: [
            { icon: '💻', name: 'Développement web', description: 'Sites et applications web.' },
            { icon: '📱', name: 'Développement mobile', description: 'Applications iOS et Android.' },
            { icon: '🖥️', name: 'Développement logiciel', description: 'Programmes et systèmes.' },
            { icon: '📊', name: 'Data science & analyse', description: 'Exploitation de données.' },
            { icon: '🤖', name: 'Intelligence artificielle', description: 'Machine learning et IA.' },
            { icon: '🔐', name: 'Cybersécurité', description: 'Protection des systèmes.' },
            { icon: '☁️', name: 'Cloud & infrastructure', description: 'Architecture cloud.' },
            { icon: '🎮', name: 'Jeux vidéo', description: 'Conception et développement.' },
            { icon: '🎨', name: 'UX/UI Design', description: 'Expérience et interface utilisateur.' },
            { icon: '🔧', name: 'DevOps & administration système', description: 'Opérations et automatisation.' },
            { icon: '📡', name: 'Réseaux & télécommunications', description: 'Infrastructure réseau.' },
            { icon: '💾', name: 'Bases de données', description: 'Gestion et optimisation.' }
        ]
    },
    {
        id: 16,
        icon: '🏥',
        name: 'Santé, bien-être & médical',
        description: 'Soignez, diagnostiquez, accompagnez et promouvez la santé.',
        subUniverses: [
            { icon: '👨‍⚕️', name: 'Médecine générale', description: 'Soins de premier recours.' },
            { icon: '🏥', name: 'Médecine spécialisée', description: 'Spécialités médicales.' },
            { icon: '🩺', name: 'Paramédical & soins', description: 'Infirmiers, aides-soignants.' },
            { icon: '💊', name: 'Pharmacie', description: 'Médicaments et conseil.' },
            { icon: '🦷', name: 'Dentaire & orthodontie', description: 'Soins bucco-dentaires.' },
            { icon: '👁️', name: 'Optique & audioprothèse', description: 'Correction visuelle et auditive.' },
            { icon: '💆', name: 'Kinésithérapie & rééducation', description: 'Thérapie physique.' },
            { icon: '🧠', name: 'Psychologie & psychiatrie', description: 'Santé mentale.' },
            { icon: '🔬', name: 'Laboratoire & analyses', description: 'Biologie médicale.' },
            { icon: '🚑', name: 'Urgences & secours', description: 'Médecine d\\'urgence.' },
            { icon: '🏥', name: 'Gestion hospitalière', description: 'Administration de santé.' },
            { icon: '💊', name: 'Recherche médicale', description: 'Innovation thérapeutique.' }
        ]
    },
    {
        id: 17,
        icon: '🔬',
        name: 'Sciences, recherche & innovation',
        description: 'Cherchez, expérimentez, découvrez et innovez dans les sciences.',
        subUniverses: [
            { icon: '🧪', name: 'Chimie & biochimie', description: 'Recherche en chimie.' },
            { icon: '🔬', name: 'Biologie & sciences du vivant', description: 'Étude des organismes.' },
            { icon: '⚛️', name: 'Physique & matériaux', description: 'Physique fondamentale et appliquée.' },
            { icon: '🌍', name: 'Géosciences & environnement', description: 'Sciences de la Terre.' },
            { icon: '🔭', name: 'Astronomie & astrophysique', description: 'Étude de l\\'univers.' },
            { icon: '🧬', name: 'Génétique & biotechnologies', description: 'Manipulation du vivant.' },
            { icon: '💊', name: 'Pharmacologie', description: 'Développement de médicaments.' },
            { icon: '🏭', name: 'Ingénierie & R&D industrielle', description: 'Innovation technique.' },
            { icon: '📚', name: 'Sciences humaines & sociales', description: 'Analyse des sociétés.' },
            { icon: '📖', name: 'Recherche en éducation', description: 'Étude des processus d\\'apprentissage.' },
            { icon: '💡', name: 'Recherche appliquée & transfert technologique', description: 'Passage de la science au produit.' },
            { icon: '🏢', name: 'R&D en entreprise', description: 'Innovation intégrée à la production.' },
            { icon: '📊', name: 'Études et consulting scientifique', description: 'Expertise et accompagnement de projets techniques.' }
        ]
    },
    {
        id: 18,
        icon: '🚨',
        name: 'Sécurité, défense & urgence',
        description: 'Protégez, intervenez, sécurisez les personnes et les biens au quotidien.',
        subUniverses: [
            { icon: '👮', name: 'Police & gendarmerie', description: 'Maintien de l\\'ordre et protection des citoyens.' },
            { icon: '🚒', name: 'Pompiers & secours', description: 'Interventions d\\'urgence et sauvetage.' },
            { icon: '🔒', name: 'Sécurité privée & surveillance', description: 'Protection des biens et des personnes.' },
            { icon: '🆘', name: 'Protection civile', description: 'Organisation des secours en cas de catastrophe.' },
            { icon: '🎖️', name: 'Défense & armée', description: 'Sécurité nationale et opérations extérieures.' },
            { icon: '🕵️', name: 'Renseignement & sécurité stratégique', description: 'Collecte et analyse d\\'informations sensibles.' },
            { icon: '🔐', name: 'Sécurité informatique & cyberdéfense', description: 'Prévention des attaques numériques.' },
            { icon: '🏭', name: 'Sécurité des infrastructures critiques', description: 'Protection des réseaux essentiels (énergie, transport).' },
            { icon: '📋', name: 'Gestion de crise & résilience territoriale', description: 'Coordination des réponses aux urgences.' },
            { icon: '⚠️', name: 'Prévention des risques & sûreté publique', description: 'Surveillance et évaluation des menaces.' },
            { icon: '🛡️', name: 'Industrie de défense & armement', description: 'Conception d\\'équipements militaires.' }
        ]
    },
    {
        id: 19,
        icon: '❤️',
        name: 'Social, aide & solidarité',
        description: 'Aidez, accompagnez, soutenez les personnes en difficulté ou en situation de vulnérabilité.',
        subUniverses: [
            { icon: '🏠', name: 'Aide à domicile', description: 'Soutien aux personnes dépendantes.' },
            { icon: '🤝', name: 'Travail social & insertion', description: 'Accompagnement vers l\\'autonomie et l\\'emploi.' },
            { icon: '👶', name: 'Enfance & jeunesse', description: 'Protection et éducation des jeunes publics.' },
            { icon: '♿', name: 'Handicap & inclusion', description: 'Soutien à la participation sociale des personnes handicapées.' },
            { icon: '🧠', name: 'Santé mentale & accompagnement', description: 'Suivi social et psychologique.' },
            { icon: '🎭', name: 'Animation & médiation sociale', description: 'Création de lien et d\\'activités collectives.' },
            { icon: '👨‍👩‍👧', name: 'Protection de l\\'enfance', description: 'Défense des droits et sécurité des mineurs.' },
            { icon: '🤲', name: 'Économie sociale & solidaire', description: 'Entreprises à finalité sociale et collective.' },
            { icon: '🌟', name: 'Bénévolat & engagement citoyen', description: 'Actions solidaires et collectives.' },
            { icon: '🏥', name: 'Gestion d\\'établissements médico-sociaux', description: 'Pilotage de structures d\\'accueil.' },
            { icon: '👨‍👩‍👧‍👦', name: 'Médiation familiale', description: 'Résolution de conflits familiaux.' },
            { icon: '🏠', name: 'Services à la personne & assistance familiale', description: 'Soutien à domicile et accompagnement quotidien.' },
            { icon: '🕊️', name: 'Accompagnement funéraire & thanatologie', description: 'Soutien aux familles et organisation des rites.' }
        ]
    },
    {
        id: 20,
        icon: '⚽',
        name: 'Sport, loisirs & vie active',
        description: 'Entraînez, animez, organisez des activités sportives et de loisirs pour tous.',
        subUniverses: [
            { icon: '🏋️', name: 'Coaching sportif', description: 'Entraînement personnalisé et motivation.' },
            { icon: '🎉', name: 'Animation & loisirs', description: 'Encadrement d\\'activités de détente.' },
            { icon: '🏃', name: 'Éducation physique & enseignement du sport', description: 'Formation sportive en milieu scolaire.' },
            { icon: '⚽', name: 'Encadrement sportif & fédérations', description: 'Organisation et arbitrage des pratiques.' },
            { icon: '🏟️', name: 'Gestion d\\'équipements sportifs', description: 'Direction d\\'installations ou clubs.' },
            { icon: '🤝', name: 'Médiation par le sport', description: 'Utilisation du sport à des fins sociales ou éducatives.' },
            { icon: '🥗', name: 'Nutrition & bien-être', description: 'Équilibre alimentaire et hygiène de vie.' },
            { icon: '🏥', name: 'Sport santé & réathlétisation', description: 'Activité physique adaptée à la santé.' },
            { icon: '🏆', name: 'Organisation d\\'événements sportifs', description: 'Planification et logistique de compétitions.' },
            { icon: '🌍', name: 'Tourisme sportif', description: 'Voyages et séjours autour du sport.' },
            { icon: '🎮', name: 'E-sport & compétition numérique', description: 'Compétition professionnelle de jeux vidéo.' }
        ]
    },
    {
        id: 21,
        icon: '🚀',
        name: 'Technologies émergentes & futur du travail',
        description: 'Explorez l\\'IA, la robotique, le métavers et les nouvelles formes de travail.',
        subUniverses: [
            { icon: '🤖', name: 'Robotique humanoïde avancée', description: 'Conception de robots capables d\\'interagir naturellement.' },
            { icon: '🥽', name: 'Technologies immersives nouvelle génération (XR, haptique)', description: 'Interfaces sensorielles et réalités augmentées.' },
            { icon: '🧬', name: 'Biotechnologies avancées & bio-ingénierie', description: 'Innovation à l\\'échelle du vivant.' },
            { icon: '🌱', name: 'AgroTech & FoodTech', description: 'Nouvelles technologies pour l\\'agriculture et l\\'alimentation.' },
            { icon: '♻️', name: 'CleanTech & GreenTech', description: 'Solutions technologiques pour réduire l\\'impact écologique.' },
            { icon: '💊', name: 'HealthTech & MedTech', description: 'Dispositifs connectés et innovations médicales.' },
            { icon: '🛸', name: 'SpaceTech & exploration spatiale', description: 'Technologies dédiées à l\\'espace et aux satellites.' },
            { icon: '💼', name: 'Économie créative & travail numérique indépendant', description: 'Nouvelles formes de métiers autonomes et digitaux.' }
        ]
    }
];
"""

with open('/mnt/user-data/outputs/universes-data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fichier créé avec succès!")
ENDOFFILE
python3 /home/claude/create_universes.py
