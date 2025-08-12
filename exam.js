// Global variables
let currentExam = null;
let currentQuestionIndex = 0;
let userAnswers = {};
let examStartTime = null;
let timerInterval = null;
let examDuration = 0;

// Initialize exam
document.addEventListener('DOMContentLoaded', function() {
    loadExam();
    setupEventListeners();
});

function loadExam() {
    // Get exam data from localStorage
    const examData = localStorage.getItem('currentExam');
    const examType = localStorage.getItem('examType');
    
    if (!examData || !examType) {
        alert('No exam data found. Please start an exam from the homepage.');
        window.location.href = 'index.html';
        return;
    }
    
    try {
        currentExam = JSON.parse(examData);
        examStartTime = parseInt(localStorage.getItem('examStartTime')) || Date.now();
        currentQuestionIndex = parseInt(localStorage.getItem('currentQuestion')) || 0;
        userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || {};
        
        // Set exam duration in seconds
        examDuration = currentExam.duration * 60;
        
        // Update UI
        updateExamHeader();
        updateProgress();
        loadQuestion(currentQuestionIndex);
        generateQuestionNavigation();
        startTimer();
        
    } catch (error) {
        console.error('Error loading exam:', error);
        alert('Error loading exam. Please try again.');
        window.location.href = 'index.html';
    }
}

function updateExamHeader() {
    document.getElementById('exam-title').textContent = currentExam.title;
    document.getElementById('exam-subtitle').textContent = `Duration: ${currentExam.duration} minutes | Questions: ${currentExam.questions.length}`;
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentExam.questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('current-question-number').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = currentExam.questions.length;
}

function loadQuestion(index) {
    if (index < 0 || index >= currentExam.questions.length) {
        return;
    }
    
    const question = currentExam.questions[index];
    document.getElementById('question-text').textContent = question.question;
    
    // Load options
    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = '';
    
    question.options.forEach((option, optionIndex) => {
        const optionItem = document.createElement('div');
        optionItem.className = 'option-item';
        optionItem.onclick = () => selectOption(optionIndex);
        
        const radio = document.createElement('div');
        radio.className = 'option-radio';
        
        const optionText = document.createElement('span');
        optionText.textContent = option;
        
        optionItem.appendChild(radio);
        optionItem.appendChild(optionText);
        optionsList.appendChild(optionItem);
        
        // Check if this option was previously selected
        if (userAnswers[index] === optionIndex) {
            optionItem.classList.add('selected');
        }
    });
    
    // Update navigation buttons
    updateNavigationButtons();
}

function selectOption(optionIndex) {
    // Remove previous selection
    const options = document.querySelectorAll('.option-item');
    options.forEach(option => option.classList.remove('selected'));
    
    // Select new option
    event.target.closest('.option-item').classList.add('selected');
    
    // Save answer
    userAnswers[currentQuestionIndex] = optionIndex;
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    
    // Update question navigation
    updateQuestionNavigation();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    prevBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
    nextBtn.style.display = currentQuestionIndex === currentExam.questions.length - 1 ? 'none' : 'inline-block';
    submitBtn.style.display = currentQuestionIndex === currentExam.questions.length - 1 ? 'inline-block' : 'none';
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        localStorage.setItem('currentQuestion', currentQuestionIndex);
        loadQuestion(currentQuestionIndex);
        updateProgress();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentExam.questions.length - 1) {
        currentQuestionIndex++;
        localStorage.setItem('currentQuestion', currentQuestionIndex);
        loadQuestion(currentQuestionIndex);
        updateProgress();
    }
}

function generateQuestionNavigation() {
    const navContainer = document.getElementById('question-nav');
    navContainer.innerHTML = '';
    
    currentExam.questions.forEach((question, index) => {
        const navBtn = document.createElement('button');
        navBtn.className = 'nav-btn';
        navBtn.textContent = index + 1;
        navBtn.onclick = () => navigateToQuestion(index);
        navContainer.appendChild(navBtn);
    });
    
    updateQuestionNavigation();
}

function navigateToQuestion(index) {
    currentQuestionIndex = index;
    localStorage.setItem('currentQuestion', currentQuestionIndex);
    loadQuestion(currentQuestionIndex);
    updateProgress();
    updateQuestionNavigation();
}

function updateQuestionNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach((btn, index) => {
        btn.classList.remove('current', 'answered');
        
        if (index === currentQuestionIndex) {
            btn.classList.add('current');
        } else if (userAnswers[index] !== undefined) {
            btn.classList.add('answered');
        }
    });
}

function startTimer() {
    const startTime = examStartTime;
    const duration = examDuration;
    
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const remaining = Math.max(0, duration - elapsed);
        
        document.getElementById('time-display').textContent = formatTime(remaining);
        
        if (remaining <= 0) {
            clearInterval(timerInterval);
            alert('Time is up! Your exam will be submitted automatically.');
            submitExam();
        }
        
        // Warning when 5 minutes remaining
        if (remaining === 300) {
            alert('Warning: 5 minutes remaining!');
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function submitExam() {
    const answeredQuestions = Object.keys(userAnswers).length;
    const totalQuestions = currentExam.questions.length;
    
    if (answeredQuestions < totalQuestions) {
        const confirmSubmit = confirm(`You have answered ${answeredQuestions} out of ${totalQuestions} questions. Are you sure you want to submit?`);
        if (!confirmSubmit) {
            return;
        }
    }
    
    // Show confirmation modal
    document.getElementById('confirm-modal').style.display = 'block';
}

function closeConfirmModal() {
    document.getElementById('confirm-modal').style.display = 'none';
}

function confirmSubmit() {
    // Stop timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // Calculate score
    const score = calculateScore();
    
    // Store results including the questions used so we can show a detailed review
    localStorage.setItem('examResults', JSON.stringify({
        examType: localStorage.getItem('examType'),
        score: score,
        answers: userAnswers,
        questions: currentExam ? currentExam.questions : [],
        timeTaken: Math.floor((Date.now() - examStartTime) / 1000),
        submittedAt: new Date().toISOString()
    }));
    
    // Clear exam data
    localStorage.removeItem('currentExam');
    localStorage.removeItem('examType');
    localStorage.removeItem('examStartTime');
    localStorage.removeItem('currentQuestion');
    localStorage.removeItem('userAnswers');
    
    // Redirect to results page
    window.location.href = 'results.html';
}

function calculateScore() {
    let correct = 0;
    const total = currentExam.questions.length;
    
    currentExam.questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correct++;
        }
    });
    
    return {
        correct: correct,
        total: total,
        percentage: Math.round((correct / total) * 100)
    };
}

function setupEventListeners() {
    // Prevent page refresh/back during exam
    window.addEventListener('beforeunload', function(e) {
        e.preventDefault();
        e.returnValue = 'Are you sure you want to leave? Your progress will be lost.';
        return 'Are you sure you want to leave? Your progress will be lost.';
    });
    
    // Prevent back button
    window.addEventListener('popstate', function(e) {
        history.pushState(null, null, window.location.href);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case 'ArrowLeft':
                if (currentQuestionIndex > 0) {
                    previousQuestion();
                }
                break;
            case 'ArrowRight':
                if (currentQuestionIndex < currentExam.questions.length - 1) {
                    nextQuestion();
                }
                break;
            case '1':
            case '2':
            case '3':
            case '4':
                const optionIndex = parseInt(e.key) - 1;
                if (optionIndex >= 0 && optionIndex < 4) {
                    selectOption(optionIndex);
                }
                break;
        }
    });
}

// Auto-save progress every 30 seconds
setInterval(() => {
    if (currentExam) {
        localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
        localStorage.setItem('currentQuestion', currentQuestionIndex);
    }
}, 30000); 