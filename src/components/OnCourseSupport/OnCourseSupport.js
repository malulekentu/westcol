import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Keyboard, 
  BookOpen, 
  BarChart3,
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  Clock,
  Target,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

const OnCourseSupport = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [typingStats, setTypingStats] = useState({
    wpm: 0,
    accuracy: 0,
    timeElapsed: 0,
    errors: 0
  });
  const [studyAnalysis, setStudyAnalysis] = useState({
    strengths: [],
    weaknesses: [],
    recommendations: []
  });

  const typingTexts = [
    "The quick brown fox jumps over the lazy dog. This is a common typing practice sentence.",
    "Technology has revolutionized the way we learn and work. Digital tools make education more accessible.",
    "Practice makes perfect when it comes to typing. Regular practice improves speed and accuracy significantly.",
    "Time management is crucial for academic success. Students should prioritize their tasks effectively.",
    "Communication skills are essential in the modern workplace. Both written and verbal communication matter."
  ];

  const studyStrengths = [
    "Visual learning - You learn best through diagrams and charts",
    "Reading comprehension - You understand written material well",
    "Time management - You organize your study time effectively",
    "Note-taking - You create comprehensive study notes",
    "Group study - You benefit from collaborative learning"
  ];

  const studyWeaknesses = [
    "Mathematical concepts - You may need extra help with numbers",
    "Memorization - You find it difficult to remember facts",
    "Concentration - You get distracted easily during study",
    "Writing skills - You need to improve your written expression",
    "Test anxiety - You feel nervous during examinations"
  ];

  const learningBarriers = [
    {
      category: "Academic Barriers",
      items: [
        "Difficulty with mathematical concepts",
        "Poor reading comprehension",
        "Limited vocabulary",
        "Weak writing skills",
        "Memory retention issues"
      ]
    },
    {
      category: "Personal Barriers",
      items: [
        "Lack of motivation",
        "Poor time management",
        "Test anxiety",
        "Low self-confidence",
        "Distraction from personal issues"
      ]
    },
    {
      category: "Environmental Barriers",
      items: [
        "Noisy study environment",
        "Lack of study materials",
        "Poor internet connectivity",
        "Limited access to resources",
        "Unsupportive family environment"
      ]
    }
  ];

  const supportPrograms = [
    {
      title: "Numeracy Support Program",
      description: "Improve your mathematical skills with personalized tutoring",
      duration: "8 weeks",
      level: "Beginner to Intermediate",
      topics: ["Basic arithmetic", "Algebra", "Geometry", "Statistics"]
    },
    {
      title: "Literacy Enhancement Program",
      description: "Develop reading, writing, and communication skills",
      duration: "10 weeks",
      level: "All levels",
      topics: ["Reading comprehension", "Essay writing", "Grammar", "Vocabulary"]
    },
    {
      title: "Study Skills Workshop",
      description: "Learn effective study techniques and time management",
      duration: "4 weeks",
      level: "All levels",
      topics: ["Note-taking", "Memory techniques", "Exam preparation", "Time management"]
    },
    {
      title: "Digital Literacy Program",
      description: "Master essential computer and internet skills",
      duration: "6 weeks",
      level: "Beginner",
      topics: ["Computer basics", "Internet navigation", "Email", "Online research"]
    }
  ];

  const TypingTutor = () => {
    const [currentText, setCurrentText] = useState('');
    const [userInput, setUserInput] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [errors, setErrors] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
      setCurrentText(typingTexts[currentTextIndex]);
    }, [currentTextIndex]);

    useEffect(() => {
      let interval = null;
      if (isActive && startTime) {
        interval = setInterval(() => {
          const elapsed = Math.floor((Date.now() - startTime) / 1000);
          const wpm = userInput.length > 0 ? Math.round((userInput.length / 5) / (elapsed / 60)) : 0;
          const accuracy = userInput.length > 0 ? Math.round(((userInput.length - errors) / userInput.length) * 100) : 0;
          
          setTypingStats({
            wpm: wpm,
            accuracy: accuracy,
            timeElapsed: elapsed,
            errors: errors
          });
        }, 1000);
      } else if (!isActive) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, startTime, userInput, errors]);

    const startTyping = () => {
      setIsActive(true);
      setStartTime(Date.now());
      setUserInput('');
      setErrors(0);
    };

    const pauseTyping = () => {
      setIsActive(false);
    };

    const resetTyping = () => {
      setIsActive(false);
      setUserInput('');
      setErrors(0);
      setStartTime(null);
      setTypingStats({ wpm: 0, accuracy: 0, timeElapsed: 0, errors: 0 });
    };

    const nextText = () => {
      if (currentTextIndex < typingTexts.length - 1) {
        setCurrentTextIndex(currentTextIndex + 1);
        resetTyping();
      }
    };

    const handleInputChange = (e) => {
      const value = e.target.value;
      setUserInput(value);
      
      // Count errors
      let errorCount = 0;
      for (let i = 0; i < value.length; i++) {
        if (value[i] !== currentText[i]) {
          errorCount++;
        }
      }
      setErrors(errorCount);
    };

    return (
      <div className="typing-tutor">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              <Keyboard className="mr-2" size={24} />
              Typing Tutor
            </h2>
            <p>Improve your keyboarding skills with interactive lessons</p>
          </div>
        </div>

        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Statistics</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">{typingStats.wpm}</div>
                <div className="stat-label">Words Per Minute</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{typingStats.accuracy}%</div>
                <div className="stat-label">Accuracy</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{typingStats.timeElapsed}s</div>
                <div className="stat-label">Time Elapsed</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{typingStats.errors}</div>
                <div className="stat-label">Errors</div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Controls</h3>
            <div className="controls">
              <button 
                onClick={startTyping} 
                disabled={isActive}
                className="btn btn-success"
              >
                <Play className="mr-2" size={20} />
                Start
              </button>
              <button 
                onClick={pauseTyping} 
                disabled={!isActive}
                className="btn btn-warning"
              >
                <Pause className="mr-2" size={20} />
                Pause
              </button>
              <button 
                onClick={resetTyping}
                className="btn btn-secondary"
              >
                <RotateCcw className="mr-2" size={20} />
                Reset
              </button>
              <button 
                onClick={nextText}
                disabled={currentTextIndex >= typingTexts.length - 1}
                className="btn btn-primary"
              >
                Next Text
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Practice Text</h3>
          <div className="typing-area">
            <div className="text-display">
              {currentText.split('').map((char, index) => (
                <span 
                  key={index} 
                  className={`char ${index < userInput.length ? 
                    (userInput[index] === char ? 'correct' : 'incorrect') : ''}`}
                >
                  {char}
                </span>
              ))}
            </div>
            <textarea
              className="typing-input"
              value={userInput}
              onChange={handleInputChange}
              disabled={!isActive}
              placeholder="Start typing here..."
              rows="3"
            />
          </div>
        </div>
      </div>
    );
  };

  const StudyAnalysis = () => {
    const [currentAnalysis, setCurrentAnalysis] = useState(null);

    const analyzeStudySkills = () => {
      // Simulate analysis based on user responses
      const analysis = {
        strengths: studyStrengths.slice(0, Math.floor(Math.random() * 3) + 2),
        weaknesses: studyWeaknesses.slice(0, Math.floor(Math.random() * 3) + 1),
        recommendations: [
          "Focus on your visual learning strength by creating more diagrams",
          "Practice mathematical problems daily to improve weak areas",
          "Join study groups to enhance collaborative learning",
          "Use memory techniques like mnemonics for better retention"
        ]
      };
      setCurrentAnalysis(analysis);
      setStudyAnalysis(analysis);
    };

    return (
      <div className="study-analysis">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              <BookOpen className="mr-2" size={24} />
              Study Analysis
            </h2>
            <p>Analyze your studying strengths and weaknesses</p>
          </div>
        </div>

        <div className="card">
          <button onClick={analyzeStudySkills} className="btn btn-primary">
            <BarChart3 className="mr-2" size={20} />
            Analyze My Study Skills
          </button>
        </div>

        {currentAnalysis && (
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">Strengths</h3>
              <div className="analysis-list">
                {currentAnalysis.strengths.map((strength, index) => (
                  <div key={index} className="analysis-item strength">
                    <CheckCircle size={20} color="#28a745" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">Areas for Improvement</h3>
              <div className="analysis-list">
                {currentAnalysis.weaknesses.map((weakness, index) => (
                  <div key={index} className="analysis-item weakness">
                    <AlertCircle size={20} color="#ffc107" />
                    <span>{weakness}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentAnalysis && (
          <div className="card">
            <h3 className="card-title">Recommendations</h3>
            <div className="recommendations-list">
              {currentAnalysis.recommendations.map((rec, index) => (
                <div key={index} className="recommendation-item">
                  <Target size={20} color="#667eea" />
                  <span>{rec}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const LearningBarriers = () => {
    return (
      <div className="learning-barriers">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              <BarChart3 className="mr-2" size={24} />
              Learning Barriers Identification
            </h2>
            <p>Identify possible studying challenges and barriers</p>
          </div>
        </div>

        <div className="barriers-grid">
          {learningBarriers.map((barrier, index) => (
            <div key={index} className="card">
              <h3 className="card-title">{barrier.category}</h3>
              <div className="barriers-list">
                {barrier.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="barrier-item">
                    <AlertCircle size={16} color="#dc3545" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <h3 className="card-title">Overcoming Barriers</h3>
          <div className="solutions">
            <div className="solution-item">
              <h4>Academic Support</h4>
              <p>Access tutoring services and study groups to address academic challenges</p>
            </div>
            <div className="solution-item">
              <h4>Time Management</h4>
              <p>Use planners and scheduling tools to organize your study time effectively</p>
            </div>
            <div className="solution-item">
              <h4>Study Environment</h4>
              <p>Create a quiet, well-lit study space free from distractions</p>
            </div>
            <div className="solution-item">
              <h4>Motivation Techniques</h4>
              <p>Set achievable goals and reward yourself for completing tasks</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SupportPrograms = () => {
    return (
      <div className="support-programs">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              <GraduationCap className="mr-2" size={24} />
              Support Programs
            </h2>
            <p>Access numeracy and literacy support programs</p>
          </div>
        </div>

        <div className="programs-grid">
          {supportPrograms.map((program, index) => (
            <div key={index} className="card program-card">
              <h3 className="card-title">{program.title}</h3>
              <p className="program-description">{program.description}</p>
              
              <div className="program-details">
                <div className="detail-item">
                  <Clock size={16} />
                  <span><strong>Duration:</strong> {program.duration}</span>
                </div>
                <div className="detail-item">
                  <Target size={16} />
                  <span><strong>Level:</strong> {program.level}</span>
                </div>
              </div>

              <div className="program-topics">
                <h4>Topics Covered:</h4>
                <ul>
                  {program.topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>{topic}</li>
                  ))}
                </ul>
              </div>

              <button className="btn btn-primary">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="on-course-support">
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">
            <GraduationCap className="mr-2" size={32} />
            On-Course Support
          </h1>
          <p>Support tools and resources for students during their studies</p>
        </div>
      </div>

      {!activeModule && (
        <div className="grid grid-2">
          <div className="card feature-card" onClick={() => setActiveModule('typing')}>
            <div className="feature-icon">
              <Keyboard size={48} color="#667eea" />
            </div>
            <h3>Typing Tutor</h3>
            <p>Improve your keyboarding skills with interactive typing lessons</p>
            <button className="btn btn-primary">Start Typing Practice</button>
          </div>

          <div className="card feature-card" onClick={() => setActiveModule('analysis')}>
            <div className="feature-icon">
              <BookOpen size={48} color="#28a745" />
            </div>
            <h3>Study Analysis</h3>
            <p>Analyze your studying strengths and weaknesses</p>
            <button className="btn btn-primary">Analyze Study Skills</button>
          </div>

          <div className="card feature-card" onClick={() => setActiveModule('barriers')}>
            <div className="feature-icon">
              <BarChart3 size={48} color="#ffc107" />
            </div>
            <h3>Learning Barriers</h3>
            <p>Identify and address learning challenges</p>
            <button className="btn btn-primary">Identify Barriers</button>
          </div>

          <div className="card feature-card" onClick={() => setActiveModule('programs')}>
            <div className="feature-icon">
              <GraduationCap size={48} color="#17a2b8" />
            </div>
            <h3>Support Programs</h3>
            <p>Access numeracy and literacy support programs</p>
            <button className="btn btn-primary">View Programs</button>
          </div>
        </div>
      )}

      {activeModule === 'typing' && (
        <div>
          <button onClick={() => setActiveModule(null)} className="btn btn-secondary mb-3">
            ← Back to Modules
          </button>
          <TypingTutor />
        </div>
      )}

      {activeModule === 'analysis' && (
        <div>
          <button onClick={() => setActiveModule(null)} className="btn btn-secondary mb-3">
            ← Back to Modules
          </button>
          <StudyAnalysis />
        </div>
      )}

      {activeModule === 'barriers' && (
        <div>
          <button onClick={() => setActiveModule(null)} className="btn btn-secondary mb-3">
            ← Back to Modules
          </button>
          <LearningBarriers />
        </div>
      )}

      {activeModule === 'programs' && (
        <div>
          <button onClick={() => setActiveModule(null)} className="btn btn-secondary mb-3">
            ← Back to Modules
          </button>
          <SupportPrograms />
        </div>
      )}
    </div>
  );
};

export default OnCourseSupport;
