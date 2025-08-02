// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Question Database - 100 questions covering all three simple tenses
const questionDatabase = [
    // Present Simple Tense Questions (1-40)
    {
        id: 1,
        question: "Choose the correct form: 'She _____ to school every day.'",
        options: ["go", "goes", "went", "going"],
        correct: 1,
        tense: "present"
    },
    {
        id: 2,
        question: "Complete: 'They _____ English every day.'",
        options: ["speak", "speaks", "spoke", "speaking"],
        correct: 0,
        tense: "present"
    },
    {
        id: 3,
        question: "What is the correct form for 'he' in present simple?",
        options: ["I work", "You work", "He works", "They work"],
        correct: 2,
        tense: "present"
    },
    {
        id: 4,
        question: "Choose the correct form: 'The train _____ at 9 AM.'",
        options: ["leave", "leaves", "left", "leaving"],
        correct: 1,
        tense: "present"
    },
    {
        id: 5,
        question: "Complete: 'My sister _____ to music.'",
        options: ["listen", "listens", "listened", "listening"],
        correct: 1,
        tense: "present"
    },
    {
        id: 6,
        question: "Which sentence shows a general truth?",
        options: ["I am studying", "The Earth revolves around the Sun", "I studied yesterday", "I will study"],
        correct: 1,
        tense: "present"
    },
    {
        id: 7,
        question: "Choose the correct form: 'We _____ to school by bus.'",
        options: ["go", "goes", "went", "going"],
        correct: 0,
        tense: "present"
    },
    {
        id: 8,
        question: "Complete: 'She _____ her teeth twice a day.'",
        options: ["brush", "brushes", "brushed", "brushing"],
        correct: 1,
        tense: "present"
    },
    {
        id: 9,
        question: "What is the present simple form of 'have' for 'he'?",
        options: ["have", "has", "had", "having"],
        correct: 1,
        tense: "present"
    },
    {
        id: 10,
        question: "Choose the correct form: 'The sun _____ in the west.'",
        options: ["set", "sets", "setted", "setting"],
        correct: 1,
        tense: "present"
    },
    {
        id: 11,
        question: "Complete: 'They _____ in a big house.'",
        options: ["live", "lives", "lived", "living"],
        correct: 0,
        tense: "present"
    },
    {
        id: 12,
        question: "Which sentence shows a regular habit?",
        options: ["I am eating", "I eat breakfast at 8 AM", "I ate breakfast", "I will eat"],
        correct: 1,
        tense: "present"
    },
    {
        id: 13,
        question: "Choose the correct form: 'He _____ to the gym.'",
        options: ["go", "goes", "went", "going"],
        correct: 1,
        tense: "present"
    },
    {
        id: 14,
        question: "Complete: 'My parents _____ in New York.'",
        options: ["work", "works", "worked", "working"],
        correct: 0,
        tense: "present"
    },
    {
        id: 15,
        question: "What is the present simple form of 'do' for 'she'?",
        options: ["do", "does", "did", "doing"],
        correct: 1,
        tense: "present"
    },
    {
        id: 16,
        question: "Choose the correct form: 'Water _____ at 100°C.'",
        options: ["boil", "boils", "boiled", "will boil"],
        correct: 1,
        tense: "present"
    },
    {
        id: 17,
        question: "Complete: 'The movie _____ at 9 PM.'",
        options: ["start", "starts", "started", "starting"],
        correct: 1,
        tense: "present"
    },
    {
        id: 18,
        question: "Which sentence uses present simple for a fact?",
        options: ["I am reading", "Birds fly", "I read yesterday", "I will read"],
        correct: 1,
        tense: "present"
    },
    {
        id: 19,
        question: "Choose the correct form: 'She _____ her homework.'",
        options: ["finish", "finishes", "finished", "finishing"],
        correct: 1,
        tense: "present"
    },
    {
        id: 20,
        question: "Complete: 'The bus _____ every 15 minutes.'",
        options: ["come", "comes", "came", "coming"],
        correct: 1,
        tense: "present"
    },
    {
        id: 21,
        question: "What is the present simple form of 'be' for 'they'?",
        options: ["am", "are", "is", "be"],
        correct: 1,
        tense: "present"
    },
    {
        id: 22,
        question: "Choose the correct form: 'He _____ in London.'",
        options: ["live", "lives", "lived", "living"],
        correct: 1,
        tense: "present"
    },
    {
        id: 23,
        question: "Complete: 'The children _____ in the park.'",
        options: ["play", "plays", "played", "playing"],
        correct: 0,
        tense: "present"
    },
    {
        id: 24,
        question: "Which sentence shows a scheduled event?",
        options: ["I am working", "The train leaves at 3 PM", "I worked", "I will work"],
        correct: 1,
        tense: "present"
    },
    {
        id: 25,
        question: "Choose the correct form: 'She _____ coffee every morning.'",
        options: ["drink", "drinks", "drank", "drinking"],
        correct: 1,
        tense: "present"
    },
    {
        id: 26,
        question: "Complete: 'The library _____ at 6 PM.'",
        options: ["close", "closes", "closed", "closing"],
        correct: 1,
        tense: "present"
    },
    {
        id: 27,
        question: "What is the present simple form of 'study' for 'I'?",
        options: ["study", "studies", "studied", "studying"],
        correct: 0,
        tense: "present"
    },
    {
        id: 28,
        question: "Choose the correct form: 'They _____ football.'",
        options: ["like", "likes", "liked", "liking"],
        correct: 0,
        tense: "present"
    },
    {
        id: 29,
        question: "Complete: 'The shop _____ on Sundays.'",
        options: ["open", "opens", "opened", "opening"],
        correct: 1,
        tense: "present"
    },
    {
        id: 30,
        question: "Which sentence uses present simple for a routine?",
        options: ["I am cooking", "I cook dinner every day", "I cooked", "I will cook"],
        correct: 1,
        tense: "present"
    },
    {
        id: 31,
        question: "Choose the correct form: 'He _____ his car.'",
        options: ["wash", "washes", "washed", "washing"],
        correct: 1,
        tense: "present"
    },
    {
        id: 32,
        question: "Complete: 'The students _____ hard.'",
        options: ["work", "works", "worked", "working"],
        correct: 0,
        tense: "present"
    },
    {
        id: 33,
        question: "What is the present simple form of 'write' for 'she'?",
        options: ["write", "writes", "wrote", "writing"],
        correct: 1,
        tense: "present"
    },
    {
        id: 34,
        question: "Choose the correct form: 'The meeting _____ at 2 PM.'",
        options: ["begin", "begins", "began", "beginning"],
        correct: 1,
        tense: "present"
    },
    {
        id: 35,
        question: "Complete: 'She _____ to music.'",
        options: ["listen", "listens", "listened", "listening"],
        correct: 1,
        tense: "present"
    },
    {
        id: 36,
        question: "Which sentence shows a permanent situation?",
        options: ["I am living", "I live in Paris", "I lived", "I will live"],
        correct: 1,
        tense: "present"
    },
    {
        id: 37,
        question: "Choose the correct form: 'They _____ to the cinema.'",
        options: ["go", "goes", "went", "going"],
        correct: 0,
        tense: "present"
    },
    {
        id: 38,
        question: "Complete: 'The phone _____ at night.'",
        options: ["ring", "rings", "rang", "ringing"],
        correct: 1,
        tense: "present"
    },
    {
        id: 39,
        question: "What is the present simple form of 'read' for 'he'?",
        options: ["read", "reads", "readed", "reading"],
        correct: 1,
        tense: "present"
    },
    {
        id: 40,
        question: "Choose the correct form: 'The lesson _____ at 9 AM.'",
        options: ["start", "starts", "started", "starting"],
        correct: 1,
        tense: "present"
    },

    // Past Simple Tense Questions (41-70)
    {
        id: 41,
        question: "Choose the correct past form: 'She _____ to the store yesterday.'",
        options: ["go", "goes", "went", "gone"],
        correct: 2,
        tense: "past"
    },
    {
        id: 42,
        question: "Complete: 'They _____ dinner at 8 PM.'",
        options: ["have", "has", "had", "having"],
        correct: 2,
        tense: "past"
    },
    {
        id: 43,
        question: "What is the past simple form of 'see'?",
        options: ["sees", "saw", "seen", "seeing"],
        correct: 1,
        tense: "past"
    },
    {
        id: 44,
        question: "Choose the correct past form: 'He _____ his keys.'",
        options: ["lose", "loses", "lost", "losing"],
        correct: 2,
        tense: "past"
    },
    {
        id: 45,
        question: "Complete: 'We _____ the movie last night.'",
        options: ["watch", "watches", "watched", "watching"],
        correct: 2,
        tense: "past"
    },
    {
        id: 46,
        question: "Which sentence uses past simple for a completed action?",
        options: ["I am working", "I work", "I worked yesterday", "I will work"],
        correct: 2,
        tense: "past"
    },
    {
        id: 47,
        question: "Choose the correct past form: 'She _____ to Paris.'",
        options: ["go", "goes", "went", "gone"],
        correct: 2,
        tense: "past"
    },
    {
        id: 48,
        question: "Complete: 'They _____ football yesterday.'",
        options: ["play", "plays", "played", "playing"],
        correct: 2,
        tense: "past"
    },
    {
        id: 49,
        question: "What is the past simple form of 'write'?",
        options: ["writes", "wrote", "written", "writing"],
        correct: 1,
        tense: "past"
    },
    {
        id: 50,
        question: "Choose the correct past form: 'The train _____ late.'",
        options: ["arrive", "arrives", "arrived", "arriving"],
        correct: 2,
        tense: "past"
    },
    {
        id: 51,
        question: "Complete: 'I _____ my homework.'",
        options: ["finish", "finishes", "finished", "finishing"],
        correct: 2,
        tense: "past"
    },
    {
        id: 52,
        question: "Which sentence shows a past completed action?",
        options: ["I am reading", "I read books", "I read a book yesterday", "I will read"],
        correct: 2,
        tense: "past"
    },
    {
        id: 53,
        question: "Choose the correct past form: 'He _____ the letter.'",
        options: ["send", "sends", "sent", "sending"],
        correct: 2,
        tense: "past"
    },
    {
        id: 54,
        question: "Complete: 'She _____ her phone.'",
        options: ["break", "breaks", "broke", "breaking"],
        correct: 2,
        tense: "past"
    },
    {
        id: 55,
        question: "What is the past simple form of 'take'?",
        options: ["takes", "took", "taken", "taking"],
        correct: 1,
        tense: "past"
    },
    {
        id: 56,
        question: "Choose the correct past form: 'They _____ the project.'",
        options: ["complete", "completes", "completed", "completing"],
        correct: 2,
        tense: "past"
    },
    {
        id: 57,
        question: "Complete: 'The meeting _____ at 3 PM.'",
        options: ["start", "starts", "started", "starting"],
        correct: 2,
        tense: "past"
    },
    {
        id: 58,
        question: "Which sentence uses past simple for a specific time?",
        options: ["I am eating", "I eat lunch", "I ate lunch at noon", "I will eat"],
        correct: 2,
        tense: "past"
    },
    {
        id: 59,
        question: "Choose the correct past form: 'She _____ the exam.'",
        options: ["pass", "passes", "passed", "passing"],
        correct: 2,
        tense: "past"
    },
    {
        id: 60,
        question: "Complete: 'We _____ to the party.'",
        options: ["go", "goes", "went", "going"],
        correct: 2,
        tense: "past"
    },
    {
        id: 61,
        question: "What is the past simple form of 'come'?",
        options: ["comes", "came", "come", "coming"],
        correct: 1,
        tense: "past"
    },
    {
        id: 62,
        question: "Choose the correct past form: 'He _____ his car.'",
        options: ["sell", "sells", "sold", "selling"],
        correct: 2,
        tense: "past"
    },
    {
        id: 63,
        question: "Complete: 'The movie _____ at 9 PM.'",
        options: ["begin", "begins", "began", "beginning"],
        correct: 2,
        tense: "past"
    },
    {
        id: 64,
        question: "Which sentence shows a past event?",
        options: ["I am studying", "I study", "I studied last night", "I will study"],
        correct: 2,
        tense: "past"
    },
    {
        id: 65,
        question: "Choose the correct past form: 'They _____ the game.'",
        options: ["win", "wins", "won", "winning"],
        correct: 2,
        tense: "past"
    },
    {
        id: 66,
        question: "Complete: 'She _____ her keys.'",
        options: ["find", "finds", "found", "finding"],
        correct: 2,
        tense: "past"
    },
    {
        id: 67,
        question: "What is the past simple form of 'give'?",
        options: ["gives", "gave", "given", "giving"],
        correct: 1,
        tense: "past"
    },
    {
        id: 68,
        question: "Choose the correct past form: 'The bus _____ late.'",
        options: ["arrive", "arrives", "arrived", "arriving"],
        correct: 2,
        tense: "past"
    },
    {
        id: 69,
        question: "Complete: 'I _____ the book.'",
        options: ["read", "reads", "read", "reading"],
        correct: 2,
        tense: "past"
    },
    {
        id: 70,
        question: "Which sentence uses past simple for a finished action?",
        options: ["I am cooking", "I cook", "I cooked dinner", "I will cook"],
        correct: 2,
        tense: "past"
    },

    // Future Simple Tense Questions (71-100)
    {
        id: 71,
        question: "Choose the correct future form: 'I _____ to the party.'",
        options: ["go", "goes", "went", "will go"],
        correct: 3,
        tense: "future"
    },
    {
        id: 72,
        question: "Complete: 'She _____ dinner at 8 PM.'",
        options: ["cook", "cooks", "cooked", "will cook"],
        correct: 3,
        tense: "future"
    },
    {
        id: 73,
        question: "What is the future simple form of 'come'?",
        options: ["comes", "came", "will come", "coming"],
        correct: 2,
        tense: "future"
    },
    {
        id: 74,
        question: "Choose the correct future form: 'They _____ the meeting.'",
        options: ["attend", "attends", "attended", "will attend"],
        correct: 3,
        tense: "future"
    },
    {
        id: 75,
        question: "Complete: 'We _____ to Paris next summer.'",
        options: ["travel", "travels", "traveled", "will travel"],
        correct: 3,
        tense: "future"
    },
    {
        id: 76,
        question: "Which sentence uses future simple for a planned action?",
        options: ["I am going", "I go", "I went", "I will go"],
        correct: 3,
        tense: "future"
    },
    {
        id: 77,
        question: "Choose the correct future form: 'He _____ the exam.'",
        options: ["pass", "passes", "passed", "will pass"],
        correct: 3,
        tense: "future"
    },
    {
        id: 78,
        question: "Complete: 'The train _____ at 10 AM.'",
        options: ["leave", "leaves", "left", "will leave"],
        correct: 3,
        tense: "future"
    },
    {
        id: 79,
        question: "What is the future simple form of 'be'?",
        options: ["am", "are", "is", "will be"],
        correct: 3,
        tense: "future"
    },
    {
        id: 80,
        question: "Choose the correct future form: 'She _____ her homework.'",
        options: ["finish", "finishes", "finished", "will finish"],
        correct: 3,
        tense: "future"
    },
    {
        id: 81,
        question: "Complete: 'They _____ the project.'",
        options: ["complete", "completes", "completed", "will complete"],
        correct: 3,
        tense: "future"
    },
    {
        id: 82,
        question: "Which sentence shows a future intention?",
        options: ["I am working", "I work", "I worked", "I will work"],
        correct: 3,
        tense: "future"
    },
    {
        id: 83,
        question: "Choose the correct future form: 'We _____ dinner.'",
        options: ["have", "has", "had", "will have"],
        correct: 3,
        tense: "future"
    },
    {
        id: 84,
        question: "Complete: 'The movie _____ at 9 PM.'",
        options: ["start", "starts", "started", "will start"],
        correct: 3,
        tense: "future"
    },
    {
        id: 85,
        question: "What is the future simple form of 'do'?",
        options: ["do", "does", "did", "will do"],
        correct: 3,
        tense: "future"
    },
    {
        id: 86,
        question: "Choose the correct future form: 'He _____ the letter.'",
        options: ["write", "writes", "wrote", "will write"],
        correct: 3,
        tense: "future"
    },
    {
        id: 87,
        question: "Complete: 'She _____ to the store.'",
        options: ["go", "goes", "went", "will go"],
        correct: 3,
        tense: "future"
    },
    {
        id: 88,
        question: "Which sentence uses future simple for a prediction?",
        options: ["I am studying", "I study", "I studied", "I will study"],
        correct: 3,
        tense: "future"
    },
    {
        id: 89,
        question: "Choose the correct future form: 'They _____ the game.'",
        options: ["win", "wins", "won", "will win"],
        correct: 3,
        tense: "future"
    },
    {
        id: 90,
        question: "Complete: 'The meeting _____ at 2 PM.'",
        options: ["begin", "begins", "began", "will begin"],
        correct: 3,
        tense: "future"
    },
    {
        id: 91,
        question: "What is the future simple form of 'see'?",
        options: ["sees", "saw", "seen", "will see"],
        correct: 3,
        tense: "future"
    },
    {
        id: 92,
        question: "Choose the correct future form: 'I _____ you tomorrow.'",
        options: ["call", "calls", "called", "will call"],
        correct: 3,
        tense: "future"
    },
    {
        id: 93,
        question: "Complete: 'The bus _____ at 8 AM.'",
        options: ["arrive", "arrives", "arrived", "will arrive"],
        correct: 3,
        tense: "future"
    },
    {
        id: 94,
        question: "Which sentence shows a future plan?",
        options: ["I am cooking", "I cook", "I cooked", "I will cook"],
        correct: 3,
        tense: "future"
    },
    {
        id: 95,
        question: "Choose the correct future form: 'She _____ the exam.'",
        options: ["take", "takes", "took", "will take"],
        correct: 3,
        tense: "future"
    },
    {
        id: 96,
        question: "Complete: 'We _____ to the cinema.'",
        options: ["go", "goes", "went", "will go"],
        correct: 3,
        tense: "future"
    },
    {
        id: 97,
        question: "What is the future simple form of 'help'?",
        options: ["helps", "helped", "help", "will help"],
        correct: 3,
        tense: "future"
    },
    {
        id: 98,
        question: "Choose the correct future form: 'The party _____ at 7 PM.'",
        options: ["start", "starts", "started", "will start"],
        correct: 3,
        tense: "future"
    },
    {
        id: 99,
        question: "Complete: 'They _____ the work.'",
        options: ["finish", "finishes", "finished", "will finish"],
        correct: 3,
        tense: "future"
    },
    {
        id: 100,
        question: "Which sentence uses future simple for a scheduled event?",
        options: ["I am working", "I work", "I worked", "The train will leave at 3 PM"],
        correct: 3,
        tense: "future"
    }
];

// Function to randomly select 20 questions from the database
function selectRandomQuestions(count = 20) {
    const shuffled = [...questionDatabase].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Exam Data - Pre-Test and Post-Test with randomly selected questions
const examData = {
    pretest: {
        title: "Pre-Test Assessment",
        duration: 30,
        questions: selectRandomQuestions(20)
    },
    posttest: {
        title: "Post-Test Assessment", 
        duration: 30,
        questions: selectRandomQuestions(20)
    }
};

// Start Exam Function
function startExam(examType) {
    const exam = examData[examType];
    if (!exam) {
        alert('Assessment not found!');
        return;
    }

    // Store exam data in localStorage
    localStorage.setItem('currentExam', JSON.stringify(exam));
    localStorage.setItem('examType', examType);
    localStorage.setItem('examStartTime', Date.now());
    localStorage.setItem('currentQuestion', 0);
    localStorage.setItem('userAnswers', JSON.stringify({}));

    // Redirect to exam page
    window.location.href = 'exam.html';
}

// Form Submission Handlers
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.exam-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Utility Functions
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function calculateScore(answers, questions) {
    let correct = 0;
    questions.forEach((question, index) => {
        if (answers[index] === question.correct) {
            correct++;
        }
    });
    return {
        correct: correct,
        total: questions.length,
        percentage: Math.round((correct / questions.length) * 100)
    };
}

// Export functions for use in other files
window.examData = examData;
window.startExam = startExam;
window.formatTime = formatTime;
window.calculateScore = calculateScore; 