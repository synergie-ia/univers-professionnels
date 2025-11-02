// Données des 21 univers avec leurs descriptions
const universesData = [
    {
        id: 1,
        icon: '🌾',
        name: 'Agriculture, nature & animaux',
        description: 'Cultivez, élevez, protégez la nature et travaillez avec les animaux dans des métiers en plein air.',
        tag: 'Nature'
    },
    {
        id: 2,
        icon: '🎨',
        name: 'Arts, design & création',
        description: 'Créez, dessinez, designez et exprimez votre créativité dans l\'art visuel, graphique ou appliqué.',
        tag: 'Créativité'
    },
    {
        id: 3,
        icon: '🛒',
        name: 'Commerce, marketing & vente',
        description: 'Vendez, négociez, développez des stratégies commerciales et fidélisez les clients.',
        tag: 'Business'
    },
    {
        id: 4,
        icon: '📺',
        name: 'Communication, médias & culture',
        description: 'Informez, divertissez, communiquez à travers les médias, la culture et l\'événementiel.',
        tag: 'Média'
    },
    {
        id: 5,
        icon: '🏗️',
        name: 'Construction, BTP & habitat',
        description: 'Construisez, rénovez, aménagez des bâtiments et infrastructures pour façonner nos villes.',
        tag: 'Bâtiment'
    },
    {
        id: 6,
        icon: '⚖️',
        name: 'Droit, administration & politique publique',
        description: 'Défendez, régulez, administrez dans les domaines juridique et des services publics.',
        tag: 'Juridique'
    },
    {
        id: 7,
        icon: '📚',
        name: 'Éducation, formation & apprentissage',
        description: 'Enseignez, formez, transmettez vos connaissances et accompagnez l\'apprentissage.',
        tag: 'Éducation'
    },
    {
        id: 8,
        icon: '🌱',
        name: 'Environnement, climat & énergies',
        description: 'Protégez la planète, développez les énergies renouvelables et luttez contre le changement climatique.',
        tag: 'Écologie'
    },
    {
        id: 9,
        icon: '💰',
        name: 'Gestion, finance & comptabilité',
        description: 'Gérez, analysez, optimisez les ressources financières et comptables des organisations.',
        tag: 'Finance'
    },
    {
        id: 10,
        icon: '🏨',
        name: 'Hôtellerie, restauration & tourisme',
        description: 'Accueillez, servez, cuisinez et faites découvrir des destinations dans l\'hospitalité.',
        tag: 'Accueil'
    },
    {
        id: 11,
        icon: '🏭',
        name: 'Industrie, fabrication & production',
        description: 'Produisez, assemblez, automatisez dans les usines et chaînes de production modernes.',
        tag: 'Industrie'
    },
    {
        id: 12,
        icon: '🚚',
        name: 'Logistique, transport & mobilité',
        description: 'Transportez, organisez, gérez les flux de marchandises et les déplacements.',
        tag: 'Transport'
    },
    {
        id: 13,
        icon: '📊',
        name: 'Management, entrepreneuriat & stratégie',
        description: 'Dirigez, entreprenez, élaborez des stratégies et pilotez des équipes vers le succès.',
        tag: 'Leadership'
    },
    {
        id: 14,
        icon: '💻',
        name: 'Numérique, informatique & data',
        description: 'Codez, développez, analysez les données et créez les technologies de demain.',
        tag: 'Tech'
    },
    {
        id: 15,
        icon: '🏥',
        name: 'Santé, bien-être & médical',
        description: 'Soignez, accompagnez, prévenez dans les métiers de la santé et du bien-être.',
        tag: 'Santé'
    },
    {
        id: 16,
        icon: '🔬',
        name: 'Sciences, recherche & innovation',
        description: 'Cherchez, expérimentez, innovez pour faire avancer les connaissances scientifiques.',
        tag: 'Science'
    },
    {
        id: 17,
        icon: '🚨',
        name: 'Sécurité, défense & urgence',
        description: 'Protégez, intervenez, sécurisez les personnes et les biens au quotidien.',
        tag: 'Sécurité'
    },
    {
        id: 18,
        icon: '🤝',
        name: 'Social, aide & solidarité',
        description: 'Aidez, accompagnez, soutenez les personnes en difficulté ou en situation de vulnérabilité.',
        tag: 'Social'
    },
    {
        id: 19,
        icon: '⚽',
        name: 'Sport, loisirs & vie active',
        description: 'Entraînez, animez, organisez des activités sportives et de loisirs pour tous.',
        tag: 'Sport'
    },
    {
        id: 20,
        icon: '🚀',
        name: 'Technologies émergentes & futur du travail',
        description: 'Explorez l\'IA, la robotique, le métavers et les nouvelles formes de travail.',
        tag: 'Innovation'
    },
    {
        id: 21,
        icon: '🏘️',
        name: 'Immobilier & patrimoine',
        description: 'Conseillez, gérez, valorisez les biens immobiliers et le patrimoine.',
        tag: 'Immobilier'
    }
];

// Fonction pour générer les cartes d'univers
function renderUniverses() {
    const grid = document.getElementById('universesGrid');
    
    grid.innerHTML = universesData.map(universe => `
        <div class="universe-card" onclick="goToTest()">
            <div class="universe-image">
                ${universe.icon}
            </div>
            <div class="universe-content">
                <div class="universe-name">${universe.name}</div>
                <div class="universe-description">${universe.description}</div>
                <div class="universe-footer">
                    <span class="universe-tag">${universe.tag}</span>
                    <span class="universe-arrow">→</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Fonction pour rediriger vers le test
function goToTest() {
    window.location.href = 'index.html';
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    renderUniverses();
});
