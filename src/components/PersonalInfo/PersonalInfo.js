import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Calendar,
  Save,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const PersonalInfo = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);

  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const provinces = [
    'Eastern Cape',
    'Free State',
    'Gauteng',
    'KwaZulu-Natal',
    'Limpopo',
    'Mpumalanga',
    'Northern Cape',
    'North West',
    'Western Cape'
  ];

  const educationLevels = [
    'Grade 9',
    'Grade 10',
    'Grade 11',
    'Grade 12',
    'N3',
    'N4',
    'N5',
    'N6',
    'Certificate',
    'Diploma',
    'Degree'
  ];

  const onSubmit = (data) => {
    setFormData(data);
    setIsSubmitted(true);
    toast.success("Personal information saved successfully!");
    
    // In a real application, this would save to a database
    localStorage.setItem('personalInfo', JSON.stringify(data));
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData(null);
  };

  if (isSubmitted && formData) {
    return (
      <div className="personal-info">
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">
              <CheckCircle className="mr-2" size={32} color="#28a745" />
              Personal Information Submitted
            </h1>
            <p>Your information has been successfully saved</p>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Information Summary</h2>
          <div className="info-summary">
            <div className="summary-section">
              <h3>Personal Details</h3>
              <div className="summary-grid">
                <div className="summary-item">
                  <strong>Full Name:</strong> {formData.firstName} {formData.lastName}
                </div>
                <div className="summary-item">
                  <strong>ID Number:</strong> {formData.idNumber}
                </div>
                <div className="summary-item">
                  <strong>Date of Birth:</strong> {formData.dateOfBirth}
                </div>
                <div className="summary-item">
                  <strong>Gender:</strong> {formData.gender}
                </div>
                <div className="summary-item">
                  <strong>Contact:</strong> {formData.phoneNumber}
                </div>
                <div className="summary-item">
                  <strong>Email:</strong> {formData.email}
                </div>
              </div>
            </div>

            <div className="summary-section">
              <h3>Location Information</h3>
              <div className="summary-grid">
                <div className="summary-item">
                  <strong>Birth Province:</strong> {formData.birthProvince}
                </div>
                <div className="summary-item">
                  <strong>Current Address:</strong> {formData.currentAddress}
                </div>
                <div className="summary-item">
                  <strong>Postal Code:</strong> {formData.postalCode}
                </div>
              </div>
            </div>

            <div className="summary-section">
              <h3>Educational Background</h3>
              <div className="summary-grid">
                <div className="summary-item">
                  <strong>Last School:</strong> {formData.lastSchool}
                </div>
                <div className="summary-item">
                  <strong>Education Level:</strong> {formData.educationLevel}
                </div>
                <div className="summary-item">
                  <strong>Year Completed:</strong> {formData.yearCompleted}
                </div>
                <div className="summary-item">
                  <strong>Previous Qualifications:</strong> {formData.previousQualifications || 'None'}
                </div>
              </div>
            </div>

            <div className="summary-section">
              <h3>Additional Information</h3>
              <div className="summary-grid">
                <div className="summary-item">
                  <strong>Disabilities:</strong> {formData.disabilities || 'None reported'}
                </div>
                <div className="summary-item">
                  <strong>Special Needs:</strong> {formData.specialNeeds || 'None reported'}
                </div>
                <div className="summary-item">
                  <strong>Emergency Contact:</strong> {formData.emergencyContact}
                </div>
                <div className="summary-item">
                  <strong>Emergency Phone:</strong> {formData.emergencyPhone}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Next Steps</h2>
          <div className="next-steps">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Complete Pre-Entry Assessment</h3>
                <p>Assess your numeracy and literacy skills to determine your readiness</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Take Placement Tests</h3>
                <p>Complete comprehensive placement assessments for course selection</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card text-center">
          <button onClick={resetForm} className="btn btn-secondary mr-3">
            Edit Information
          </button>
          <button className="btn btn-primary">
            Continue to Pre-Entry Assessment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="personal-info">
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">
            <User className="mr-2" size={32} />
            Personal Information
          </h1>
          <p>Please provide your personal details and background information</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="personal-info-form">
        {/* Personal Details Section */}
        <div className="card">
          <h2 className="card-title">Personal Details</h2>
          <div className="grid grid-2">
            <div className="form-group">
              <label className="form-label">First Name *</label>
              <input
                type="text"
                className={`form-control ${errors.firstName ? 'error' : ''}`}
                {...register('firstName', { required: 'First name is required' })}
                placeholder="Enter your first name"
              />
              {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Last Name *</label>
              <input
                type="text"
                className={`form-control ${errors.lastName ? 'error' : ''}`}
                {...register('lastName', { required: 'Last name is required' })}
                placeholder="Enter your last name"
              />
              {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">ID Number *</label>
              <input
                type="text"
                className={`form-control ${errors.idNumber ? 'error' : ''}`}
                {...register('idNumber', { 
                  required: 'ID number is required',
                  pattern: {
                    value: /^[0-9]{13}$/,
                    message: 'ID number must be 13 digits'
                  }
                })}
                placeholder="Enter your 13-digit ID number"
              />
              {errors.idNumber && <p className="error-message">{errors.idNumber.message}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Date of Birth *</label>
              <input
                type="date"
                className={`form-control ${errors.dateOfBirth ? 'error' : ''}`}
                {...register('dateOfBirth', { required: 'Date of birth is required' })}
              />
              {errors.dateOfBirth && <p className="error-message">{errors.dateOfBirth.message}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Gender *</label>
              <select
                className={`form-control ${errors.gender ? 'error' : ''}`}
                {...register('gender', { required: 'Gender is required' })}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <p className="error-message">{errors.gender.message}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input
                type="tel"
                className={`form-control ${errors.phoneNumber ? 'error' : ''}`}
                {...register('phoneNumber', { 
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Phone number must be 10 digits'
                  }
                })}
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'error' : ''}`}
                {...register('email', {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
          </div>
        </div>

        {/* Location Information Section */}
        <div className="card">
          <h2 className="card-title">Location Information</h2>
          <div className="grid grid-2">
            <div className="form-group">
              <label className="form-label">Birth Province *</label>
              <select
                className={`form-control ${errors.birthProvince ? 'error' : ''}`}
                {...register('birthProvince', { required: 'Birth province is required' })}
              >
                <option value="">Select province</option>
                {provinces.map(province => (
                  <option key={province} value={province}>{province}</option>
                ))}
              </select>
              {errors.birthProvince && <p className="error-message">{errors.birthProvince.message}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Current Address *</label>
              <textarea
                className={`form-control ${errors.currentAddress ? 'error' : ''}`}
                {...register('currentAddress', { required: 'Current address is required' })}
                placeholder="Enter your current address"
                rows="3"
              />
              {errors.currentAddress && <p className="error-message">{errors.currentAddress.message}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Postal Code *</label>
              <input
                type="text"
                className={`form-control ${errors.postalCode ? 'error' : ''}`}
                {...register('postalCode', { 
                  required: 'Postal code is required',
                  pattern: {
                    value: /^[0-9]{4}$/,
                    message: 'Postal code must be 4 digits'
                  }
                })}
                placeholder="Enter your postal code"
              />
              {errors.postalCode && <p className="error-message">{errors.postalCode.message}</p>}
            </div>
          </div>
        </div>

        {/* Educational Background Section */}
        <div className="card">
          <h2 className="card-title">Educational Background</h2>
          <div className="grid grid-2">
            <div className="form-group">
              <label className="form-label">Last School Attended *</label>
              <input
                type="text"
                className={`form-control ${errors.lastSchool ? 'error' : ''}`}
                {...register('lastSchool', { required: 'Last school is required' })}
                placeholder="Enter the name of your last school"
              />
              {errors.lastSchool && <p className="error-message">{errors.lastSchool.message}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Education Level *</label>
              <select
                className={`form-control ${errors.educationLevel ? 'error' : ''}`}
                {...register('educationLevel', { required: 'Education level is required' })}
              >
                <option value="">Select education level</option>
                {educationLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              {errors.educationLevel && <p className="error-message">{errors.educationLevel.message}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Year Completed</label>
              <input
                type="number"
                className={`form-control ${errors.yearCompleted ? 'error' : ''}`}
                {...register('yearCompleted', {
                  min: { value: 1990, message: 'Year must be 1990 or later' },
                  max: { value: new Date().getFullYear(), message: 'Year cannot be in the future' }
                })}
                placeholder="Enter the year you completed"
                min="1990"
                max={new Date().getFullYear()}
              />
              {errors.yearCompleted && <p className="error-message">{errors.yearCompleted.message}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Previous Qualifications</label>
              <textarea
                className="form-control"
                {...register('previousQualifications')}
                placeholder="List any previous qualifications or certificates"
                rows="3"
              />
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="card">
          <h2 className="card-title">Additional Information</h2>
          <div className="grid grid-2">
            <div className="form-group">
              <label className="form-label">Disabilities</label>
              <textarea
                className="form-control"
                {...register('disabilities')}
                placeholder="Please describe any disabilities (optional)"
                rows="3"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Special Needs</label>
              <textarea
                className="form-control"
                {...register('specialNeeds')}
                placeholder="Please describe any special needs or accommodations required (optional)"
                rows="3"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Emergency Contact Name *</label>
              <input
                type="text"
                className={`form-control ${errors.emergencyContact ? 'error' : ''}`}
                {...register('emergencyContact', { required: 'Emergency contact name is required' })}
                placeholder="Enter emergency contact name"
              />
              {errors.emergencyContact && <p className="error-message">{errors.emergencyContact.message}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Emergency Contact Phone *</label>
              <input
                type="tel"
                className={`form-control ${errors.emergencyPhone ? 'error' : ''}`}
                {...register('emergencyPhone', { 
                  required: 'Emergency contact phone is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Phone number must be 10 digits'
                  }
                })}
                placeholder="Enter emergency contact phone"
              />
              {errors.emergencyPhone && <p className="error-message">{errors.emergencyPhone.message}</p>}
            </div>
          </div>
        </div>

        <div className="card text-center">
          <button type="submit" className="btn btn-primary">
            <Save className="mr-2" size={20} />
            Save Personal Information
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
