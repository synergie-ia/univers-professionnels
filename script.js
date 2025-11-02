// Stockage des réponses de l'utilisateur
const ratings = {};

// Fonction d'initialisation au chargement de la page
function renderInterests() {
    const container = document.getElementById('interestsList');
    container.innerHTML = interests.map(interest => `
        <div class="interest-card">
            <div class="interest-header">
                <div class="interest-icon">${interest.icon}</div>
                <div class="interest-title">
                    <h3>${interest.title}</h3>
                    <div class="interest-verbs">${interest.verbs}</div>
                </div>
            </div>
            <div class="interest-description">${interest.description}</div>
            <div class="rating-buttons">
                <button class="rating-btn level-0" onclick="setRating(${interest.id}, 0)">
                    ❌ Pas du tout moi
                </button>
                <button class="rating-btn level-1" onclick="setRating(${interest.id}, 1)">
                    ⚪ Un peu moi
                </button>
                <button class="rating-btn level-2" onclick="setRating(${interest.id}, 2)">
                    🟡 Plutôt moi
                </button>
                <button class="rating-btn level-3" onclick="setRating(${interest.id}, 3)">
                    🟢 Totalement moi
                </button>
            </div>
        </div>
    `).join('');
}

// Fonction appelée quand l'utilisateur clique sur un bouton de notation
function setRating(interestId, value) {
    ratings[interestId] = value;
    
    // Mise à jour visuelle du bouton sélectionné
    const card = event.target.closest('.interest-card');
    const buttons = card.querySelectorAll('.rating-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    event.target.classList.add('selected');
    
    // Mise à jour de la barre de progression
    updateProgress();
}

// Fonction pour mettre à jour la barre de progression
function updateProgress() {
    const totalAnswered = Object.keys(ratings).length;
    const percentage = (totalAnswered / interests.length) * 100;
    document.getElementById('progressBar').style.width = percentage + '%';
}

// Fonction principale de calcul des résultats
function calculateResults() {
    // Vérifier que toutes les questions ont été répondues
    if (Object.keys(ratings).length < interests.length) {
        alert('⚠️ Veuillez répondre à toutes les questions avant de calculer vos résultats.');
        return;
    }

    // Calcul du score pour chaque univers
    const results = universes.map(universe => {
        let score = 0;
        let maxScore = 0;
        
        // Pour chaque intérêt (12 au total)
        universe.weights.forEach((weight, index) => {
            const interestId = index + 1;
            const userRating = ratings[interestId] || 0;
            
            // Score = somme des (note utilisateur × poids univers)
            score += userRating * weight;
            
            // Score max = somme des poids × 3 (note max possible)
            maxScore += weight * 3;
        });
        
        // Calcul du pourcentage de compatibilité
        const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
        
        return {
            name: universe.name,
            score: score,
            maxScore: maxScore,
            percentage: percentage
        };
    });

    // Tri des résultats par pourcentage décroissant
    results.sort((a, b) => b.percentage - a.percentage);

    // Affichage du top 10
    displayResults(results.slice(0, 10));
}

// Fonction d'affichage des résultats
function displayResults(results) {
    const container = document.getElementById('resultsList');
    
    container.innerHTML = results.map((result, index) => `
        <div class="result-card">
            <div class="result-info">
                <div class="result-title">#${index + 1} ${result.name}</div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${result.percentage}%"></div>
                </div>
            </div>
            <div class="result-score">${result.percentage.toFixed(1)}%</div>
        </div>
    `).join('');

    // Affichage de la section résultats avec animation
    const resultsSection = document.getElementById('results');
    resultsSection.classList.add('show');
    
    // Scroll automatique vers les résultats
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    renderInterests();
});
