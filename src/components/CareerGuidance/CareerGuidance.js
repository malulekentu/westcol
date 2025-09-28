import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { 
  Compass, 
  CheckCircle, 
  ArrowRight, 
  BookOpen, 
  Target, 
  Lightbulb,
  TrendingUp,
  Users
} from 'lucide-react';

const CareerGuidance = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState({});
  const [results, setResults] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const totalSteps = 5;

  const careerQuestions = {
    1: {
      title: "Personal Interests Assessment",
      description: "Let's start by understanding your interests and what motivates you.",
      questions: [
        {
          id: "interests_1",
          text: "What type of activities do you enjoy most?",
          options: [
            { value: "technical", label: "Working with technology and machines" },
            { value: "creative", label: "Art, design, and creative expression" },
            { value: "social", label: "Helping and working with people" },
            { value: "analytical", label: "Problem-solving and analysis" },
            { value: "outdoor", label: "Physical work and outdoor activities" }
          ]
        },
        {
          id: "interests_2",
          text: "What motivates you in your work?",
          options: [
            { value: "security", label: "Job security and stability" },
            { value: "growth", label: "Career advancement opportunities" },
            { value: "impact", label: "Making a positive impact" },
            { value: "creativity", label: "Creative freedom and innovation" },
            { value: "income", label: "High earning potential" }
          ]
        }
      ]
    },
    2: {
      title: "Skills and Abilities",
      description: "Now let's assess your current skills and abilities.",
      questions: [
        {
          id: "skills_1",
          text: "Which of these skills do you feel most confident in?",
          options: [
            { value: "technical", label: "Technical and mechanical skills" },
            { value: "communication", label: "Communication and interpersonal skills" },
            { value: "mathematical", label: "Mathematical and analytical skills" },
            { value: "creative", label: "Creative and artistic skills" },
            { value: "leadership", label: "Leadership and management skills" }
          ]
        },
        {
          id: "skills_2",
          text: "What type of learning environment works best for you?",
          options: [
            { value: "hands_on", label: "Hands-on practical learning" },
            { value: "theoretical", label: "Classroom and theoretical learning" },
            { value: "mixed", label: "Combination of both approaches" },
            { value: "online", label: "Online and self-paced learning" },
            { value: "group", label: "Group and collaborative learning" }
          ]
        }
      ]
    },
    3: {
      title: "Career Goals and Aspirations",
      description: "Let's explore your career goals and where you see yourself in the future.",
      questions: [
        {
          id: "goals_1",
          text: "What is your primary career goal?",
          options: [
            { value: "employment", label: "Secure stable employment" },
            { value: "entrepreneurship", label: "Start my own business" },
            { value: "specialization", label: "Become an expert in a specific field" },
            { value: "leadership", label: "Move into leadership roles" },
            { value: "service", label: "Serve my community" }
          ]
        },
        {
          id: "goals_2",
          text: "Where do you see yourself in 5 years?",
          options: [
            { value: "employed", label: "Working in a stable job" },
            { value: "advanced", label: "In an advanced position" },
            { value: "business", label: "Running my own business" },
            { value: "studying", label: "Pursuing further education" },
            { value: "traveling", label: "Working internationally" }
          ]
        }
      ]
    },
    4: {
      title: "Work Environment Preferences",
      description: "Understanding your preferred work environment helps us match you with suitable programs.",
      questions: [
        {
          id: "environment_1",
          text: "What type of work environment do you prefer?",
          options: [
            { value: "office", label: "Office-based work" },
            { value: "workshop", label: "Workshop or factory environment" },
            { value: "field", label: "Field work and outdoor settings" },
            { value: "remote", label: "Remote or flexible work" },
            { value: "mixed", label: "Varied environments" }
          ]
        },
        {
          id: "environment_2",
          text: "How do you prefer to work?",
          options: [
            { value: "independent", label: "Independently" },
            { value: "team", label: "As part of a team" },
            { value: "supervised", label: "With close supervision" },
            { value: "flexible", label: "With flexible arrangements" },
            { value: "structured", label: "In a structured environment" }
          ]
        }
      ]
    },
    5: {
      title: "Values and Priorities",
      description: "Finally, let's understand what values are most important to you in your career.",
      questions: [
        {
          id: "values_1",
          text: "What is most important to you in a career?",
          options: [
            { value: "stability", label: "Job security and stability" },
            { value: "growth", label: "Personal and professional growth" },
            { value: "balance", label: "Work-life balance" },
            { value: "purpose", label: "Meaningful work" },
            { value: "recognition", label: "Recognition and achievement" }
          ]
        },
        {
          id: "values_2",
          text: "What would make you feel most satisfied in your work?",
          options: [
            { value: "helping", label: "Helping others" },
            { value: "creating", label: "Creating something new" },
            { value: "solving", label: "Solving complex problems" },
            { value: "leading", label: "Leading and inspiring others" },
            { value: "learning", label: "Continuous learning" }
          ]
        }
      ]
    }
  };

  const courseRecommendations = {
    technical: [
      "Electrical Engineering",
      "Mechanical Engineering",
      "Information Technology",
      "Automotive Technology",
      "Construction Management"
    ],
    creative: [
      "Graphic Design",
      "Interior Design",
      "Fashion Design",
      "Digital Media",
      "Photography"
    ],
    social: [
      "Social Work",
      "Early Childhood Development",
      "Community Development",
      "Counseling",
      "Public Relations"
    ],
    analytical: [
      "Business Management",
      "Accounting",
      "Data Analysis",
      "Project Management",
      "Quality Assurance"
    ],
    outdoor: [
      "Agriculture",
      "Environmental Management",
      "Tourism",
      "Sports Management",
      "Wildlife Management"
    ]
  };

  const onSubmit = (data) => {
    const stepData = { ...assessmentData, ...data };
    setAssessmentData(stepData);

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate results
      const results = calculateCareerRecommendations(stepData);
      setResults(results);
      setIsCompleted(true);
      toast.success("Career guidance assessment completed successfully!");
    }
  };

  const calculateCareerRecommendations = (data) => {
    const scores = {
      technical: 0,
      creative: 0,
      social: 0,
      analytical: 0,
      outdoor: 0
    };

    // Calculate scores based on responses
    Object.values(data).forEach(value => {
      if (scores.hasOwnProperty(value)) {
        scores[value]++;
      }
    });

    const topCategory = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const recommendations = courseRecommendations[topCategory] || courseRecommendations.technical;

    return {
      topCategory,
      scores,
      recommendations,
      personality: getPersonalityType(data),
      strengths: getStrengths(data),
      areasForDevelopment: getAreasForDevelopment(data)
    };
  };

  const getPersonalityType = (data) => {
    // Simple personality assessment based on responses
    const values = Object.values(data);
    if (values.includes('technical') && values.includes('analytical')) {
      return "Analytical Problem-Solver";
    } else if (values.includes('creative') && values.includes('social')) {
      return "Creative Collaborator";
    } else if (values.includes('social') && values.includes('helping')) {
      return "Service-Oriented Helper";
    } else if (values.includes('leadership') && values.includes('growth')) {
      return "Ambitious Leader";
    } else {
      return "Balanced Professional";
    }
  };

  const getStrengths = (data) => {
    const strengths = [];
    const values = Object.values(data);
    
    if (values.includes('technical')) strengths.push("Technical aptitude");
    if (values.includes('communication')) strengths.push("Communication skills");
    if (values.includes('mathematical')) strengths.push("Mathematical ability");
    if (values.includes('creative')) strengths.push("Creative thinking");
    if (values.includes('leadership')) strengths.push("Leadership potential");
    
    return strengths.length > 0 ? strengths : ["Adaptability", "Problem-solving"];
  };

  const getAreasForDevelopment = (data) => {
    const areas = [];
    const values = Object.values(data);
    
    if (!values.includes('technical')) areas.push("Technical skills");
    if (!values.includes('communication')) areas.push("Communication skills");
    if (!values.includes('mathematical')) areas.push("Mathematical skills");
    if (!values.includes('creative')) areas.push("Creative thinking");
    if (!values.includes('leadership')) areas.push("Leadership skills");
    
    return areas.length > 0 ? areas : ["Time management", "Digital literacy"];
  };

  const resetAssessment = () => {
    setCurrentStep(1);
    setAssessmentData({});
    setResults(null);
    setIsCompleted(false);
  };

  if (isCompleted && results) {
    return (
      <div className="career-guidance">
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">
              <Compass className="mr-2" size={32} />
              Career Guidance Results
            </h1>
            <p>Your personalized career recommendations</p>
          </div>
        </div>

        <div className="grid grid-2">
          <div className="card">
            <h2 className="card-title">Your Profile</h2>
            <div className="profile-section">
              <h3>Personality Type</h3>
              <p className="profile-value">{results.personality}</p>
              
              <h3>Top Interest Area</h3>
              <p className="profile-value">{results.topCategory.charAt(0).toUpperCase() + results.topCategory.slice(1)}</p>
            </div>
          </div>

          <div className="card">
            <h2 className="card-title">Strengths</h2>
            <ul className="strengths-list">
              {results.strengths.map((strength, index) => (
                <li key={index} className="strength-item">
                  <CheckCircle size={16} color="#28a745" />
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Recommended Programs</h2>
          <div className="recommendations-grid">
            {results.recommendations.map((program, index) => (
              <div key={index} className="recommendation-card">
                <BookOpen size={24} color="#667eea" />
                <h3>{program}</h3>
                <p>Based on your interests and skills assessment</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Areas for Development</h2>
          <div className="development-grid">
            {results.areasForDevelopment.map((area, index) => (
              <div key={index} className="development-item">
                <Target size={20} color="#ffc107" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Next Steps</h2>
          <div className="next-steps">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Complete Personal Information</h3>
                <p>Provide your background and demographic information</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Take Pre-Entry Assessment</h3>
                <p>Assess your numeracy and literacy skills</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Complete Placement Tests</h3>
                <p>Take comprehensive placement assessments</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card text-center">
          <button onClick={resetAssessment} className="btn btn-secondary mr-3">
            Retake Assessment
          </button>
          <button className="btn btn-primary">
            Continue to Personal Information
          </button>
        </div>
      </div>
    );
  }

  const currentStepData = careerQuestions[currentStep];

  return (
    <div className="career-guidance">
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">
            <Compass className="mr-2" size={32} />
            Career Guidance Assessment
          </h1>
          <p>Self-help career support guidance to help you choose the right program</p>
        </div>
        
        <div className="progress-section">
          <div className="progress">
            <div 
              className="progress-bar" 
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
          <p className="progress-text">Step {currentStep} of {totalSteps}</p>
        </div>
      </div>

      <div className="card">
        <div className="assessment-header">
          <h2 className="card-title">{currentStepData.title}</h2>
          <p className="assessment-description">{currentStepData.description}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="assessment-form">
          {currentStepData.questions.map((question, questionIndex) => (
            <div key={question.id} className="question-group">
              <h3 className="question-title">{question.text}</h3>
              <div className="options-grid">
                {question.options.map((option, optionIndex) => (
                  <label key={optionIndex} className="option-label">
                    <input
                      type="radio"
                      {...register(question.id, { required: "Please select an option" })}
                      value={option.value}
                      className="option-input"
                    />
                    <span className="option-text">{option.label}</span>
                  </label>
                ))}
              </div>
              {errors[question.id] && (
                <p className="error-message">{errors[question.id].message}</p>
              )}
            </div>
          ))}

          <div className="form-actions">
            {currentStep > 1 && (
              <button 
                type="button" 
                onClick={() => setCurrentStep(currentStep - 1)}
                className="btn btn-secondary"
              >
                Previous
              </button>
            )}
            <button type="submit" className="btn btn-primary">
              {currentStep === totalSteps ? 'Complete Assessment' : 'Next Step'}
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerGuidance;
