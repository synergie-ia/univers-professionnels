// Stockage des réponses de l'utilisateur
const ratings = {};
let currentResults = [];

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
                    🤔 Un peu moi
                </button>
                <button class="rating-btn level-2" onclick="setRating(${interest.id}, 2)">
                    👍 Plutôt moi
                </button>
                <button class="rating-btn level-3" onclick="setRating(${interest.id}, 3)">
                    ⭐ Totalement moi
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

// Fonction pour créer le profil utilisateur
function createUserProfile() {
    let profile = "📋 MON PROFIL D'INTÉRÊTS\n";
    profile += "=".repeat(50) + "\n\n";
    
    interests.forEach(interest => {
        const rating = ratings[interest.id] || 0;
        const ratingLabels = ['❌ Pas du tout', '🤔 Un peu', '👍 Plutôt', '⭐ Totalement'];
        profile += `${interest.icon} ${interest.title}\n`;
        profile += `   → ${ratingLabels[rating]}\n\n`;
    });
    
    return profile;
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

    // Stocker tous les résultats (21 univers)
    currentResults = results;

    // Affichage des 21 résultats
    displayResults(currentResults);
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

// Fonction pour créer le contenu visuel des résultats
function createVisualResults() {
    const date = new Date().toLocaleDateString('fr-FR');
    let content = "🎯 ORIENTATION 360 IA - RÉSULTATS DU TEST D'ORIENTATION\n";
    content += "Date : " + date + "\n";
    content += "=".repeat(60) + "\n\n";
    
    // Ajout du profil
    content += createUserProfile();
    content += "\n" + "=".repeat(60) + "\n\n";
    
    // Ajout des résultats
    content += "🌐 LES 21 UNIVERS COMPATIBLES\n";
    content += "=".repeat(60) + "\n\n";
    
    currentResults.forEach((result, index) => {
        content += `#${index + 1} ${result.name}\n`;
        content += `   Compatibilité : ${result.percentage.toFixed(1)}%\n`;
        content += `   Score : ${result.score}/${result.maxScore}\n`;
        
        // Barre visuelle de progression
        const barLength = 30;
        const filledLength = Math.round((result.percentage / 100) * barLength);
        const bar = "█".repeat(filledLength) + "░".repeat(barLength - filledLength);
        content += `   [${bar}]\n\n`;
    });
    
    content += "\n" + "=".repeat(60) + "\n";
    content += "Merci d'avoir utilisé Orientation 360 IA !\n";
    content += "L'intelligence artificielle au service de votre orientation professionnelle.";
    
    return content;
}

// Fonction pour télécharger les résultats en PDF
function downloadResults() {
    if (currentResults.length === 0) {
        alert('⚠️ Aucun résultat à télécharger. Veuillez d\'abord passer le test.');
        return;
    }
    
    // Créer une nouvelle fenêtre pour le PDF
    const printWindow = window.open('', '', 'width=800,height=600');
    
    const date = new Date().toLocaleDateString('fr-FR');
    
    // Créer le contenu HTML stylisé pour le PDF
    let htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Résultats Orientation 360 IA</title>
        <style>
            body {
                font-family: 'Segoe UI', Arial, sans-serif;
                background: #f5f7fa;
                padding: 40px;
                margin: 0;
            }
            .header {
                text-align: center;
                margin-bottom: 40px;
                padding-bottom: 20px;
                border-bottom: 3px solid #2c3e50;
            }
            .header h1 {
                color: #2c3e50;
                font-size: 28px;
                margin-bottom: 10px;
            }
            .header p {
                color: #546e7a;
                font-size: 14px;
            }
            .profile-section {
                background: white;
                padding: 30px;
                border-radius: 10px;
                margin-bottom: 30px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .profile-section h2 {
                color: #2c3e50;
                font-size: 20px;
                margin-bottom: 20px;
                border-bottom: 2px solid #ecf0f1;
                padding-bottom: 10px;
            }
            .interest-item {
                margin-bottom: 15px;
                padding: 10px;
                background: #f8f9fa;
                border-radius: 5px;
            }
            .interest-name {
                font-weight: bold;
                color: #2c3e50;
            }
            .interest-rating {
                color: #546e7a;
                margin-left: 20px;
            }
            .results-section {
                background: white;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .results-section h2 {
                color: #2c3e50;
                font-size: 20px;
                margin-bottom: 20px;
                border-bottom: 2px solid #ecf0f1;
                padding-bottom: 10px;
            }
            .result-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px;
                margin-bottom: 10px;
                background: #f8f9fa;
                border-radius: 8px;
                border-left: 4px solid #667eea;
            }
            .result-name {
                flex: 1;
                font-weight: 600;
                color: #2c3e50;
            }
            .result-percentage {
                font-size: 20px;
                font-weight: bold;
                color: #667eea;
                margin-left: 20px;
            }
            .progress-bar {
                width: 200px;
                height: 8px;
                background: #ecf0f1;
                border-radius: 4px;
                overflow: hidden;
                margin: 0 20px;
            }
            .progress-fill {
                height: 100%;
                background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            }
            .footer {
                text-align: center;
                margin-top: 40px;
                padding-top: 20px;
                border-top: 2px solid #ecf0f1;
                color: #546e7a;
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>🎯 ORIENTATION 360 IA</h1>
            <p>Résultats du test d'orientation professionnelle</p>
            <p>Date : ${date}</p>
        </div>
        
        <div class="profile-section">
            <h2>📋 Mon profil d'intérêts</h2>
    `;
    
    // Ajouter le profil
    const ratingLabels = ['❌ Pas du tout', '🤔 Un peu', '👍 Plutôt', '⭐ Totalement'];
    interests.forEach(interest => {
        const rating = ratings[interest.id] || 0;
        htmlContent += `
            <div class="interest-item">
                <span class="interest-name">${interest.icon} ${interest.title}</span>
                <span class="interest-rating">${ratingLabels[rating]}</span>
            </div>
        `;
    });
    
    htmlContent += `
        </div>
        
        <div class="results-section">
            <h2>🌐 Mes 21 univers professionnels classés</h2>
    `;
    
    // Ajouter les résultats
    currentResults.forEach((result, index) => {
        htmlContent += `
            <div class="result-item">
                <span class="result-name">#${index + 1} ${result.name}</span>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${result.percentage}%"></div>
                </div>
                <span class="result-percentage">${result.percentage.toFixed(1)}%</span>
            </div>
        `;
    });
    
    htmlContent += `
        </div>
        
        <div class="footer">
            <p>Merci d'avoir utilisé Orientation 360 IA !</p>
            <p>L'intelligence artificielle au service de votre orientation professionnelle</p>
        </div>
    </body>
    </html>
    `;
    
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    
    // Attendre que le contenu soit chargé avant d'imprimer
    printWindow.onload = function() {
        printWindow.print();
    };
    
    showNotification('📄 Génération du PDF en cours...');
}

// Fonction pour copier les résultats
function copyResults() {
    if (currentResults.length === 0) {
        alert('⚠️ Aucun résultat à copier. Veuillez d\'abord passer le test.');
        return;
    }
    
    const content = createVisualResults();
    
    // Copie dans le presse-papier
    navigator.clipboard.writeText(content).then(() => {
        showNotification('✅ Résultats copiés dans le presse-papier !');
    }).catch(err => {
        alert('❌ Erreur lors de la copie : ' + err);
    });
}

// Fonction pour demander à l'assistant virtuel
function askAssistant() {
    if (currentResults.length === 0) {
        alert('⚠️ Veuillez d\'abord passer le test avant de consulter l\'assistant virtuel.');
        return;
    }
    
    // Cette fonctionnalité sera connectée à un GPT ultérieurement
    alert('🤖 Cette fonctionnalité sera bientôt disponible !\n\nL\'assistant virtuel analysera votre profil complet et vous proposera un diagnostic personnalisé pour votre orientation professionnelle.');
}

// Fonction pour afficher une notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        font-weight: bold;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Ajout des animations CSS pour les notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    renderInterests();
});
