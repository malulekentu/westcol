import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  RotateCcw,
  BarChart3,
  BookOpen,
  Calculator,
  Users
} from 'lucide-react';

const PlacementTests = () => {
  const [selectedTest, setSelectedTest] = useState(null);
  const [isTestActive, setIsTestActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [results, setResults] = useState(null);

  const placementTests = [
    {
      id: 'academic_ability',
      title: 'Academic Ability Assessment',
      description: 'Comprehensive test to evaluate your academic readiness and cognitive abilities',
      duration: 60,
      questions: 20,
      icon: BookOpen,
      color: '#667eea',
      topics: ['Critical thinking', 'Problem solving', 'Analytical reasoning', 'Memory skills']
    },
    {
      id: 'mathematical_skills',
      title: 'Mathematical Skills Assessment',
      description: 'Test your mathematical knowledge and problem-solving abilities',
      duration: 45,
      questions: 15,
      icon: Calculator,
      color: '#28a745',
      topics: ['Algebra', 'Geometry', 'Statistics', 'Applied mathematics']
    },
    {
      id: 'language_proficiency',
      title: 'Language Proficiency Assessment',
      description: 'Evaluate your reading, writing, and communication skills',
      duration: 50,
      questions: 18,
      icon: BookOpen,
      color: '#17a2b8',
      topics: ['Reading comprehension', 'Grammar', 'Vocabulary', 'Writing skills']
    },
    {
      id: 'technical_aptitude',
      title: 'Technical Aptitude Assessment',
      description: 'Assess your technical skills and mechanical reasoning abilities',
      duration: 40,
      questions: 12,
      icon: ClipboardCheck,
      color: '#ffc107',
      topics: ['Mechanical reasoning', 'Spatial awareness', 'Technical knowledge', 'Problem solving']
    },
    {
      id: 'personality_assessment',
      title: 'Personality & Work Style Assessment',
      description: 'Understand your personality traits and work preferences',
      duration: 30,
      questions: 25,
      icon: Users,
      color: '#6f42c1',
      topics: ['Personality traits', 'Work preferences', 'Communication style', 'Learning style']
    }
  ];

  const startTest = (testId) => {
    const test = placementTests.find(t => t.id === testId);
    setSelectedTest(test);
    setIsTestActive(true);
    setCurrentQuestion(0);
    setAnswers({});
    setTimeRemaining(test.duration * 60);
    setIsCompleted(false);
    setResults(null);
  };

  const completeTest = () => {
    setIsTestActive(false);
    setIsCompleted(true);
    
    // Simulate test completion and results
    const mockResults = {
      testId: selectedTest.id,
      testName: selectedTest.title,
      score: Math.floor(Math.random() * 40) + 60, // Random score between 60-100
      totalQuestions: selectedTest.questions,
      timeSpent: selectedTest.duration * 60 - timeRemaining,
      answers: answers,
      recommendations: generateRecommendations(selectedTest.id)
    };
    
    setResults(mockResults);
    
    // Save results to localStorage
    const existingResults = JSON.parse(localStorage.getItem('placementResults') || '{}');
    existingResults[selectedTest.id] = mockResults;
    localStorage.setItem('placementResults', JSON.stringify(existingResults));
  };

  const generateRecommendations = (testId) => {
    const recommendations = {
      academic_ability: [
        'Strong analytical skills - suitable for advanced programs',
        'Consider pursuing degree-level qualifications',
        'Excellent foundation for technical programs'
      ],
      mathematical_skills: [
        'Good mathematical foundation',
        'Ready for engineering and technical programs',
        'Consider advanced mathematics courses'
      ],
      language_proficiency: [
        'Strong communication skills',
        'Suitable for programs requiring written work',
        'Consider leadership and management programs'
      ],
      technical_aptitude: [
        'Excellent technical potential',
        'Ideal for hands-on technical programs',
        'Consider engineering and technical trades'
      ],
      personality_assessment: [
        'Well-rounded personality profile',
        'Suitable for various program types',
        'Consider programs matching your interests'
      ]
    };
    
    return recommendations[testId] || ['Continue with program selection'];
  };

  const resetTest = () => {
    setSelectedTest(null);
    setIsTestActive(false);
    setCurrentQuestion(0);
    setAnswers({});
    setTimeRemaining(0);
    setIsCompleted(false);
    setResults(null);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getScoreLevel = (score) => {
    if (score >= 90) return { level: 'Excellent', color: '#28a745' };
    if (score >= 80) return { level: 'Very Good', color: '#17a2b8' };
    if (score >= 70) return { level: 'Good', color: '#ffc107' };
    if (score >= 60) return { level: 'Satisfactory', color: '#fd7e14' };
    return { level: 'Needs Improvement', color: '#dc3545' };
  };

  if (isCompleted && results) {
    const scoreLevel = getScoreLevel(results.score);
    
    return (
      <div className="placement-tests">
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">
              <CheckCircle className="mr-2" size={32} color={scoreLevel.color} />
              {results.testName} - Results
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
                  {results.score}%
                </div>
                <div className="score-level" style={{ color: scoreLevel.color }}>
                  {scoreLevel.level}
                </div>
              </div>
              <div className="score-details">
                <div className="score-item">
                  <strong>Questions Answered:</strong> {Object.keys(results.answers).length}/{results.totalQuestions}
                </div>
                <div className="score-item">
                  <strong>Time Spent:</strong> {formatTime(results.timeSpent)}
                </div>
                <div className="score-item">
                  <strong>Test Duration:</strong> {selectedTest.duration} minutes
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-title">Recommendations</h2>
            <div className="recommendations">
              {results.recommendations.map((recommendation, index) => (
                <div key={index} className="recommendation-item">
                  <CheckCircle size={20} color="#28a745" />
                  <span>{recommendation}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card text-center">
          <button onClick={resetTest} className="btn btn-secondary mr-3">
            <RotateCcw className="mr-2" size={20} />
            Take Another Test
          </button>
          <button className="btn btn-primary">
            Continue to On-Course Support
          </button>
        </div>
      </div>
    );
  }

  if (isTestActive && selectedTest) {
    return (
      <div className="placement-tests">
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">
              <selectedTest.icon className="mr-2" size={32} color={selectedTest.color} />
              {selectedTest.title}
            </h1>
            <div className="test-info">
              <div className="test-timer">
                <Clock size={20} />
                <span>Time Remaining: {formatTime(timeRemaining)}</span>
              </div>
              <div className="test-progress">
                <span>Question {currentQuestion + 1} of {selectedTest.questions}</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: `${((currentQuestion + 1) / selectedTest.questions) * 100}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="question-container">
            <h2 className="question-title">Question {currentQuestion + 1}</h2>
            <div className="question-text">
              <p>This is a sample question for the {selectedTest.title}. In a real implementation, this would contain the actual test questions.</p>
              <p>For demonstration purposes, please select any answer to continue.</p>
            </div>
            
            <div className="options-container">
              {['Option A', 'Option B', 'Option C', 'Option D'].map((option, index) => (
                <label key={index} className="option-label">
                  <input
                    type="radio"
                    name={`question_${currentQuestion}`}
                    checked={answers[currentQuestion] === index}
                    onChange={() => setAnswers({...answers, [currentQuestion]: index})}
                    className="option-input"
                  />
                  <span className="option-text">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="test-navigation">
            <button 
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="btn btn-secondary"
            >
              Previous
            </button>
            <button 
              onClick={() => {
                if (currentQuestion < selectedTest.questions - 1) {
                  setCurrentQuestion(currentQuestion + 1);
                } else {
                  completeTest();
                }
              }}
              className="btn btn-primary"
            >
              {currentQuestion === selectedTest.questions - 1 ? 'Complete Test' : 'Next Question'}
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="placement-tests">
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">
            <ClipboardCheck className="mr-2" size={32} />
            Placement Tests
          </h1>
          <p>Comprehensive assessments to determine your academic abilities and program placement</p>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">Available Tests</h2>
        <div className="tests-grid">
          {placementTests.map((test) => {
            const Icon = test.icon;
            return (
              <div key={test.id} className="test-card">
                <div className="test-card-header">
                  <div className="test-icon" style={{ backgroundColor: test.color }}>
                    <Icon size={32} color="white" />
                  </div>
                  <div className="test-info">
                    <h3>{test.title}</h3>
                    <p>{test.description}</p>
                  </div>
                </div>
                
                <div className="test-details">
                  <div className="detail-item">
                    <Clock size={16} />
                    <span>{test.duration} minutes</span>
                  </div>
                  <div className="detail-item">
                    <ClipboardCheck size={16} />
                    <span>{test.questions} questions</span>
                  </div>
                </div>
                
                <div className="test-topics">
                  <h4>Topics Covered:</h4>
                  <ul>
                    {test.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => startTest(test.id)}
                  className="btn btn-primary"
                  style={{ backgroundColor: test.color }}
                >
                  Start Test
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">Test Guidelines</h2>
        <div className="guidelines">
          <div className="guideline-item">
            <CheckCircle size={20} color="#28a745" />
            <span>Read each question carefully before selecting your answer</span>
          </div>
          <div className="guideline-item">
            <CheckCircle size={20} color="#28a745" />
            <span>You can navigate between questions using Previous/Next buttons</span>
          </div>
          <div className="guideline-item">
            <CheckCircle size={20} color="#28a745" />
            <span>Each test has a specific time limit - manage your time wisely</span>
          </div>
          <div className="guideline-item">
            <CheckCircle size={20} color="#28a745" />
            <span>Your results will help determine the most suitable program for you</span>
          </div>
          <div className="guideline-item">
            <CheckCircle size={20} color="#28a745" />
            <span>You can retake tests if needed to improve your scores</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementTests;
