import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { 
  Users, 
  Mail, 
  Phone, 
  Briefcase,
  MapPin,
  Calendar,
  Plus,
  Edit2,
  Trash2,
  Search,
  Filter,
  Eye,
  X,
  Building2,
  DollarSign,
  TrendingUp,
  Award,
  Linkedin
} from 'lucide-react';

const AlumniTracking = () => {
  const [alumni, setAlumni] = useState([]);
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedAlumnus, setSelectedAlumnus] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterYear, setFilterYear] = useState('all');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    studentNumber: '',
    email: '',
    phone: '',
    graduationYear: '',
    programme: '',
    employmentStatus: 'employed',
    currentEmployer: '',
    jobTitle: '',
    industry: '',
    salary: '',
    location: '',
    linkedinUrl: '',
    notes: ''
  });

  // Sample data
  useEffect(() => {
    const sampleAlumni = [
      {
        id: 1,
        firstName: 'Sarah',
        lastName: 'Johnson',
        studentNumber: 'WC2019001',
        email: 'sarah.johnson@email.com',
        phone: '+27 82 123 4567',
        graduationYear: '2019',
        programme: 'Information Technology N6',
        employmentStatus: 'employed',
        currentEmployer: 'Tech Solutions SA',
        jobTitle: 'Software Developer',
        industry: 'Technology',
        salary: '45000',
        location: 'Cape Town',
        linkedinUrl: 'https://linkedin.com/in/sarahjohnson',
        notes: 'Excellent student, pursuing further studies'
      },
      {
        id: 2,
        firstName: 'Michael',
        lastName: 'Dlamini',
        studentNumber: 'WC2020045',
        email: 'michael.dlamini@email.com',
        phone: '+27 83 234 5678',
        graduationYear: '2020',
        programme: 'Business Management N6',
        employmentStatus: 'self-employed',
        currentEmployer: 'MD Consulting',
        jobTitle: 'Business Consultant',
        industry: 'Consulting',
        salary: '35000',
        location: 'Johannesburg',
        linkedinUrl: '',
        notes: 'Started own consulting firm'
      },
      {
        id: 3,
        firstName: 'Thandiwe',
        lastName: 'Mkhize',
        studentNumber: 'WC2021078',
        email: 'thandiwe.mkhize@email.com',
        phone: '+27 84 345 6789',
        graduationYear: '2021',
        programme: 'Engineering Studies N6',
        employmentStatus: 'employed',
        currentEmployer: 'Engineering Corp',
        jobTitle: 'Junior Engineer',
        industry: 'Engineering',
        salary: '38000',
        location: 'Durban',
        linkedinUrl: 'https://linkedin.com/in/thandiwemkhize',
        notes: 'Top performer in cohort'
      },
      {
        id: 4,
        firstName: 'John',
        lastName: 'Peters',
        studentNumber: 'WC2018034',
        email: 'john.peters@email.com',
        phone: '+27 85 456 7890',
        graduationYear: '2018',
        programme: 'Hospitality Management N6',
        employmentStatus: 'unemployed',
        currentEmployer: '',
        jobTitle: '',
        industry: '',
        salary: '',
        location: 'Port Elizabeth',
        linkedinUrl: '',
        notes: 'Seeking employment opportunities'
      }
    ];
    
    // Load from localStorage if available
    const savedAlumni = localStorage.getItem('alumniData');
    if (savedAlumni) {
      const parsed = JSON.parse(savedAlumni);
      setAlumni(parsed);
      setFilteredAlumni(parsed);
    } else {
      setAlumni(sampleAlumni);
      setFilteredAlumni(sampleAlumni);
    }
  }, []);

  // Filter and search
  useEffect(() => {
    let filtered = [...alumni];

    if (searchQuery) {
      filtered = filtered.filter(alum =>
        alum.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alum.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alum.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alum.studentNumber.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterStatus !== 'all') {
      filtered = filtered.filter(alum => alum.employmentStatus === filterStatus);
    }

    if (filterYear !== 'all') {
      filtered = filtered.filter(alum => alum.graduationYear === filterYear);
    }

    setFilteredAlumni(filtered);
  }, [searchQuery, filterStatus, filterYear, alumni]);

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      studentNumber: '',
      email: '',
      phone: '',
      graduationYear: '',
      programme: '',
      employmentStatus: 'employed',
      currentEmployer: '',
      jobTitle: '',
      industry: '',
      salary: '',
      location: '',
      linkedinUrl: '',
      notes: ''
    });
  };

  const handleAddAlumnus = () => {
    setEditMode(false);
    resetForm();
    setShowAddModal(true);
  };

  const handleEditAlumnus = (alum) => {
    setEditMode(true);
    setSelectedAlumnus(alum);
    setFormData(alum);
    setShowAddModal(true);
  };

  const handleViewAlumnus = (alum) => {
    setSelectedAlumnus(alum);
    setShowViewModal(true);
  };

  const handleDeleteAlumnus = (id) => {
    if (window.confirm('Are you sure you want to delete this alumni record?')) {
      const updated = alumni.filter(alum => alum.id !== id);
      setAlumni(updated);
      localStorage.setItem('alumniData', JSON.stringify(updated));
      toast.success('Alumni record deleted successfully!');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editMode) {
      const updated = alumni.map(alum =>
        alum.id === selectedAlumnus.id ? { ...formData, id: alum.id } : alum
      );
      setAlumni(updated);
      localStorage.setItem('alumniData', JSON.stringify(updated));
      toast.success('Alumni record updated successfully!');
    } else {
      const newAlumnus = {
        ...formData,
        id: Date.now()
      };
      const updated = [...alumni, newAlumnus];
      setAlumni(updated);
      localStorage.setItem('alumniData', JSON.stringify(updated));
      toast.success('Alumni record added successfully!');
    }
    
    setShowAddModal(false);
    resetForm();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Statistics
  const stats = {
    total: alumni.length,
    employed: alumni.filter(a => a.employmentStatus === 'employed').length,
    selfEmployed: alumni.filter(a => a.employmentStatus === 'self-employed').length,
    unemployed: alumni.filter(a => a.employmentStatus === 'unemployed').length,
    studying: alumni.filter(a => a.employmentStatus === 'studying').length
  };

  const employmentRate = alumni.length > 0 
    ? ((stats.employed + stats.selfEmployed) / alumni.length * 100).toFixed(1)
    : 0;

  const graduationYears = [...new Set(alumni.map(a => a.graduationYear))].sort().reverse();

  return (
    <div className="alumni-tracking">
      {/* Header */}
      <div className="card">
        <div className="card-header">
          <div>
            <h1 className="card-title">
              <Users className="mr-2" size={32} />
              Alumni Tracking
            </h1>
            <p>Track and engage with college alumni for feedback and career insights</p>
          </div>
          <button className="btn btn-primary" onClick={handleAddAlumnus}>
            <Plus size={20} className="mr-2" />
            Add Alumni
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-4">
        <div className="card stat-card">
          <div className="stat-number">{stats.total}</div>
          <div className="stat-label">Total Alumni</div>
          <Users className="mt-3" size={40} color="#667eea" />
        </div>
        <div className="card stat-card">
          <div className="stat-number">{stats.employed + stats.selfEmployed}</div>
          <div className="stat-label">Employed</div>
          <Briefcase className="mt-3" size={40} color="#28a745" />
        </div>
        <div className="card stat-card">
          <div className="stat-number">{employmentRate}%</div>
          <div className="stat-label">Employment Rate</div>
          <TrendingUp className="mt-3" size={40} color="#17a2b8" />
        </div>
        <div className="card stat-card">
          <div className="stat-number">{stats.studying}</div>
          <div className="stat-label">Further Studies</div>
          <Award className="mt-3" size={40} color="#ffc107" />
        </div>
      </div>

      {/* Search and Filters */}
      <div className="card">
        <div className="grid grid-3">
          <div className="form-group mb-0">
            <label className="form-label">
              <Search size={16} className="mr-2" />
              Search Alumni
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Search by name, email, or student number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="form-group mb-0">
            <label className="form-label">
              <Filter size={16} className="mr-2" />
              Employment Status
            </label>
            <select
              className="form-control"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="employed">Employed</option>
              <option value="self-employed">Self-Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="studying">Studying</option>
            </select>
          </div>
          <div className="form-group mb-0">
            <label className="form-label">
              <Calendar size={16} className="mr-2" />
              Graduation Year
            </label>
            <select
              className="form-control"
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
            >
              <option value="all">All Years</option>
              {graduationYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Alumni List */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Alumni Directory ({filteredAlumni.length})</h2>
        </div>
        
        {filteredAlumni.length === 0 ? (
          <div className="feature-preview">
            <Users size={48} color="#6c757d" />
            <p>No alumni records found</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="alumni-table">
              <thead>
                <tr>
                  <th>Student No.</th>
                  <th>Name</th>
                  <th>Programme</th>
                  <th>Graduation</th>
                  <th>Status</th>
                  <th>Current Position</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAlumni.map((alum) => (
                  <tr key={alum.id}>
                    <td>{alum.studentNumber}</td>
                    <td>
                      <div>
                        <strong>{alum.firstName} {alum.lastName}</strong>
                        <div style={{ fontSize: '0.85rem', color: '#6c757d' }}>
                          {alum.email}
                        </div>
                      </div>
                    </td>
                    <td>{alum.programme}</td>
                    <td>{alum.graduationYear}</td>
                    <td>
                      <span className={`status-badge status-${alum.employmentStatus}`}>
                        {alum.employmentStatus.replace('-', ' ')}
                      </span>
                    </td>
                    <td>
                      {alum.employmentStatus === 'employed' || alum.employmentStatus === 'self-employed' ? (
                        <div>
                          <strong>{alum.jobTitle}</strong>
                          <div style={{ fontSize: '0.85rem', color: '#6c757d' }}>
                            {alum.currentEmployer}
                          </div>
                        </div>
                      ) : (
                        <span style={{ color: '#6c757d' }}>-</span>
                      )}
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="btn-icon"
                          onClick={() => handleViewAlumnus(alum)}
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          className="btn-icon"
                          onClick={() => handleEditAlumnus(alum)}
                          title="Edit"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          className="btn-icon btn-icon-danger"
                          onClick={() => handleDeleteAlumnus(alum.id)}
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editMode ? 'Edit Alumni Record' : 'Add New Alumni'}</h2>
              <button className="btn-icon" onClick={() => setShowAddModal(false)}>
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <h3 className="section-title">Personal Information</h3>
                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Student Number *</label>
                    <input
                      type="text"
                      name="studentNumber"
                      className="form-control"
                      value={formData.studentNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      name="location"
                      className="form-control"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <h3 className="section-title mt-4">Academic Information</h3>
                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">Programme *</label>
                    <input
                      type="text"
                      name="programme"
                      className="form-control"
                      value={formData.programme}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Graduation Year *</label>
                    <input
                      type="text"
                      name="graduationYear"
                      className="form-control"
                      value={formData.graduationYear}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <h3 className="section-title mt-4">Employment Information</h3>
                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">Employment Status *</label>
                    <select
                      name="employmentStatus"
                      className="form-control"
                      value={formData.employmentStatus}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="employed">Employed</option>
                      <option value="self-employed">Self-Employed</option>
                      <option value="unemployed">Unemployed</option>
                      <option value="studying">Studying</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Current Employer</label>
                    <input
                      type="text"
                      name="currentEmployer"
                      className="form-control"
                      value={formData.currentEmployer}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Job Title</label>
                    <input
                      type="text"
                      name="jobTitle"
                      className="form-control"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Industry</label>
                    <input
                      type="text"
                      name="industry"
                      className="form-control"
                      value={formData.industry}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Salary (Monthly)</label>
                    <input
                      type="text"
                      name="salary"
                      className="form-control"
                      value={formData.salary}
                      onChange={handleInputChange}
                      placeholder="e.g., 35000"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">LinkedIn Profile</label>
                    <input
                      type="url"
                      name="linkedinUrl"
                      className="form-control"
                      value={formData.linkedinUrl}
                      onChange={handleInputChange}
                      placeholder="https://linkedin.com/in/..."
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Notes</label>
                  <textarea
                    name="notes"
                    className="form-control"
                    rows="3"
                    value={formData.notes}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editMode ? 'Update Alumni' : 'Add Alumni'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Modal */}
      {showViewModal && selectedAlumnus && (
        <div className="modal-overlay" onClick={() => setShowViewModal(false)}>
          <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Alumni Profile</h2>
              <button className="btn-icon" onClick={() => setShowViewModal(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="profile-header">
                <div className="profile-avatar">
                  {selectedAlumnus.firstName[0]}{selectedAlumnus.lastName[0]}
                </div>
                <div>
                  <h2>{selectedAlumnus.firstName} {selectedAlumnus.lastName}</h2>
                  <p className="profile-subtitle">{selectedAlumnus.programme}</p>
                  <span className={`status-badge status-${selectedAlumnus.employmentStatus}`}>
                    {selectedAlumnus.employmentStatus.replace('-', ' ')}
                  </span>
                </div>
              </div>

              <div className="profile-details">
                <div className="detail-section">
                  <h3><Users size={20} className="mr-2" />Personal Information</h3>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <span className="detail-label">Student Number:</span>
                      <span>{selectedAlumnus.studentNumber}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Email:</span>
                      <span>
                        <Mail size={14} className="mr-2" />
                        <a href={`mailto:${selectedAlumnus.email}`}>{selectedAlumnus.email}</a>
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Phone:</span>
                      <span>
                        <Phone size={14} className="mr-2" />
                        {selectedAlumnus.phone}
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Location:</span>
                      <span>
                        <MapPin size={14} className="mr-2" />
                        {selectedAlumnus.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="detail-section">
                  <h3><Award size={20} className="mr-2" />Academic Information</h3>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <span className="detail-label">Programme:</span>
                      <span>{selectedAlumnus.programme}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Graduation Year:</span>
                      <span>
                        <Calendar size={14} className="mr-2" />
                        {selectedAlumnus.graduationYear}
                      </span>
                    </div>
                  </div>
                </div>

                {(selectedAlumnus.employmentStatus === 'employed' || 
                  selectedAlumnus.employmentStatus === 'self-employed') && (
                  <div className="detail-section">
                    <h3><Briefcase size={20} className="mr-2" />Employment Information</h3>
                    <div className="detail-grid">
                      <div className="detail-item">
                        <span className="detail-label">Employer:</span>
                        <span>
                          <Building2 size={14} className="mr-2" />
                          {selectedAlumnus.currentEmployer}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Job Title:</span>
                        <span>{selectedAlumnus.jobTitle}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Industry:</span>
                        <span>{selectedAlumnus.industry}</span>
                      </div>
                      {selectedAlumnus.salary && (
                        <div className="detail-item">
                          <span className="detail-label">Salary:</span>
                          <span>
                            <DollarSign size={14} className="mr-2" />
                            R{selectedAlumnus.salary}/month
                          </span>
                        </div>
                      )}
                      {selectedAlumnus.linkedinUrl && (
                        <div className="detail-item">
                          <span className="detail-label">LinkedIn:</span>
                          <span>
                            <Linkedin size={14} className="mr-2" />
                            <a href={selectedAlumnus.linkedinUrl} target="_blank" rel="noopener noreferrer">
                              View Profile
                            </a>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {selectedAlumnus.notes && (
                  <div className="detail-section">
                    <h3>Notes</h3>
                    <p>{selectedAlumnus.notes}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowViewModal(false)}>
                Close
              </button>
              <button 
                className="btn btn-primary" 
                onClick={() => {
                  setShowViewModal(false);
                  handleEditAlumnus(selectedAlumnus);
                }}
              >
                <Edit2 size={18} className="mr-2" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlumniTracking;
