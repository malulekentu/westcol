import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { 
  BookOpen, 
  Calculator, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  RotateCcw,
  BarChart3
} from 'lucide-react';

const PreEntryAssessment = () => {
  const [currentTest, setCurrentTest] = useState('literacy'); // 'literacy' or 'numeracy'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [results, setResults] = useState(null);
  const [isTestActive, setIsTestActive] = useState(false);

  const testDuration = 30; // 30 minutes per test

  const literacyQuestions = [
    {
      id: 1,
      question: "Read the following passage and answer the question:\n\n'The rapid advancement of technology has transformed the way we communicate, work, and learn. Digital tools have made information more accessible than ever before, but they have also created new challenges in terms of privacy and digital literacy.'\n\nWhat is the main topic of this passage?",
      options: [
        "The history of technology",
        "The impact of technology on society",
        "Digital privacy concerns",
        "The benefits of digital tools"
      ],
      correct: 1,
      explanation: "The passage discusses how technology has changed communication, work, and learning, making it about the impact of technology on society."
    },
    {
      id: 2,
      question: "Which word best completes this sentence?\n\n'The student's performance in the assessment was __________, showing significant improvement over the previous term.'",
      options: [
        "disappointing",
        "remarkable",
        "average",
        "concerning"
      ],
      correct: 1,
      explanation: "The context suggests improvement, so 'remarkable' fits best as it indicates something worthy of attention."
    },
    {
      id: 3,
      question: "What is the meaning of the word 'comprehensive' in this context?\n\n'The college offers a comprehensive program that covers all aspects of technical education.'",
      options: [
        "Expensive",
        "Complete or thorough",
        "Difficult",
        "Short-term"
      ],
      correct: 1,
      explanation: "Comprehensive means complete or thorough, covering all aspects of something."
    },
    {
      id: 4,
      question: "Identify the main idea in this paragraph:\n\n'Many students struggle with time management when they start college. They often find themselves overwhelmed by assignments, social activities, and part-time work. Learning to prioritize tasks and create a study schedule can help students succeed academically while maintaining a healthy work-life balance.'",
      options: [
        "Students should avoid part-time work",
        "Time management is important for college success",
        "Social activities are distracting",
        "Assignments are too difficult"
      ],
      correct: 1,
      explanation: "The paragraph focuses on the importance of time management skills for college students."
    },
    {
      id: 5,
      question: "What type of text is this?\n\n'To bake a chocolate cake, first preheat your oven to 350°F. Mix the dry ingredients in a large bowl, then add the wet ingredients. Pour the batter into a greased pan and bake for 25-30 minutes.'",
      options: [
        "Narrative",
        "Descriptive",
        "Instructional",
        "Persuasive"
      ],
      correct: 2,
      explanation: "This is instructional text as it provides step-by-step directions for baking a cake."
    }
  ];

  const numeracyQuestions = [
    {
      id: 1,
      question: "A student needs to buy textbooks for 4 courses. Each textbook costs R450. How much will the student spend in total?",
      options: [
        "R1,600",
        "R1,800",
        "R1,900",
        "R2,000"
      ],
      correct: 1,
      explanation: "4 textbooks × R450 = R1,800"
    },
    {
      id: 2,
      question: "If a class has 30 students and 60% of them are female, how many female students are in the class?",
      options: [
        "15",
        "18",
        "20",
        "24"
      ],
      correct: 1,
      explanation: "60% of 30 = 0.6 × 30 = 18 female students"
    },
    {
      id: 3,
      question: "A rectangle has a length of 12 cm and a width of 8 cm. What is its area?",
      options: [
        "40 cm²",
        "80 cm²",
        "96 cm²",
        "100 cm²"
      ],
      correct: 2,
      explanation: "Area = length × width = 12 × 8 = 96 cm²"
    },
    {
      id: 4,
      question: "If 2x + 5 = 17, what is the value of x?",
      options: [
        "4",
        "5",
        "6",
        "7"
      ],
      correct: 2,
      explanation: "2x + 5 = 17, so 2x = 12, therefore x = 6"
    },
    {
      id: 5,
      question: "A student's test scores are: 85, 92, 78, 96, 89. What is the average score?",
      options: [
        "86",
        "88",
        "90",
        "92"
      ],
      correct: 1,
      explanation: "Average = (85 + 92 + 78 + 96 + 89) ÷ 5 = 440 ÷ 5 = 88"
    }
  ];

  const currentQuestions = currentTest === 'literacy' ? literacyQuestions : numeracyQuestions;

  useEffect(() => {
    let timer;
    if (isTestActive && timeRemaining > 0) {
      timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    } else if (timeRemaining === 0 && isTestActive) {
      handleTestComplete();
    }
    return () => clearTimeout(timer);
  }, [timeRemaining, isTestActive]);

  const startTest = (testType) => {
    setCurrentTest(testType);
    setCurrentQuestion(0);
    setAnswers({});
    setTimeRemaining(testDuration * 60); // Convert to seconds
    setIsTestActive(true);
    setIsCompleted(false);
    setResults(null);
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    setAnswers({
      ...answers,
      [questionId]: answerIndex
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleTestComplete();
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleTestComplete = () => {
    setIsTestActive(false);
    setIsCompleted(true);
    
    const score = calculateScore();
    const results = {
      testType: currentTest,
      score: score,
      totalQuestions: currentQuestions.length,
      percentage: Math.round((score / currentQuestions.length) * 100),
      answers: answers,
      questions: currentQuestions,
      timeSpent: (testDuration * 60) - timeRemaining
    };
    
    setResults(results);
    
    // Save results to localStorage
    const existingResults = JSON.parse(localStorage.getItem('preEntryResults') || '{}');
    existingResults[currentTest] = results;
    localStorage.setItem('preEntryResults', JSON.stringify(existingResults));
    
    toast.success(`${currentTest.charAt(0).toUpperCase() + currentTest.slice(1)} assessment completed!`);
  };

  const calculateScore = () => {
    let score = 0;
    currentQuestions.forEach(question => {
      if (answers[question.id] === question.correct) {
        score++;
      }
    });
    return score;
  };

  const resetAssessment = () => {
    setCurrentTest('literacy');
    setCurrentQuestion(0);
    setAnswers({});
    setTimeRemaining(0);
    setIsCompleted(false);
    setResults(null);
    setIsTestActive(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getScoreLevel = (percentage) => {
    if (percentage >= 80) return { level: 'Excellent', color: '#28a745' };
    if (percentage >= 70) return { level: 'Good', color: '#17a2b8' };
    if (percentage >= 60) return { level: 'Satisfactory', color: '#ffc107' };
    if (percentage >= 50) return { level: 'Needs Improvement', color: '#fd7e14' };
    return { level: 'Requires Support', color: '#dc3545' };
  };

  if (isCompleted && results) {
    const scoreLevel = getScoreLevel(results.percentage);
    
    return (
      <div className="pre-entry-assessment">
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">
              <CheckCircle className="mr-2" size={32} color={scoreLevel.color} />
              {results.testType.charAt(0).toUpperCase() + results.testType.slice(1)} Assessment Results
            </h1>
            <p>Assessment completed successfully</p>
          </div>
        </div>

        <div className="grid grid-2">
          <div className="card">
            <h2 className="card-title">Score Summary</h2>
            <div className="score-summary">
              <div className="score-circle">
                <div className="score-percentage" style={{ color: scoreLevel.color }}>
                  {results.percentage}%
                </div>
                <div className="score-level" style={{ color: scoreLevel.color }}>
                  {scoreLevel.level}
                </div>
              </div>
              <div className="score-details">
                <div className="score-item">
                  <strong>Correct Answers:</strong> {results.score}/{results.totalQuestions}
                </div>
                <div className="score-item">
                  <strong>Time Spent:</strong> {formatTime(results.timeSpent)}
                </div>
                <div className="score-item">
                  <strong>Test Type:</strong> {results.testType.charAt(0).toUpperCase() + results.testType.slice(1)}
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-title">Recommendations</h2>
            <div className="recommendations">
              {results.percentage >= 70 ? (
                <div className="recommendation-item success">
                  <CheckCircle size={20} color="#28a745" />
                  <div>
                    <h4>Ready for Placement Tests</h4>
                    <p>Your {results.testType} skills are strong. You can proceed to the placement tests.</p>
                  </div>
                </div>
              ) : (
                <div className="recommendation-item warning">
                  <AlertCircle size={20} color="#ffc107" />
                  <div>
                    <h4>Additional Support Recommended</h4>
                    <p>Consider taking {results.testType} support programs before placement tests.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Question Review</h2>
          <div className="question-review">
            {results.questions.map((question, index) => {
              const userAnswer = results.answers[question.id];
              const isCorrect = userAnswer === question.correct;
              
              return (
                <div key={question.id} className={`review-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                  <div className="review-question">
                    <h4>Question {index + 1}</h4>
                    <p>{question.question}</p>
                  </div>
                  <div className="review-answer">
                    <div className="answer-section">
                      <strong>Your Answer:</strong> {question.options[userAnswer] || 'Not answered'}
                    </div>
                    <div className="answer-section">
                      <strong>Correct Answer:</strong> {question.options[question.correct]}
                    </div>
                    <div className="answer-section">
                      <strong>Explanation:</strong> {question.explanation}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card text-center">
          <button onClick={resetAssessment} className="btn btn-secondary mr-3">
            <RotateCcw className="mr-2" size={20} />
            Retake Assessment
          </button>
          <button className="btn btn-primary">
            Continue to Placement Tests
          </button>
        </div>
      </div>
    );
  }

  if (isTestActive) {
    const currentQ = currentQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / currentQuestions.length) * 100;
    
    return (
      <div className="pre-entry-assessment">
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">
              <BookOpen className="mr-2" size={32} />
              {currentTest.charAt(0).toUpperCase() + currentTest.slice(1)} Assessment
            </h1>
            <div className="test-info">
              <div className="test-timer">
                <Clock size={20} />
                <span>Time Remaining: {formatTime(timeRemaining)}</span>
              </div>
              <div className="test-progress">
                <span>Question {currentQuestion + 1} of {currentQuestions.length}</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="question-container">
            <h2 className="question-title">Question {currentQuestion + 1}</h2>
            <div className="question-text">
              {currentQ.question.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            
            <div className="options-container">
              {currentQ.options.map((option, index) => (
                <label key={index} className="option-label">
                  <input
                    type="radio"
                    name={`question_${currentQ.id}`}
                    checked={answers[currentQ.id] === index}
                    onChange={() => handleAnswerSelect(currentQ.id, index)}
                    className="option-input"
                  />
                  <span className="option-text">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="test-navigation">
            <button 
              onClick={previousQuestion} 
              disabled={currentQuestion === 0}
              className="btn btn-secondary"
            >
              Previous
            </button>
            <button 
              onClick={nextQuestion}
              className="btn btn-primary"
            >
              {currentQuestion === currentQuestions.length - 1 ? 'Complete Test' : 'Next Question'}
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pre-entry-assessment">
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">
            <BookOpen className="mr-2" size={32} />
            Pre-Entry Assessment
          </h1>
          <p>Assess your numeracy and literacy skills to determine your readiness for placement tests</p>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card assessment-card">
          <div className="assessment-header">
            <Calculator size={48} color="#667eea" />
            <h2>Numeracy Assessment</h2>
            <p>Test your mathematical skills and problem-solving abilities</p>
          </div>
          <div className="assessment-details">
            <div className="detail-item">
              <strong>Duration:</strong> 30 minutes
            </div>
            <div className="detail-item">
              <strong>Questions:</strong> 5 multiple choice
            </div>
            <div className="detail-item">
              <strong>Topics:</strong> Basic arithmetic, algebra, geometry, statistics
            </div>
          </div>
          <button 
            onClick={() => startTest('numeracy')}
            className="btn btn-primary"
          >
            Start Numeracy Test
          </button>
        </div>

        <div className="card assessment-card">
          <div className="assessment-header">
            <BookOpen size={48} color="#28a745" />
            <h2>Literacy Assessment</h2>
            <p>Test your reading comprehension and language skills</p>
          </div>
          <div className="assessment-details">
            <div className="detail-item">
              <strong>Duration:</strong> 30 minutes
            </div>
            <div className="detail-item">
              <strong>Questions:</strong> 5 multiple choice
            </div>
            <div className="detail-item">
              <strong>Topics:</strong> Reading comprehension, vocabulary, text analysis
            </div>
          </div>
          <button 
            onClick={() => startTest('literacy')}
            className="btn btn-primary"
          >
            Start Literacy Test
          </button>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">Assessment Guidelines</h2>
        <div className="guidelines">
          <div className="guideline-item">
            <CheckCircle size={20} color="#28a745" />
            <span>Read each question carefully before answering</span>
          </div>
          <div className="guideline-item">
            <CheckCircle size={20} color="#28a745" />
            <span>You can navigate between questions using Previous/Next buttons</span>
          </div>
          <div className="guideline-item">
            <CheckCircle size={20} color="#28a745" />
            <span>Each test has a 30-minute time limit</span>
          </div>
          <div className="guideline-item">
            <CheckCircle size={20} color="#28a745" />
            <span>Your results will help determine appropriate support programs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreEntryAssessment;
