// Données complètes des 21 univers avec leurs sous-univers
const universesData = [
    {
        id: 1,
        icon: '🌾',
        name: 'Agriculture, nature & animaux',
        description: 'Cultivez, élevez, protégez la nature et travaillez avec les animaux dans des métiers en plein air.',
        subUniverses: [
            { icon: '🏭', name: 'Agroalimentaire industriel', description: 'Transformation et production à grande échelle des produits agricoles.' },
            { icon: '🌱', name: 'Production biologique & circuits courts', description: 'Cultures et élevages respectueux de l\'environnement, vente locale.' },
            { icon: '🔬', name: 'Agronomie & recherche appliquée', description: 'Études scientifiques pour améliorer les rendements et la durabilité.' },
            { icon: '🌾', name: 'Cultures céréalières & grandes exploitations', description: 'Gestion de grandes surfaces agricoles mécanisées.' },
            { icon: '🍇', name: 'Viticulture & œnologie', description: 'Culture de la vigne et production du vin.' },
            { icon: '🥕', name: 'Maraîchage & production maraîchère', description: 'Culture de légumes et fruits de saison.' },
            { icon: '🌺', name: 'Horticulture & pépinière', description: 'Production de plantes ornementales et d\'arbustes.' },
            { icon: '🌳', name: 'Paysagisme & aménagement végétal', description: 'Création et entretien d\'espaces verts.' },
            { icon: '🌲', name: 'Forêt & sylviculture durable', description: 'Gestion et exploitation raisonnée des forêts.' },
            { icon: '🐄', name: 'Élevage bovin / ovin / porcin / avicole', description: 'Production animale pour la viande, le lait ou les œufs.' },
            { icon: '🐟', name: 'Aquaculture & pêche durable', description: 'Élevage de poissons et gestion responsable des ressources marines.' },
            { icon: '🐝', name: 'Apiculture & insectes utiles', description: 'Élevage d\'abeilles et valorisation des insectes pollinisateurs.' },
            { icon: '💧', name: 'Gestion de l\'eau, irrigation & bassins versants', description: 'Maîtrise des ressources hydriques pour l\'agriculture.' },
            { icon: '🏭', name: 'Valorisation & transformation des produits agricoles', description: 'Fabrication de produits finis à partir des matières premières.' },
            { icon: '🏡', name: 'Soins domestiques & entretien des espaces', description: 'Entretien, nettoyage et maintenance des habitations et espaces de vie.' }
        ]
    },
    {
        id: 2,
        icon: '🎨',
        name: 'Arts, design & création',
        description: 'Créez, dessinez, designez et exprimez votre créativité dans l\'art visuel, graphique ou appliqué.',
        subUniverses: [
            { icon: '🎭', name: 'Arts visuels & peinture', description: 'Création artistique sur support visuel.' },
            { icon: '🗿', name: 'Sculpture & installations', description: 'Conception d\'œuvres tridimensionnelles.' },
            { icon: '🖌️', name: 'Design graphique & communication visuelle', description: 'Création d\'images et supports de communication.' },
            { icon: '💡', name: 'Design produit & industriel', description: 'Conception d\'objets et produits manufacturés.' },
            { icon: '🛋️', name: 'Architecture intérieure & décoration', description: 'Aménagement esthétique et fonctionnel des espaces.' },
            { icon: '📷', name: 'Photographie & image numérique', description: 'Prise de vue, retouche et diffusion d\'images.' },
            { icon: '🎬', name: 'Cinéma, audiovisuel & animation', description: 'Production de films et contenus visuels.' },
            { icon: '👗', name: 'Mode, stylisme & textile', description: 'Conception de vêtements et accessoires.' },
            { icon: '🪡', name: 'Artisanat d\'art traditionnel', description: 'Création manuelle de pièces uniques.' },
            { icon: '🎪', name: 'Scénographie & design d\'espace', description: 'Mise en scène d\'expositions ou de spectacles.' },
            { icon: '✏️', name: 'Illustration & bande dessinée', description: 'Narration visuelle et création d\'univers graphiques.' },
            { icon: '🏛️', name: 'Patrimoine, muséographie & restauration d\'art', description: 'Conservation et mise en valeur d\'œuvres anciennes.' },
            { icon: '🎭', name: 'Spectacle vivant & arts de la scène', description: 'Interprétation et production théâtrale ou musicale.' },
            { icon: '💎', name: 'Métiers du luxe & savoir-faire d\'exception', description: 'Création haut de gamme mêlant tradition et innovation.' },
            { icon: '🎚️', name: 'Régie & technique du spectacle', description: 'Gestion des aspects techniques d\'événements artistiques.' }
        ]
    },
    {
        id: 3,
        icon: '🛒',
        name: 'Commerce, marketing & vente',
        description: 'Vendez, négociez, développez des stratégies commerciales et fidélisez les clients.',
        subUniverses: [
            { icon: '🏪', name: 'Commerce de détail & retail', description: 'Vente directe aux consommateurs.' },
            { icon: '📱', name: 'E-commerce & marketplaces', description: 'Vente en ligne et gestion de plateformes numériques.' },
            { icon: '💼', name: 'Vente B2B & négociation commerciale', description: 'Relations commerciales entre entreprises.' },
            { icon: '🚗', name: 'Représentation & prospection', description: 'Développement de clientèle sur le terrain.' },
            { icon: '🎯', name: 'Merchandising & mise en valeur produits', description: 'Optimisation de la présentation des produits.' },
            { icon: '📊', name: 'Marketing stratégique', description: 'Étude de marché et positionnement des offres.' },
            { icon: '📲', name: 'Marketing digital & réseaux sociaux', description: 'Promotion via les outils numériques.' },
            { icon: '💬', name: 'Communication commerciale & influence', description: 'Stratégies de persuasion et fidélisation.' },
            { icon: '🏭', name: 'Achats & approvisionnement', description: 'Sélection et négociation avec les fournisseurs.' },
            { icon: '👔', name: 'Gestion de rayon & management de point de vente', description: 'Pilotage opérationnel des équipes et stocks.' },
            { icon: '🏢', name: 'Immobilier commercial', description: 'Vente et location d\'espaces professionnels.' },
            { icon: '🏦', name: 'Banque & assurance commerciale', description: 'Vente de produits financiers et d\'assurance.' },
            { icon: '📞', name: 'Service client & relation après-vente', description: 'Suivi et satisfaction des clients.' },
            { icon: '💎', name: 'Commerce du luxe & clientèle premium', description: 'Vente haut de gamme et expérience exclusive.' },
            { icon: '🌐', name: 'Vente en ligne & marketplaces spécialisées', description: 'Plateformes ciblées sur des niches de produits.' }
        ]
    },
    {
        id: 4,
        icon: '📡',
        name: 'Communication, médias & culture',
        description: 'Informez, divertissez, communiquez à travers les médias, la culture et l\'événementiel.',
        subUniverses: [
            { icon: '📰', name: 'Journalisme & presse écrite', description: 'Recherche, rédaction et diffusion d\'informations vérifiées.' },
            { icon: '📺', name: 'Audiovisuel & production radio/TV', description: 'Réalisation et diffusion d\'émissions ou reportages.' },
            { icon: '🎤', name: 'Relations publiques & événementiel', description: 'Gestion de l\'image d\'une organisation et organisation d\'événements.' },
            { icon: '📢', name: 'Communication d\'entreprise', description: 'Promotion interne et externe d\'une marque ou institution.' },
            { icon: '🏛️', name: 'Communication publique & politique', description: 'Information et influence dans le secteur public.' },
            { icon: '📚', name: 'Édition & correction', description: 'Relecture, mise en page et diffusion d\'ouvrages.' },
            { icon: '✍️', name: 'Création de contenus numériques', description: 'Production de vidéos, posts, podcasts ou blogs.' },
            { icon: '📣', name: 'Influence & marketing d\'influence', description: 'Promotion via les réseaux et créateurs de contenu.' },
            { icon: '🎙️', name: 'Podcast & médias audio', description: 'Conception et diffusion de formats sonores.' },
            { icon: '🎮', name: 'Streaming & médias interactifs', description: 'Animation en direct et engagement communautaire.' },
            { icon: '🎪', name: 'Production événementielle culturelle', description: 'Organisation de festivals et manifestations.' },
            { icon: '🎬', name: 'Cinéma & production audiovisuelle', description: 'Réalisation de films et contenus vidéo.' },
            { icon: '🎵', name: 'Musique & production sonore', description: 'Composition, enregistrement et diffusion musicale.' },
            { icon: '🎭', name: 'Théâtre & spectacle vivant', description: 'Création et interprétation scénique.' },
            { icon: '🖼️', name: 'Médiation culturelle & programmation', description: 'Animation de lieux culturels et accompagnement des publics.' }
        ]
    },
    {
        id: 5,
        icon: '🏗️',
        name: 'Construction, BTP & habitat',
        description: 'Construisez, rénovez, aménagez les bâtiments et infrastructures de demain.',
        subUniverses: [
            { icon: '🏗️', name: 'Gros œuvre & structure', description: 'Construction des fondations et structures portantes.' },
            { icon: '🧱', name: 'Maçonnerie & béton', description: 'Montage de murs et réalisation de dalles.' },
            { icon: '🪵', name: 'Charpente & ossature bois', description: 'Construction de structures en bois.' },
            { icon: '🏠', name: 'Couverture & étanchéité', description: 'Installation et réparation de toitures.' },
            { icon: '🎨', name: 'Second œuvre & finitions', description: 'Plâtrerie, peinture et revêtements.' },
            { icon: '🔌', name: 'Électricité & domotique', description: 'Installation électrique et systèmes connectés.' },
            { icon: '🚰', name: 'Plomberie & sanitaire', description: 'Réseaux d\'eau et systèmes sanitaires.' },
            { icon: '❄️', name: 'Chauffage, climatisation & ventilation', description: 'Systèmes thermiques et renouvellement d\'air.' },
            { icon: '🏗️', name: 'Travaux publics & génie civil', description: 'Construction d\'infrastructures routières et ouvrages d\'art.' },
            { icon: '🌉', name: 'Ponts & ouvrages d\'art', description: 'Conception et réalisation de structures exceptionnelles.' },
            { icon: '🏢', name: 'Promotion immobilière', description: 'Développement et commercialisation de projets immobiliers.' },
            { icon: '📐', name: 'Architecture & conception', description: 'Design et planification de bâtiments.' },
            { icon: '🛠️', name: 'Maintenance & rénovation', description: 'Entretien et modernisation du bâti existant.' },
            { icon: '♻️', name: 'Construction durable & éco-construction', description: 'Bâtiments écologiques et performants énergétiquement.' },
            { icon: '🏗️', name: 'Conduite de travaux & chef de chantier', description: 'Coordination et gestion de projets de construction.' }
        ]
    },
    {
        id: 6,
        icon: '⚖️',
        name: 'Droit, administration & politique publique',
        description: 'Défendez, conseillez, gérez les affaires juridiques et administratives.',
        subUniverses: [
            { icon: '👨‍⚖️', name: 'Avocature & conseil juridique', description: 'Défense et conseil en matière de droit.' },
            { icon: '⚖️', name: 'Magistrature & justice', description: 'Application de la loi et jugement des affaires.' },
            { icon: '📝', name: 'Notariat & juriste immobilier', description: 'Authentification d\'actes et transactions.' },
            { icon: '🏢', name: 'Droit des affaires & sociétés', description: 'Conseil juridique aux entreprises.' },
            { icon: '👥', name: 'Droit social & ressources humaines', description: 'Gestion juridique du travail et des relations sociales.' },
            { icon: '🌍', name: 'Droit international & européen', description: 'Application des réglementations internationales.' },
            { icon: '🏛️', name: 'Administration publique & territoriale', description: 'Gestion des collectivités et services publics.' },
            { icon: '📋', name: 'Gestion administrative', description: 'Organisation et coordination des processus administratifs.' },
            { icon: '🗳️', name: 'Politique & vie publique', description: 'Élaboration et mise en œuvre des politiques.' },
            { icon: '🤝', name: 'Relations institutionnelles & lobbying', description: 'Influence et représentation d\'intérêts.' },
            { icon: '📊', name: 'Conseil en politiques publiques', description: 'Accompagnement stratégique des institutions.' },
            { icon: '🌐', name: 'Affaires européennes & internationales', description: 'Coordination de projets transnationaux.' },
            { icon: '📜', name: 'Contentieux & médiation', description: 'Résolution de conflits juridiques.' }
        ]
    },
    {
        id: 7,
        icon: '📚',
        name: 'Éducation, formation & apprentissage',
        description: 'Enseignez, formez, transmettez vos connaissances et accompagnez les apprenants.',
        subUniverses: [
            { icon: '👶', name: 'Petite enfance & crèche', description: 'Éveil et garde des jeunes enfants.' },
            { icon: '🎒', name: 'Enseignement primaire & maternelle', description: 'Instruction des fondamentaux.' },
            { icon: '📖', name: 'Enseignement secondaire (collège & lycée)', description: 'Formation des adolescents.' },
            { icon: '🎓', name: 'Enseignement supérieur & recherche', description: 'Formation universitaire et avancée.' },
            { icon: '🏫', name: 'Formation professionnelle continue', description: 'Accompagnement des adultes en reconversion.' },
            { icon: '🧑‍🏫', name: 'Coaching pédagogique & tutorat', description: 'Accompagnement individualisé.' },
            { icon: '💻', name: 'Formation digitale & e-learning', description: 'Enseignement à distance et numérique.' },
            { icon: '🌍', name: 'Éducation spécialisée & adaptation', description: 'Accompagnement de publics à besoins spécifiques.' },
            { icon: '🗣️', name: 'Enseignement de langues', description: 'Formation linguistique et interculturelle.' },
            { icon: '🎵', name: 'Enseignement artistique & culturel', description: 'Transmission de pratiques créatives.' },
            { icon: '⚽', name: 'Enseignement sportif', description: 'Formation à la pratique sportive.' },
            { icon: '📚', name: 'Documentation & bibliothèque', description: 'Gestion et médiation des ressources documentaires.' },
            { icon: '🧩', name: 'Ingénierie pédagogique', description: 'Conception de dispositifs de formation.' },
            { icon: '🎯', name: 'Conseil en orientation', description: 'Accompagnement des choix de parcours.' }
        ]
    },
    {
        id: 8,
        icon: '🌍',
        name: 'Environnement, climat & énergies',
        description: 'Préservez, analysez, développez des solutions durables pour la planète.',
        subUniverses: [
            { icon: '♻️', name: 'Gestion des déchets & économie circulaire', description: 'Collecte, tri et valorisation des déchets.' },
            { icon: '💧', name: 'Gestion de l\'eau & assainissement', description: 'Traitement et distribution de l\'eau potable.' },
            { icon: '🌱', name: 'Protection de la biodiversité', description: 'Conservation des espèces et écosystèmes.' },
            { icon: '🏞️', name: 'Gestion des espaces naturels', description: 'Entretien et valorisation des sites naturels.' },
            { icon: '🌡️', name: 'Climat & adaptation au changement climatique', description: 'Études et stratégies climatiques.' },
            { icon: '☀️', name: 'Énergies renouvelables (solaire, éolien)', description: 'Production d\'énergie propre.' },
            { icon: '🔋', name: 'Efficacité énergétique', description: 'Optimisation de la consommation énergétique.' },
            { icon: '⚡', name: 'Production & distribution d\'énergie', description: 'Gestion des réseaux électriques.' },
            { icon: '🧪', name: 'Ingénierie environnementale', description: 'Conception de solutions techniques durables.' },
            { icon: '📊', name: 'Audit & conseil en environnement', description: 'Évaluation et amélioration des pratiques.' },
            { icon: '🌐', name: 'Développement durable & RSE', description: 'Stratégies de responsabilité sociétale.' },
            { icon: '🚜', name: 'Agriculture & transition écologique', description: 'Pratiques agricoles durables.' },
            { icon: '🏭', name: 'Dépollution & réhabilitation des sites', description: 'Nettoyage et restauration des zones contaminées.' }
        ]
    },
    {
        id: 9,
        icon: '💰',
        name: 'Gestion, finance & comptabilité',
        description: 'Gérez, analysez, optimisez les ressources financières des organisations.',
        subUniverses: [
            { icon: '📊', name: 'Comptabilité générale', description: 'Tenue des comptes et obligations légales.' },
            { icon: '📈', name: 'Audit & contrôle de gestion', description: 'Vérification et analyse des performances.' },
            { icon: '💼', name: 'Finance d\'entreprise', description: 'Gestion des investissements et financements.' },
            { icon: '🏦', name: 'Banque & services financiers', description: 'Gestion de comptes et produits bancaires.' },
            { icon: '📉', name: 'Marchés financiers & trading', description: 'Achat et vente d\'actifs financiers.' },
            { icon: '🤝', name: 'Private equity & capital-investissement', description: 'Investissement dans des entreprises non cotées.' },
            { icon: '💳', name: 'Assurance & prévoyance', description: 'Gestion des risques et couvertures.' },
            { icon: '🏠', name: 'Finance immobilière', description: 'Montage financier de projets immobiliers.' },
            { icon: '💰', name: 'Gestion de patrimoine', description: 'Conseil en investissement et optimisation fiscale.' },
            { icon: '🧮', name: 'Fiscalité & optimisation', description: 'Conseil fiscal et déclarations.' },
            { icon: '📋', name: 'Administration & gestion d\'entreprise', description: 'Pilotage administratif des organisations.' },
            { icon: '📊', name: 'Contrôle budgétaire', description: 'Suivi et prévision des dépenses.' },
            { icon: '🔍', name: 'Analyse financière', description: 'Évaluation de la santé financière.' }
        ]
    },
    {
        id: 10,
        icon: '🍽️',
        name: 'Hôtellerie, restauration & tourisme',
        description: 'Accueillez, cuisinez, organisez des séjours et expériences mémorables.',
        subUniverses: [
            { icon: '🏨', name: 'Hôtellerie & hébergement', description: 'Gestion d\'établissements d\'accueil.' },
            { icon: '🍳', name: 'Cuisine & gastronomie', description: 'Préparation culinaire et création de plats.' },
            { icon: '🍰', name: 'Pâtisserie & boulangerie', description: 'Confection de pains et desserts.' },
            { icon: '☕', name: 'Service en salle & bar', description: 'Accueil et service à la clientèle.' },
            { icon: '🎪', name: 'Événementiel & banquets', description: 'Organisation de réceptions.' },
            { icon: '✈️', name: 'Tourisme & agences de voyages', description: 'Conception et vente de séjours.' },
            { icon: '🗺️', name: 'Guidage & accompagnement touristique', description: 'Animation de visites et circuits.' },
            { icon: '🏖️', name: 'Tourisme de loisirs & stations', description: 'Gestion de structures d\'accueil touristique.' },
            { icon: '🌍', name: 'Tourisme durable & écotourisme', description: 'Voyages responsables et respectueux.' },
            { icon: '🎢', name: 'Parcs de loisirs & attractions', description: 'Animation et gestion de sites récréatifs.' },
            { icon: '🚢', name: 'Croisières & tourisme maritime', description: 'Services à bord de navires.' },
            { icon: '📞', name: 'Réception & conciergerie', description: 'Service client et coordination de demandes.' }
        ]
    },
    {
        id: 11,
        icon: '🏘️',
        name: 'Immobilier & patrimoine',
        description: 'Conseillez, gérez, valorisez les biens immobiliers et patrimoniaux.',
        subUniverses: [
            { icon: '🏡', name: 'Transaction immobilière résidentielle', description: 'Vente et location de logements.' },
            { icon: '🏢', name: 'Immobilier d\'entreprise & bureaux', description: 'Commercialisation d\'espaces professionnels.' },
            { icon: '🏗️', name: 'Promotion immobilière', description: 'Développement de programmes neufs.' },
            { icon: '🔑', name: 'Gestion locative & syndic', description: 'Administration de biens et copropriétés.' },
            { icon: '📊', name: 'Investissement & conseil patrimonial', description: 'Optimisation et stratégie d\'investissement.' },
            { icon: '🏛️', name: 'Expertise & évaluation immobilière', description: 'Estimation de la valeur des biens.' },
            { icon: '🏗️', name: 'Asset management immobilier', description: 'Gestion de portefeuilles immobiliers.' },
            { icon: '🏘️', name: 'Urbanisme & aménagement', description: 'Planification du développement territorial.' },
            { icon: '🏰', name: 'Patrimoine historique & monuments', description: 'Conservation et valorisation du patrimoine ancien.' }
        ]
    },
    {
        id: 12,
        icon: '🏭',
        name: 'Industrie, fabrication & production',
        description: 'Produisez, assemblez, contrôlez la qualité dans les secteurs industriels.',
        subUniverses: [
            { icon: '⚙️', name: 'Production & fabrication', description: 'Transformation de matières en produits finis.' },
            { icon: '🔧', name: 'Maintenance industrielle', description: 'Entretien et réparation d\'équipements.' },
            { icon: '🤖', name: 'Automatisation & robotique', description: 'Intégration de systèmes automatisés.' },
            { icon: '✅', name: 'Contrôle qualité', description: 'Vérification des normes et standards.' },
            { icon: '📦', name: 'Logistique de production', description: 'Gestion des flux dans l\'usine.' },
            { icon: '🏭', name: 'Industrie agroalimentaire', description: 'Transformation de produits alimentaires.' },
            { icon: '⚗️', name: 'Industrie chimique & pharmaceutique', description: 'Production de composés chimiques et médicaments.' },
            { icon: '🚗', name: 'Industrie automobile', description: 'Fabrication de véhicules et composants.' },
            { icon: '✈️', name: 'Aéronautique & spatial', description: 'Construction d\'avions et engins spatiaux.' },
            { icon: '💊', name: 'Cosmétique & parfumerie', description: 'Fabrication de produits de beauté.' },
            { icon: '👕', name: 'Textile & confection', description: 'Production de vêtements et tissus.' },
            { icon: '📱', name: 'Électronique & high-tech', description: 'Assemblage de composants électroniques.' },
            { icon: '🔩', name: 'Métallurgie & sidérurgie', description: 'Transformation des métaux.' },
            { icon: '🏗️', name: 'Matériaux de construction', description: 'Production de ciment, béton, etc.' }
        ]
    },
    {
        id: 13,
        icon: '🚚',
        name: 'Logistique, transport & mobilité',
        description: 'Transportez, organisez, optimisez les flux de marchandises et de personnes.',
        subUniverses: [
            { icon: '📦', name: 'Logistique & supply chain', description: 'Gestion globale des flux de marchandises.' },
            { icon: '🏭', name: 'Entreposage & gestion de stocks', description: 'Stockage et préparation de commandes.' },
            { icon: '🚛', name: 'Transport routier de marchandises', description: 'Acheminement par camions.' },
            { icon: '🚢', name: 'Transport maritime & fluvial', description: 'Fret par voie d\'eau.' },
            { icon: '✈️', name: 'Transport aérien & fret', description: 'Logistique aéroportuaire.' },
            { icon: '🚂', name: 'Transport ferroviaire', description: 'Exploitation de trains de marchandises et passagers.' },
            { icon: '🚌', name: 'Transport de personnes (urbain, scolaire)', description: 'Services de mobilité collective.' },
            { icon: '🚕', name: 'VTC & mobilité à la demande', description: 'Transport personnalisé.' },
            { icon: '📲', name: 'Nouvelles mobilités & micro-mobilité', description: 'Vélos, trottinettes et solutions innovantes.' },
            { icon: '🌐', name: 'E-logistique & livraison express', description: 'Logistique du e-commerce.' },
            { icon: '🚁', name: 'Transport exceptionnel & spécialisé', description: 'Acheminement de charges hors normes.' },
            { icon: '📊', name: 'Optimisation des flux & planification', description: 'Gestion stratégique des réseaux logistiques.' }
        ]
    },
    {
        id: 14,
        icon: '👔',
        name: 'Management, entrepreneuriat & stratégie',
        description: 'Dirigez, innovez, développez des stratégies pour les entreprises.',
        subUniverses: [
            { icon: '🎯', name: 'Direction générale & CEO', description: 'Pilotage stratégique d\'organisations.' },
            { icon: '📊', name: 'Stratégie & conseil', description: 'Accompagnement des transformations.' },
            { icon: '👥', name: 'Management d\'équipes', description: 'Animation et coordination de collaborateurs.' },
            { icon: '🚀', name: 'Entrepreneuriat & création d\'entreprise', description: 'Lancement et développement de projets.' },
            { icon: '📈', name: 'Développement commercial & business development', description: 'Croissance et partenariats.' },
            { icon: '🔄', name: 'Gestion de projet & product management', description: 'Pilotage de projets complexes.' },
            { icon: '💡', name: 'Innovation & R&D management', description: 'Stratégie d\'innovation.' },
            { icon: '🌍', name: 'Développement international', description: 'Expansion à l\'étranger.' },
            { icon: '🤝', name: 'Partenariats & alliances stratégiques', description: 'Négociation et coordination d\'accords.' },
            { icon: '📉', name: 'Gestion de crise & restructuration', description: 'Redressement d\'entreprises.' },
            { icon: '🏢', name: 'Gouvernance & direction d\'établissement', description: 'Pilotage d\'organismes et institutions.' }
        ]
    },
    {
        id: 15,
        icon: '💻',
        name: 'Numérique, informatique & data',
        description: 'Codez, développez, analysez les données dans l\'univers du digital.',
        subUniverses: [
            { icon: '💻', name: 'Développement logiciel', description: 'Programmation d\'applications.' },
            { icon: '🌐', name: 'Développement web & mobile', description: 'Création de sites et apps.' },
            { icon: '🔒', name: 'Cybersécurité & sécurité informatique', description: 'Protection des systèmes et données.' },
            { icon: '📊', name: 'Data science & intelligence artificielle', description: 'Analyse et modélisation des données.' },
            { icon: '🗄️', name: 'Gestion de bases de données', description: 'Administration et optimisation.' },
            { icon: '☁️', name: 'Cloud computing & infrastructure', description: 'Architecture et gestion du cloud.' },
            { icon: '🖥️', name: 'Support & administration système', description: 'Maintenance informatique.' },
            { icon: '🎮', name: 'Jeux vidéo & game design', description: 'Création d\'expériences ludiques.' },
            { icon: '🎨', name: 'UX/UI design & ergonomie', description: 'Conception d\'interfaces utilisateurs.' },
            { icon: '🔄', name: 'DevOps & intégration continue', description: 'Automatisation du déploiement.' },
            { icon: '📱', name: 'Produits numériques & tech', description: 'Développement de solutions digitales.' },
            { icon: '🧠', name: 'Machine learning & deep learning', description: 'Apprentissage automatique avancé.' },
            { icon: '🔗', name: 'Blockchain & technologies décentralisées', description: 'Systèmes distribués et cryptographie.' }
        ]
    },
    {
        id: 16,
        icon: '🏥',
        name: 'Santé, bien-être & médical',
        description: 'Soignez, prévenez, accompagnez pour la santé physique et mentale.',
        subUniverses: [
            { icon: '👨‍⚕️', name: 'Médecine générale & spécialisée', description: 'Diagnostic et traitement des maladies.' },
            { icon: '🏥', name: 'Soins infirmiers', description: 'Accompagnement et soins aux patients.' },
            { icon: '💊', name: 'Pharmacie', description: 'Délivrance et conseil en médicaments.' },
            { icon: '🦷', name: 'Dentisterie & orthodontie', description: 'Soins dentaires et corrections.' },
            { icon: '🩺', name: 'Paramédical & rééducation', description: 'Kinésithérapie, ergothérapie, orthophonie.' },
            { icon: '🧪', name: 'Biologie médicale & analyses', description: 'Examens de laboratoire.' },
            { icon: '🏥', name: 'Imagerie & radiologie', description: 'Diagnostics par imagerie médicale.' },
            { icon: '🧠', name: 'Psychologie & santé mentale', description: 'Accompagnement psychologique.' },
            { icon: '👶', name: 'Sage-femme & périnatalité', description: 'Suivi de la grossesse et de la naissance.' },
            { icon: '🚑', name: 'Urgences & réanimation', description: 'Prise en charge de situations critiques.' },
            { icon: '💆', name: 'Bien-être & médecines alternatives', description: 'Approches complémentaires de la santé.' },
            { icon: '🏋️', name: 'Activité physique adaptée', description: 'Sport sur prescription médicale.' },
            { icon: '🥗', name: 'Diététique & nutrition', description: 'Conseil alimentaire et rééquilibrage.' },
            { icon: '🏥', name: 'Gestion d\'établissements de santé', description: 'Administration hospitalière.' }
        ]
    },
    {
        id: 17,
        icon: '🔬',
        name: 'Sciences, recherche & innovation',
        description: 'Recherchez, expérimentez, innovez dans les sciences fondamentales et appliquées.',
        subUniverses: [
            { icon: '🔬', name: 'Recherche fondamentale', description: 'Avancée des connaissances scientifiques.' },
            { icon: '⚗️', name: 'Chimie & sciences des matériaux', description: 'Étude et développement de composés.' },
            { icon: '🧬', name: 'Biologie & sciences du vivant', description: 'Recherche sur les organismes vivants.' },
            { icon: '⚛️', name: 'Physique & mathématiques', description: 'Lois fondamentales de l\'univers.' },
            { icon: '🌍', name: 'Sciences de la terre & géologie', description: 'Étude de la planète et des ressources.' },
            { icon: '🌌', name: 'Astronomie & astrophysique', description: 'Exploration de l\'univers.' },
            { icon: '🧪', name: 'Biotechnologies', description: 'Applications technologiques du vivant.' },
            { icon: '💊', name: 'Pharmacologie & recherche médicale', description: 'Développement de traitements.' },
            { icon: '🧠', name: 'Neurosciences & sciences cognitives', description: 'Étude du cerveau et de la cognition.' },
            { icon: '📊', name: 'Sciences humaines & sociales', description: 'Analyse des sociétés.' },
            { icon: '📚', name: 'Recherche en éducation', description: 'Étude des processus d\'apprentissage.' },
            { icon: '🏭', name: 'Recherche appliquée & transfert technologique', description: 'Passage de la science au produit.' },
            { icon: '💡', name: 'R&D en entreprise', description: 'Innovation intégrée à la production.' },
            { icon: '📈', name: 'Études et consulting scientifique', description: 'Expertise et accompagnement de projets techniques.' }
        ]
    },
    {
        id: 18,
        icon: '🚨',
        name: 'Sécurité, défense & urgence',
        description: 'Protégez, intervenez, sécurisez les personnes et les biens au quotidien.',
        subUniverses: [
            { icon: '👮', name: 'Police & gendarmerie', description: 'Maintien de l\'ordre et protection des citoyens.' },
            { icon: '🚒', name: 'Pompiers & secours', description: 'Interventions d\'urgence et sauvetage.' },
            { icon: '🛡️', name: 'Sécurité privée & surveillance', description: 'Protection des biens et des personnes.' },
            { icon: '🚨', name: 'Protection civile', description: 'Organisation des secours en cas de catastrophe.' },
            { icon: '🎖️', name: 'Défense & armée', description: 'Sécurité nationale et opérations extérieures.' },
            { icon: '🕵️', name: 'Renseignement & sécurité stratégique', description: 'Collecte et analyse d\'informations sensibles.' },
            { icon: '🔒', name: 'Sécurité informatique & cyberdéfense', description: 'Prévention des attaques numériques.' },
            { icon: '🏭', name: 'Sécurité des infrastructures critiques', description: 'Protection des réseaux essentiels (énergie, transport).' },
            { icon: '📋', name: 'Gestion de crise & résilience territoriale', description: 'Coordination des réponses aux urgences.' },
            { icon: '⚠️', name: 'Prévention des risques & sûreté publique', description: 'Surveillance et évaluation des menaces.' },
            { icon: '🔫', name: 'Industrie de défense & armement', description: 'Conception d\'équipements militaires.' }
        ]
    },
    {
        id: 19,
        icon: '🤝',
        name: 'Social, aide & solidarité',
        description: 'Aidez, accompagnez, soutenez les personnes en difficulté ou en situation de vulnérabilité.',
        subUniverses: [
            { icon: '🏠', name: 'Aide à domicile', description: 'Soutien aux personnes dépendantes.' },
            { icon: '👥', name: 'Travail social & insertion', description: 'Accompagnement vers l\'autonomie et l\'emploi.' },
            { icon: '👶', name: 'Enfance & jeunesse', description: 'Protection et éducation des jeunes publics.' },
            { icon: '♿', name: 'Handicap & inclusion', description: 'Soutien à la participation sociale des personnes handicapées.' },
            { icon: '🧠', name: 'Santé mentale & accompagnement', description: 'Suivi social et psychologique.' },
            { icon: '🎨', name: 'Animation & médiation sociale', description: 'Création de lien et d\'activités collectives.' },
            { icon: '👨‍👩‍👧‍👦', name: 'Protection de l\'enfance', description: 'Défense des droits et sécurité des mineurs.' },
            { icon: '♻️', name: 'Économie sociale & solidaire', description: 'Entreprises à finalité sociale et collective.' },
            { icon: '🙏', name: 'Bénévolat & engagement citoyen', description: 'Actions solidaires et collectives.' },
            { icon: '🏢', name: 'Gestion d\'établissements médico-sociaux', description: 'Pilotage de structures d\'accueil.' },
            { icon: '⚖️', name: 'Médiation familiale', description: 'Résolution de conflits familiaux.' },
            { icon: '🏡', name: 'Services à la personne & assistance familiale', description: 'Soutien à domicile et accompagnement quotidien.' },
            { icon: '⚰️', name: 'Accompagnement funéraire & thanatologie', description: 'Soutien aux familles et organisation des rites.' }
        ]
    },
    {
        id: 20,
        icon: '⚽',
        name: 'Sport, loisirs & vie active',
        description: 'Entraînez, animez, organisez des activités sportives et de loisirs pour tous.',
        subUniverses: [
            { icon: '🏋️', name: 'Coaching sportif', description: 'Entraînement personnalisé et motivation.' },
            { icon: '🎪', name: 'Animation & loisirs', description: 'Encadrement d\'activités de détente.' },
            { icon: '📚', name: 'Éducation physique & enseignement du sport', description: 'Formation sportive en milieu scolaire.' },
            { icon: '⚽', name: 'Encadrement sportif & fédérations', description: 'Organisation et arbitrage des pratiques.' },
            { icon: '🏟️', name: 'Gestion d\'équipements sportifs', description: 'Direction d\'installations ou clubs.' },
            { icon: '🤝', name: 'Médiation par le sport', description: 'Utilisation du sport à des fins sociales ou éducatives.' },
            { icon: '🥗', name: 'Nutrition & bien-être', description: 'Équilibre alimentaire et hygiène de vie.' },
            { icon: '💊', name: 'Sport santé & réathlétisation', description: 'Activité physique adaptée à la santé.' },
            { icon: '🏆', name: 'Organisation d\'événements sportifs', description: 'Planification et logistique de compétitions.' },
            { icon: '✈️', name: 'Tourisme sportif', description: 'Voyages et séjours autour du sport.' },
            { icon: '🎮', name: 'E-sport & compétition numérique', description: 'Compétition professionnelle de jeux vidéo.' }
        ]
    },
    {
        id: 21,
        icon: '🚀',
        name: 'Technologies émergentes & futur du travail',
        description: 'Explorez l\'IA, la robotique, le métavers et les nouvelles formes de travail.',
        subUniverses: [
            { icon: '🤖', name: 'Robotique humanoïde avancée', description: 'Conception de robots capables d\'interagir naturellement.' },
            { icon: '🥽', name: 'Technologies immersives nouvelle génération (XR, haptique)', description: 'Interfaces sensorielles et réalités augmentées.' },
            { icon: '🧬', name: 'Biotechnologies avancées & bio-ingénierie', description: 'Innovation à l\'échelle du vivant.' },
            { icon: '🌾', name: 'AgroTech & FoodTech', description: 'Nouvelles technologies pour l\'agriculture et l\'alimentation.' },
            { icon: '🌱', name: 'CleanTech & GreenTech', description: 'Solutions technologiques pour réduire l\'impact écologique.' },
            { icon: '💊', name: 'HealthTech & MedTech', description: 'Dispositifs connectés et innovations médicales.' },
            { icon: '🛸', name: 'SpaceTech & exploration spatiale', description: 'Technologies dédiées à l\'espace et aux satellites.' },
            { icon: '💼', name: 'Économie créative & travail numérique indépendant', description: 'Nouvelles formes de métiers autonomes et digitaux.' }
        ]
    }
];
