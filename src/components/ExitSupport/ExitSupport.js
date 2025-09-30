import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
  Briefcase,
  FileText,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Download,
  Save,
  Lightbulb,
  Target,
  TrendingUp,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Building2,
  GraduationCap,
  Plus
} from 'lucide-react';

const ExitSupport = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [workReadinessAnswers, setWorkReadinessAnswers] = useState({});
  const [interpersonalAnswers, setInterpersonalAnswers] = useState({});
  const [workReadinessResults, setWorkReadinessResults] = useState(null);
  const [interpersonalResults, setInterpersonalResults] = useState(null);

  // CV Builder State
  const [cvData, setCvData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      linkedIn: '',
      summary: ''
    },
    education: [
      { institution: '', qualification: '', year: '', grade: '' }
    ],
    experience: [
      { company: '', position: '', duration: '', responsibilities: '' }
    ],
    skills: '',
    references: [
      { name: '', position: '', company: '', phone: '', email: '' }
    ]
  });

  // Work Readiness Assessment Questions
  const workReadinessQuestions = [
    {
      id: 1,
      question: "I am confident in my ability to perform tasks required in my field of study.",
      category: "confidence"
    },
    {
      id: 2,
      question: "I can effectively manage my time to meet deadlines.",
      category: "time-management"
    },
    {
      id: 3,
      question: "I am comfortable working independently with minimal supervision.",
      category: "independence"
    },
    {
      id: 4,
      question: "I can identify and solve problems in the workplace.",
      category: "problem-solving"
    },
    {
      id: 5,
      question: "I understand professional workplace etiquette and expectations.",
      category: "professionalism"
    },
    {
      id: 6,
      question: "I am adaptable to changing work environments and requirements.",
      category: "adaptability"
    },
    {
      id: 7,
      question: "I can use relevant technology and tools required in my industry.",
      category: "technical-skills"
    },
    {
      id: 8,
      question: "I am prepared to continue learning and developing professionally.",
      category: "learning"
    },
    {
      id: 9,
      question: "I can handle workplace stress and pressure effectively.",
      category: "stress-management"
    },
    {
      id: 10,
      question: "I understand my rights and responsibilities as an employee.",
      category: "workplace-knowledge"
    }
  ];

  // Interpersonal Skills Questions
  const interpersonalQuestions = [
    {
      id: 1,
      question: "I communicate clearly and effectively with others.",
      category: "communication"
    },
    {
      id: 2,
      question: "I work well in team settings and collaborate with others.",
      category: "teamwork"
    },
    {
      id: 3,
      question: "I listen actively and understand others' perspectives.",
      category: "listening"
    },
    {
      id: 4,
      question: "I can resolve conflicts constructively and professionally.",
      category: "conflict-resolution"
    },
    {
      id: 5,
      question: "I show empathy and respect for diverse colleagues.",
      category: "empathy"
    },
    {
      id: 6,
      question: "I can give and receive constructive feedback appropriately.",
      category: "feedback"
    },
    {
      id: 7,
      question: "I am reliable and follow through on commitments.",
      category: "reliability"
    },
    {
      id: 8,
      question: "I can build positive relationships with colleagues and supervisors.",
      category: "relationship-building"
    },
    {
      id: 9,
      question: "I demonstrate leadership qualities when appropriate.",
      category: "leadership"
    },
    {
      id: 10,
      question: "I am open to different opinions and willing to compromise.",
      category: "flexibility"
    }
  ];

  // Handle Work Readiness Assessment
  const handleWorkReadinessAnswer = (questionId, value) => {
    setWorkReadinessAnswers(prev => ({
      ...prev,
      [questionId]: parseInt(value)
    }));
  };

  const submitWorkReadinessAssessment = () => {
    const answers = Object.values(workReadinessAnswers);
    if (answers.length < workReadinessQuestions.length) {
      toast.error('Please answer all questions before submitting.');
      return;
    }

    const totalScore = answers.reduce((sum, score) => sum + score, 0);
    const maxScore = workReadinessQuestions.length * 5;
    const percentage = (totalScore / maxScore) * 100;

    let level, feedback, recommendations;
    if (percentage >= 80) {
      level = 'Excellent';
      feedback = 'You demonstrate exceptional work readiness! You are well-prepared to enter the workplace with confidence.';
      recommendations = [
        'Continue to build on your existing strengths',
        'Consider mentoring other students',
        'Start applying for positions in your field',
        'Network with professionals in your industry'
      ];
    } else if (percentage >= 60) {
      level = 'Good';
      feedback = 'You show strong work readiness with some areas for improvement. With focused effort, you will be fully prepared.';
      recommendations = [
        'Identify specific areas for improvement',
        'Seek additional training or workshops',
        'Practice interview skills',
        'Build your professional network'
      ];
    } else if (percentage >= 40) {
      level = 'Fair';
      feedback = 'You have basic work readiness but need development in several areas. Focus on building your skills and confidence.';
      recommendations = [
        'Enroll in workplace preparation programs',
        'Seek internship or volunteer opportunities',
        'Work with a career counselor',
        'Develop time management skills'
      ];
    } else {
      level = 'Needs Improvement';
      feedback = 'You need significant preparation before entering the workplace. Take advantage of available support programs.';
      recommendations = [
        'Attend work readiness workshops',
        'Complete additional skills training',
        'Seek mentorship from experienced professionals',
        'Build foundational workplace skills'
      ];
    }

    setWorkReadinessResults({
      score: totalScore,
      maxScore,
      percentage: percentage.toFixed(1),
      level,
      feedback,
      recommendations
    });

    toast.success('Assessment completed successfully!');
  };

  // Handle Interpersonal Skills Assessment
  const handleInterpersonalAnswer = (questionId, value) => {
    setInterpersonalAnswers(prev => ({
      ...prev,
      [questionId]: parseInt(value)
    }));
  };

  const submitInterpersonalAssessment = () => {
    const answers = Object.values(interpersonalAnswers);
    if (answers.length < interpersonalQuestions.length) {
      toast.error('Please answer all questions before submitting.');
      return;
    }

    const totalScore = answers.reduce((sum, score) => sum + score, 0);
    const maxScore = interpersonalQuestions.length * 5;
    const percentage = (totalScore / maxScore) * 100;

    let level, feedback, recommendations;
    if (percentage >= 80) {
      level = 'Excellent';
      feedback = 'You have outstanding interpersonal skills! You will thrive in collaborative work environments.';
      recommendations = [
        'Share your interpersonal expertise with peers',
        'Take on team leadership roles',
        'Consider positions that involve client interaction',
        'Mentor others in developing these skills'
      ];
    } else if (percentage >= 60) {
      level = 'Good';
      feedback = 'You demonstrate solid interpersonal skills with room to grow. Continue practicing and developing these abilities.';
      recommendations = [
        'Practice active listening techniques',
        'Seek feedback from colleagues',
        'Join team-based projects',
        'Attend communication workshops'
      ];
    } else if (percentage >= 40) {
      level = 'Fair';
      feedback = 'Your interpersonal skills are developing. Focus on improving communication and collaboration abilities.';
      recommendations = [
        'Enroll in communication skills courses',
        'Practice conflict resolution techniques',
        'Participate in group activities',
        'Work with a communication coach'
      ];
    } else {
      level = 'Needs Improvement';
      feedback = 'Your interpersonal skills need significant development. Invest time in building these critical workplace abilities.';
      recommendations = [
        'Complete interpersonal skills training',
        'Practice daily communication exercises',
        'Seek professional development support',
        'Build confidence through small interactions'
      ];
    }

    setInterpersonalResults({
      score: totalScore,
      maxScore,
      percentage: percentage.toFixed(1),
      level,
      feedback,
      recommendations
    });

    toast.success('Assessment completed successfully!');
  };

  // CV Builder Functions
  const handleCVPersonalChange = (field, value) => {
    setCvData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const addEducation = () => {
    setCvData(prev => ({
      ...prev,
      education: [...prev.education, { institution: '', qualification: '', year: '', grade: '' }]
    }));
  };

  const updateEducation = (index, field, value) => {
    const newEducation = [...cvData.education];
    newEducation[index][field] = value;
    setCvData(prev => ({ ...prev, education: newEducation }));
  };

  const removeEducation = (index) => {
    if (cvData.education.length > 1) {
      const newEducation = cvData.education.filter((_, i) => i !== index);
      setCvData(prev => ({ ...prev, education: newEducation }));
    }
  };

  const addExperience = () => {
    setCvData(prev => ({
      ...prev,
      experience: [...prev.experience, { company: '', position: '', duration: '', responsibilities: '' }]
    }));
  };

  const updateExperience = (index, field, value) => {
    const newExperience = [...cvData.experience];
    newExperience[index][field] = value;
    setCvData(prev => ({ ...prev, experience: newExperience }));
  };

  const removeExperience = (index) => {
    if (cvData.experience.length > 1) {
      const newExperience = cvData.experience.filter((_, i) => i !== index);
      setCvData(prev => ({ ...prev, experience: newExperience }));
    }
  };

  const addReference = () => {
    setCvData(prev => ({
      ...prev,
      references: [...prev.references, { name: '', position: '', company: '', phone: '', email: '' }]
    }));
  };

  const updateReference = (index, field, value) => {
    const newReferences = [...cvData.references];
    newReferences[index][field] = value;
    setCvData(prev => ({ ...prev, references: newReferences }));
  };

  const removeReference = (index) => {
    if (cvData.references.length > 1) {
      const newReferences = cvData.references.filter((_, i) => i !== index);
      setCvData(prev => ({ ...prev, references: newReferences }));
    }
  };

  const saveCV = () => {
    localStorage.setItem('cvData', JSON.stringify(cvData));
    toast.success('CV saved successfully!');
  };

  const downloadCV = () => {
    toast.info('CV download feature - In a production environment, this would generate a PDF');
    // In production, integrate with a PDF library like jsPDF or react-pdf
  };

  // Render Home/Dashboard
  const renderHome = () => (
    <div>
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">
            <Briefcase className="mr-2" size={32} />
            Exit Support
          </h1>
          <p>Support and assessment tools for students completing their programs</p>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card feature-card" onClick={() => setActiveSection('work-readiness')}>
          <div className="feature-preview">
            <Briefcase size={48} color="#667eea" />
            <h2 className="card-title">Work Readiness Assessment</h2>
            <p>Assess your readiness for the workplace and identify areas for improvement</p>
            <button className="btn btn-primary">
              Start Assessment <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>

        <div className="card feature-card" onClick={() => setActiveSection('interpersonal')}>
          <div className="feature-preview">
            <Users size={48} color="#28a745" />
            <h2 className="card-title">Interpersonal Skills Assessment</h2>
            <p>Evaluate your interpersonal and communication work readiness</p>
            <button className="btn btn-primary">
              Start Assessment <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>

        <div className="card feature-card" onClick={() => setActiveSection('cv-builder')}>
          <div className="feature-preview">
            <FileText size={48} color="#ffc107" />
            <h2 className="card-title">CV Builder</h2>
            <p>Create a professional curriculum vitae to showcase your skills and experience</p>
            <button className="btn btn-primary">
              Build CV <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>

        <div className="card feature-card" onClick={() => setActiveSection('programs')}>
          <div className="feature-preview">
            <Award size={48} color="#17a2b8" />
            <h2 className="card-title">Support Programs</h2>
            <p>Access numeracy, literacy, and workplace preparation programs</p>
            <button className="btn btn-primary">
              View Programs <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Render Work Readiness Assessment
  const renderWorkReadiness = () => {
    if (workReadinessResults) {
      return (
        <div>
          <div className="card">
            <div className="card-header">
              <h1 className="card-title">
                <CheckCircle className="mr-2" size={32} color="#28a745" />
                Work Readiness Assessment Results
              </h1>
            </div>
          </div>

          <div className="card">
            <div className="score-summary">
              <div className="score-circle">
                <div className={`score-percentage ${workReadinessResults.level.toLowerCase().replace(' ', '-')}`}>
                  {workReadinessResults.percentage}%
                </div>
                <div className="score-level">{workReadinessResults.level}</div>
              </div>
              <div className="score-details">
                <div className="score-item">
                  <strong>Your Score:</strong> {workReadinessResults.score} / {workReadinessResults.maxScore}
                </div>
                <div className="score-item">
                  <strong>Work Readiness Level:</strong> {workReadinessResults.level}
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-title">
              <Lightbulb className="mr-2" size={24} />
              Assessment Feedback
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
              {workReadinessResults.feedback}
            </p>

            <h3 className="section-title">
              <Target className="mr-2" size={20} />
              Recommendations for Improvement
            </h3>
            <div className="recommendations">
              {workReadinessResults.recommendations.map((rec, index) => (
                <div key={index} className="recommendation-item success">
                  <CheckCircle size={20} color="#28a745" />
                  <span>{rec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="form-actions">
              <button className="btn btn-secondary" onClick={() => {
                setWorkReadinessResults(null);
                setWorkReadinessAnswers({});
              }}>
                <ArrowLeft size={18} className="mr-2" />
                Retake Assessment
              </button>
              <button className="btn btn-primary" onClick={() => setActiveSection('home')}>
                Return to Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">
              <Briefcase className="mr-2" size={32} />
              Work Readiness Assessment
            </h1>
            <p>Rate yourself on the following statements from 1 (Strongly Disagree) to 5 (Strongly Agree)</p>
          </div>
        </div>

        <div className="card">
          <div className="assessment-form">
            {workReadinessQuestions.map((q, index) => (
              <div key={q.id} className="question-group">
                <div className="question-title">
                  Question {index + 1} of {workReadinessQuestions.length}
                </div>
                <div className="question-text">
                  {q.question}
                </div>
                <div className="options-grid">
                  {[1, 2, 3, 4, 5].map(value => (
                    <label key={value} className="option-label">
                      <input
                        type="radio"
                        name={`work-q${q.id}`}
                        value={value}
                        checked={workReadinessAnswers[q.id] === value}
                        onChange={(e) => handleWorkReadinessAnswer(q.id, e.target.value)}
                        className="option-input"
                      />
                      <span className="option-text">
                        {value === 1 && 'Strongly Disagree'}
                        {value === 2 && 'Disagree'}
                        {value === 3 && 'Neutral'}
                        {value === 4 && 'Agree'}
                        {value === 5 && 'Strongly Agree'}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="form-actions">
            <button className="btn btn-secondary" onClick={() => setActiveSection('home')}>
              <ArrowLeft size={18} className="mr-2" />
              Back to Home
            </button>
            <button className="btn btn-primary" onClick={submitWorkReadinessAssessment}>
              Submit Assessment
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Render Interpersonal Skills Assessment
  const renderInterpersonal = () => {
    if (interpersonalResults) {
      return (
        <div>
          <div className="card">
            <div className="card-header">
              <h1 className="card-title">
                <CheckCircle className="mr-2" size={32} color="#28a745" />
                Interpersonal Skills Assessment Results
              </h1>
            </div>
          </div>

          <div className="card">
            <div className="score-summary">
              <div className="score-circle">
                <div className={`score-percentage ${interpersonalResults.level.toLowerCase().replace(' ', '-')}`}>
                  {interpersonalResults.percentage}%
                </div>
                <div className="score-level">{interpersonalResults.level}</div>
              </div>
              <div className="score-details">
                <div className="score-item">
                  <strong>Your Score:</strong> {interpersonalResults.score} / {interpersonalResults.maxScore}
                </div>
                <div className="score-item">
                  <strong>Interpersonal Skills Level:</strong> {interpersonalResults.level}
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-title">
              <Lightbulb className="mr-2" size={24} />
              Assessment Feedback
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
              {interpersonalResults.feedback}
            </p>

            <h3 className="section-title">
              <Target className="mr-2" size={20} />
              Recommendations for Improvement
            </h3>
            <div className="recommendations">
              {interpersonalResults.recommendations.map((rec, index) => (
                <div key={index} className="recommendation-item success">
                  <CheckCircle size={20} color="#28a745" />
                  <span>{rec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="form-actions">
              <button className="btn btn-secondary" onClick={() => {
                setInterpersonalResults(null);
                setInterpersonalAnswers({});
              }}>
                <ArrowLeft size={18} className="mr-2" />
                Retake Assessment
              </button>
              <button className="btn btn-primary" onClick={() => setActiveSection('home')}>
                Return to Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">
              <Users className="mr-2" size={32} />
              Interpersonal Skills Assessment
            </h1>
            <p>Rate yourself on the following statements from 1 (Strongly Disagree) to 5 (Strongly Agree)</p>
          </div>
        </div>

        <div className="card">
          <div className="assessment-form">
            {interpersonalQuestions.map((q, index) => (
              <div key={q.id} className="question-group">
                <div className="question-title">
                  Question {index + 1} of {interpersonalQuestions.length}
                </div>
                <div className="question-text">
                  {q.question}
                </div>
                <div className="options-grid">
                  {[1, 2, 3, 4, 5].map(value => (
                    <label key={value} className="option-label">
                      <input
                        type="radio"
                        name={`interp-q${q.id}`}
                        value={value}
                        checked={interpersonalAnswers[q.id] === value}
                        onChange={(e) => handleInterpersonalAnswer(q.id, e.target.value)}
                        className="option-input"
                      />
                      <span className="option-text">
                        {value === 1 && 'Strongly Disagree'}
                        {value === 2 && 'Disagree'}
                        {value === 3 && 'Neutral'}
                        {value === 4 && 'Agree'}
                        {value === 5 && 'Strongly Agree'}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="form-actions">
            <button className="btn btn-secondary" onClick={() => setActiveSection('home')}>
              <ArrowLeft size={18} className="mr-2" />
              Back to Home
            </button>
            <button className="btn btn-primary" onClick={submitInterpersonalAssessment}>
              Submit Assessment
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Render CV Builder
  const renderCVBuilder = () => (
    <div>
      <div className="card">
        <div className="card-header">
          <div>
            <h1 className="card-title">
              <FileText className="mr-2" size={32} />
              CV Builder
            </h1>
            <p>Create a professional curriculum vitae</p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn btn-secondary" onClick={saveCV}>
              <Save size={18} className="mr-2" />
              Save CV
            </button>
            <button className="btn btn-success" onClick={downloadCV}>
              <Download size={18} className="mr-2" />
              Download PDF
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">Personal Information</h2>
        <div className="grid grid-2">
          <div className="form-group">
            <label className="form-label">Full Name *</label>
            <input
              type="text"
              className="form-control"
              value={cvData.personalInfo.fullName}
              onChange={(e) => handleCVPersonalChange('fullName', e.target.value)}
              placeholder="John Doe"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email Address *</label>
            <input
              type="email"
              className="form-control"
              value={cvData.personalInfo.email}
              onChange={(e) => handleCVPersonalChange('email', e.target.value)}
              placeholder="john.doe@email.com"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Phone Number *</label>
            <input
              type="tel"
              className="form-control"
              value={cvData.personalInfo.phone}
              onChange={(e) => handleCVPersonalChange('phone', e.target.value)}
              placeholder="+27 82 123 4567"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              value={cvData.personalInfo.location}
              onChange={(e) => handleCVPersonalChange('location', e.target.value)}
              placeholder="Cape Town, South Africa"
            />
          </div>
          <div className="form-group">
            <label className="form-label">LinkedIn Profile</label>
            <input
              type="url"
              className="form-control"
              value={cvData.personalInfo.linkedIn}
              onChange={(e) => handleCVPersonalChange('linkedIn', e.target.value)}
              placeholder="https://linkedin.com/in/johndoe"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Professional Summary</label>
          <textarea
            className="form-control"
            rows="4"
            value={cvData.personalInfo.summary}
            onChange={(e) => handleCVPersonalChange('summary', e.target.value)}
            placeholder="Brief summary of your skills, experience, and career objectives..."
          />
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Education</h2>
          <button className="btn btn-primary btn-sm" onClick={addEducation}>
            <Plus size={16} className="mr-2" />
            Add Education
          </button>
        </div>
        {cvData.education.map((edu, index) => (
          <div key={index} className="cv-section-item">
            <div className="grid grid-2">
              <div className="form-group">
                <label className="form-label">Institution</label>
                <input
                  type="text"
                  className="form-control"
                  value={edu.institution}
                  onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                  placeholder="Westcol TVET College"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Qualification</label>
                <input
                  type="text"
                  className="form-control"
                  value={edu.qualification}
                  onChange={(e) => updateEducation(index, 'qualification', e.target.value)}
                  placeholder="National Certificate N6"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Year</label>
                <input
                  type="text"
                  className="form-control"
                  value={edu.year}
                  onChange={(e) => updateEducation(index, 'year', e.target.value)}
                  placeholder="2023"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Grade/GPA</label>
                <input
                  type="text"
                  className="form-control"
                  value={edu.grade}
                  onChange={(e) => updateEducation(index, 'grade', e.target.value)}
                  placeholder="Distinction"
                />
              </div>
            </div>
            {cvData.education.length > 1 && (
              <button className="btn btn-danger btn-sm" onClick={() => removeEducation(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Work Experience</h2>
          <button className="btn btn-primary btn-sm" onClick={addExperience}>
            <Plus size={16} className="mr-2" />
            Add Experience
          </button>
        </div>
        {cvData.experience.map((exp, index) => (
          <div key={index} className="cv-section-item">
            <div className="grid grid-2">
              <div className="form-group">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  className="form-control"
                  value={exp.company}
                  onChange={(e) => updateExperience(index, 'company', e.target.value)}
                  placeholder="Company Name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Position</label>
                <input
                  type="text"
                  className="form-control"
                  value={exp.position}
                  onChange={(e) => updateExperience(index, 'position', e.target.value)}
                  placeholder="Software Developer"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Duration</label>
                <input
                  type="text"
                  className="form-control"
                  value={exp.duration}
                  onChange={(e) => updateExperience(index, 'duration', e.target.value)}
                  placeholder="Jan 2022 - Dec 2023"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Responsibilities</label>
              <textarea
                className="form-control"
                rows="3"
                value={exp.responsibilities}
                onChange={(e) => updateExperience(index, 'responsibilities', e.target.value)}
                placeholder="Describe your key responsibilities and achievements..."
              />
            </div>
            {cvData.experience.length > 1 && (
              <button className="btn btn-danger btn-sm" onClick={() => removeExperience(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Skills</h2>
        </div>
        <div className="form-group">
          <label className="form-label">Skills (comma-separated)</label>
          <input
            type="text"
            className="form-control"
            value={cvData.skills}
            onChange={(e) => setCvData(prev => ({ ...prev, skills: e.target.value }))}
            placeholder="JavaScript, React, Python, Project Management, Leadership..."
          />
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">References</h2>
          <button className="btn btn-primary btn-sm" onClick={addReference}>
            <Plus size={16} className="mr-2" />
            Add Reference
          </button>
        </div>
        {cvData.references.map((ref, index) => (
          <div key={index} className="cv-section-item">
            <div className="grid grid-2">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={ref.name}
                  onChange={(e) => updateReference(index, 'name', e.target.value)}
                  placeholder="Reference Name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Position</label>
                <input
                  type="text"
                  className="form-control"
                  value={ref.position}
                  onChange={(e) => updateReference(index, 'position', e.target.value)}
                  placeholder="Manager"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  className="form-control"
                  value={ref.company}
                  onChange={(e) => updateReference(index, 'company', e.target.value)}
                  placeholder="Company Name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  value={ref.phone}
                  onChange={(e) => updateReference(index, 'phone', e.target.value)}
                  placeholder="+27 82 123 4567"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={ref.email}
                  onChange={(e) => updateReference(index, 'email', e.target.value)}
                  placeholder="reference@email.com"
                />
              </div>
            </div>
            {cvData.references.length > 1 && (
              <button className="btn btn-danger btn-sm" onClick={() => removeReference(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="card">
        <div className="form-actions">
          <button className="btn btn-secondary" onClick={() => setActiveSection('home')}>
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </button>
          <button className="btn btn-primary" onClick={saveCV}>
            <Save size={18} className="mr-2" />
            Save CV
          </button>
        </div>
      </div>
    </div>
  );

  // Render Support Programs
  const renderSupportPrograms = () => (
    <div>
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">
            <Award className="mr-2" size={32} />
            Support Programs
          </h1>
          <p>Access numeracy, literacy, and workplace preparation programs</p>
        </div>
      </div>

      <div className="program-list">
        <div className="program-item">
          <h3>
            <BookOpen size={24} className="mr-2" />
            Numeracy Development Program
          </h3>
          <p>Comprehensive numeracy skills development for workplace success. Covers basic mathematics, financial literacy, data interpretation, and problem-solving in professional contexts.</p>
          <div className="program-features">
            <span className="feature-tag">Math Fundamentals</span>
            <span className="feature-tag">Financial Literacy</span>
            <span className="feature-tag">Data Analysis</span>
            <span className="feature-tag">Problem Solving</span>
          </div>
        </div>

        <div className="program-item">
          <h3>
            <FileText size={24} className="mr-2" />
            Literacy Enhancement Program
          </h3>
          <p>Advanced literacy skills for professional communication. Includes business writing, report preparation, presentation skills, and effective workplace communication.</p>
          <div className="program-features">
            <span className="feature-tag">Business Writing</span>
            <span className="feature-tag">Report Preparation</span>
            <span className="feature-tag">Presentations</span>
            <span className="feature-tag">Professional Communication</span>
          </div>
        </div>

        <div className="program-item">
          <h3>
            <Users size={24} className="mr-2" />
            Interview Preparation Workshop
          </h3>
          <p>Comprehensive interview skills training including mock interviews, behavioral questions practice, industry-specific preparation, and confidence building.</p>
          <div className="program-features">
            <span className="feature-tag">Mock Interviews</span>
            <span className="feature-tag">Behavioral Questions</span>
            <span className="feature-tag">Industry-Specific Prep</span>
            <span className="feature-tag">Confidence Building</span>
          </div>
        </div>

        <div className="program-item">
          <h3>
            <Briefcase size={24} className="mr-2" />
            Workplace Etiquette Training
          </h3>
          <p>Professional workplace conduct and culture understanding. Covers office etiquette, corporate culture, networking skills, and professional development strategies.</p>
          <div className="program-features">
            <span className="feature-tag">Office Etiquette</span>
            <span className="feature-tag">Corporate Culture</span>
            <span className="feature-tag">Networking Skills</span>
            <span className="feature-tag">Professional Development</span>
          </div>
        </div>

        <div className="program-item">
          <h3>
            <Target size={24} className="mr-2" />
            Career Guidance Program
          </h3>
          <p>Individual career planning and guidance with industry experts. Includes career assessment, goal setting, job search strategies, and long-term career planning.</p>
          <div className="program-features">
            <span className="feature-tag">Career Assessment</span>
            <span className="feature-tag">Goal Setting</span>
            <span className="feature-tag">Job Search Strategies</span>
            <span className="feature-tag">Long-term Planning</span>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="form-actions">
          <button className="btn btn-secondary" onClick={() => setActiveSection('home')}>
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </button>
          <button className="btn btn-primary">
            <Mail size={18} className="mr-2" />
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );

  // Main Render
  return (
    <div className="exit-support">
      {activeSection === 'home' && renderHome()}
      {activeSection === 'work-readiness' && renderWorkReadiness()}
      {activeSection === 'interpersonal' && renderInterpersonal()}
      {activeSection === 'cv-builder' && renderCVBuilder()}
      {activeSection === 'programs' && renderSupportPrograms()}
    </div>
  );
};

export default ExitSupport;