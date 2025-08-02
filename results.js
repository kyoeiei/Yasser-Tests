// Load results when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadResults();
});

function loadResults() {
    // Get results from localStorage
    const resultsData = localStorage.getItem('examResults');
    
    if (!resultsData) {
        // No results found, redirect to home
        alert('No exam results found. Please take an exam first.');
        window.location.href = 'index.html';
        return;
    }
    
    try {
        const results = JSON.parse(resultsData);
        displayResults(results);
    } catch (error) {
        console.error('Error loading results:', error);
        alert('Error loading results. Please try again.');
        window.location.href = 'index.html';
    }
}

function displayResults(results) {
    const { score, examType, timeTaken } = results;
    
    // Get exam title based on type
    const examTitles = {
        'pretest': 'Pre-Test Assessment',
        'posttest': 'Post-Test Assessment'
    };
    
    const examTitle = examTitles[examType] || 'Exam';
    
    // Update exam info
    document.getElementById('exam-title').textContent = examTitle;
    document.getElementById('exam-subtitle').textContent = `Completed on ${new Date(results.submittedAt).toLocaleDateString()}`;
    
    // Update score displays
    document.getElementById('score-display').textContent = `${score.correct}/${score.total}`;
    document.getElementById('percentage-display').textContent = `${score.percentage}%`;
    document.getElementById('score-text').textContent = `${score.percentage}%`;
    
    // Update time taken
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    document.getElementById('time-display').textContent = `${minutes}m ${seconds}s`;
    
    // Update status
    const status = getStatus(score.percentage);
    document.getElementById('status-display').textContent = status;
    
    // Update score circle
    updateScoreCircle(score.percentage);
    
    // Update feedback
    updateFeedback(score.percentage);
}

function updateScoreCircle(percentage) {
    const circle = document.getElementById('score-circle');
    const degrees = (percentage / 100) * 360;
    
    // Update the conic gradient
    if (percentage >= 80) {
        circle.style.background = `conic-gradient(#10b981 0deg, #10b981 ${degrees}deg, #e5e7eb ${degrees}deg)`;
    } else if (percentage >= 60) {
        circle.style.background = `conic-gradient(#f59e0b 0deg, #f59e0b ${degrees}deg, #e5e7eb ${degrees}deg)`;
    } else {
        circle.style.background = `conic-gradient(#ef4444 0deg, #ef4444 ${degrees}deg, #e5e7eb ${degrees}deg)`;
    }
}

function getStatus(percentage) {
    if (percentage >= 90) return 'Excellent';
    if (percentage >= 80) return 'Very Good';
    if (percentage >= 70) return 'Good';
    if (percentage >= 60) return 'Satisfactory';
    if (percentage >= 50) return 'Needs Improvement';
    return 'Failed';
}

function updateFeedback(percentage) {
    const feedbackText = document.getElementById('feedback-text');
    let feedback = '';
    
    if (percentage >= 90) {
        feedback = `
            <strong>Excellent Grammar Skills!</strong><br><br>
            Outstanding! You've demonstrated exceptional mastery of English grammar tenses. 
            Your score of ${percentage}% shows excellent understanding of Present Simple, Past Simple, and Future Simple tenses. 
            You're ready for more advanced grammar concepts!
        `;
    } else if (percentage >= 80) {
        feedback = `
            <strong>Very Good Grammar Understanding!</strong><br><br>
            Well done! You've shown strong command of English tenses with a score of ${percentage}%. 
            You have a solid foundation in grammar. Consider practicing the specific tenses 
            where you made mistakes to perfect your skills.
        `;
    } else if (percentage >= 70) {
        feedback = `
            <strong>Good Grammar Foundation!</strong><br><br>
            Good job! Your score of ${percentage}% indicates a good understanding of English tenses. 
            There's room for improvement, so focus on the tenses you found challenging 
            and take the practice tests again to strengthen your skills.
        `;
    } else if (percentage >= 60) {
        feedback = `
            <strong>Satisfactory Grammar Skills</strong><br><br>
            You've achieved a passing score of ${percentage}%. While you understand the basics of English tenses, 
            there are areas that need more practice. We recommend reviewing the grammar rules 
            and taking the practice tests again to improve your understanding.
        `;
    } else if (percentage >= 50) {
        feedback = `
            <strong>Needs More Practice</strong><br><br>
            Your score of ${percentage}% indicates that you need more practice with English grammar tenses. 
            Don't worry - grammar takes time to master! Focus on understanding the basic rules 
            of each tense and practice regularly to improve your skills.
        `;
    } else {
        feedback = `
            <strong>Keep Learning!</strong><br><br>
            Your score of ${percentage}% shows that you need to review the basic grammar concepts. 
            Start with understanding the fundamental differences between Present Simple, Past Simple, and Future Simple tenses. 
            Practice regularly and don't hesitate to review the grammar rules before taking the test again.
        `;
    }
    
    feedbackText.innerHTML = feedback;
}

function shareResults(platform) {
    const resultsData = localStorage.getItem('examResults');
    if (!resultsData) return;
    
    const results = JSON.parse(resultsData);
    const { score, examType } = results;
    
    const examTitles = {
        'pretest': 'Pre-Test Assessment',
        'posttest': 'Post-Test Assessment'
    };
    
    const examTitle = examTitles[examType] || 'Grammar Assessment';
    const message = `I just completed the ${examTitle} and scored ${score.percentage}%! 📚✨`;
    const url = window.location.href;
    
    let shareUrl = '';
    
    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(message)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// Add animation to results card
document.addEventListener('DOMContentLoaded', function() {
    const resultsCard = document.querySelector('.results-card');
    if (resultsCard) {
        resultsCard.style.opacity = '0';
        resultsCard.style.transform = 'translateY(30px)';
        resultsCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            resultsCard.style.opacity = '1';
            resultsCard.style.transform = 'translateY(0)';
        }, 100);
    }
});

// Add confetti effect for high scores
function addConfetti(percentage) {
    if (percentage >= 80) {
        // Simple confetti effect
        const colors = ['#10b981', '#f59e0b', '#3b82f6', '#8b5cf6', '#ef4444'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-10px';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.borderRadius = '50%';
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '9999';
                confetti.style.animation = 'fall 3s linear forwards';
                
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    document.body.removeChild(confetti);
                }, 3000);
            }, i * 100);
        }
        
        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Call confetti for high scores
document.addEventListener('DOMContentLoaded', function() {
    const resultsData = localStorage.getItem('examResults');
    if (resultsData) {
        const results = JSON.parse(resultsData);
        if (results.score.percentage >= 80) {
            setTimeout(() => {
                addConfetti(results.score.percentage);
            }, 1000);
        }
    }
}); 