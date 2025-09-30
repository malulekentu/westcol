import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  UserCheck,
  TrendingUp,
  Calendar,
  Award,
  Search,
  Filter,
  Eye,
  AlertTriangle,
  CheckCircle,
  Clock,
  Target,
  BarChart3,
  Activity,
  Users,
  BookOpen,
  GraduationCap,
  TrendingDown,
  Minus,
  Plus,
  X,
  RefreshCw,
  Download,
  FileText,
  Bell,
  BellOff
} from 'lucide-react';

const StudentTracking = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterProgramme, setFilterProgramme] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedStudentData, setSelectedStudentData] = useState(null);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [interventionAlerts, setInterventionAlerts] = useState([]);

  // Sample data
  useEffect(() => {
    const sampleStudents = [
      {
        id: 1,
        name: 'Sarah Johnson',
        studentNumber: 'WC2019001',
        programme: 'Information Technology N6',
        class: 'IT2023A',
        campus: 'Main Campus',
        status: 'active',
        progress: {
          preEntry: { completed: true, score: 85, date: '2023-08-15' },
          placement: { completed: true, score: 78, date: '2023-08-20' },
          careerGuidance: { completed: true, score: 92, date: '2023-08-25' },
          workReadiness: { completed: false, score: null, date: null },
          interpersonal: { completed: false, score: null, date: null }
        },
        performance: {
          attendance: 95,
          assignments: 88,
          tests: 82,
          exams: 85,
          overall: 87
        },
        timeline: [
          { milestone: 'Enrollment', date: '2023-08-01', status: 'completed' },
          { milestone: 'Pre-Entry Assessment', date: '2023-08-15', status: 'completed' },
          { milestone: 'Placement Tests', date: '2023-08-20', status: 'completed' },
          { milestone: 'Career Guidance', date: '2023-08-25', status: 'completed' },
          { milestone: 'Work Readiness Assessment', date: '2023-10-01', status: 'pending' },
          { milestone: 'Exit Support', date: '2023-10-15', status: 'pending' },
          { milestone: 'Graduation', date: '2023-11-30', status: 'pending' }
        ],
        riskLevel: 'low',
        lastActivity: '2023-09-25'
      },
      {
        id: 2,
        name: 'Michael Dlamini',
        studentNumber: 'WC2020045',
        programme: 'Business Management N6',
        class: 'BM2023B',
        campus: 'City Campus',
        status: 'active',
        progress: {
          preEntry: { completed: true, score: 72, date: '2023-08-10' },
          placement: { completed: true, score: 68, date: '2023-08-18' },
          careerGuidance: { completed: false, score: null, date: null },
          workReadiness: { completed: false, score: null, date: null },
          interpersonal: { completed: false, score: null, date: null }
        },
        performance: {
          attendance: 78,
          assignments: 75,
          tests: 71,
          exams: 74,
          overall: 74
        },
        timeline: [
          { milestone: 'Enrollment', date: '2023-08-01', status: 'completed' },
          { milestone: 'Pre-Entry Assessment', date: '2023-08-10', status: 'completed' },
          { milestone: 'Placement Tests', date: '2023-08-18', status: 'completed' },
          { milestone: 'Career Guidance', date: '2023-09-01', status: 'overdue' },
          { milestone: 'Work Readiness Assessment', date: '2023-10-01', status: 'pending' },
          { milestone: 'Exit Support', date: '2023-10-15', status: 'pending' },
          { milestone: 'Graduation', date: '2023-11-30', status: 'pending' }
        ],
        riskLevel: 'medium',
        lastActivity: '2023-09-10'
      },
      {
        id: 3,
        name: 'Thandiwe Mkhize',
        studentNumber: 'WC2021078',
        programme: 'Engineering Studies N6',
        class: 'ENG2023A',
        campus: 'Main Campus',
        status: 'active',
        progress: {
          preEntry: { completed: true, score: 91, date: '2023-08-05' },
          placement: { completed: true, score: 89, date: '2023-08-12' },
          careerGuidance: { completed: true, score: 94, date: '2023-08-20' },
          workReadiness: { completed: true, score: 87, date: '2023-09-01' },
          interpersonal: { completed: false, score: null, date: null }
        },
        performance: {
          attendance: 98,
          assignments: 95,
          tests: 92,
          exams: 96,
          overall: 95
        },
        timeline: [
          { milestone: 'Enrollment', date: '2023-08-01', status: 'completed' },
          { milestone: 'Pre-Entry Assessment', date: '2023-08-05', status: 'completed' },
          { milestone: 'Placement Tests', date: '2023-08-12', status: 'completed' },
          { milestone: 'Career Guidance', date: '2023-08-20', status: 'completed' },
          { milestone: 'Work Readiness Assessment', date: '2023-09-01', status: 'completed' },
          { milestone: 'Exit Support', date: '2023-09-15', status: 'in-progress' },
          { milestone: 'Graduation', date: '2023-11-30', status: 'pending' }
        ],
        riskLevel: 'low',
        lastActivity: '2023-09-28'
      },
      {
        id: 4,
        name: 'John Peters',
        studentNumber: 'WC2018034',
        programme: 'Hospitality Management N6',
        class: 'HM2022B',
        campus: 'City Campus',
        status: 'inactive',
        progress: {
          preEntry: { completed: true, score: 65, date: '2023-08-01' },
          placement: { completed: false, score: null, date: null },
          careerGuidance: { completed: false, score: null, date: null },
          workReadiness: { completed: false, score: null, date: null },
          interpersonal: { completed: false, score: null, date: null }
        },
        performance: {
          attendance: 45,
          assignments: 52,
          tests: 48,
          exams: 50,
          overall: 49
        },
        timeline: [
          { milestone: 'Enrollment', date: '2023-08-01', status: 'completed' },
          { milestone: 'Pre-Entry Assessment', date: '2023-08-01', status: 'completed' },
          { milestone: 'Placement Tests', date: '2023-08-15', status: 'overdue' },
          { milestone: 'Career Guidance', date: '2023-09-01', status: 'overdue' },
          { milestone: 'Work Readiness Assessment', date: '2023-10-01', status: 'pending' },
          { milestone: 'Exit Support', date: '2023-10-15', status: 'pending' },
          { milestone: 'Graduation', date: '2023-11-30', status: 'pending' }
        ],
        riskLevel: 'high',
        lastActivity: '2023-08-15'
      }
    ];

    setStudents(sampleStudents);
    setFilteredStudents(sampleStudents);

    // Generate intervention alerts
    const alerts = sampleStudents
      .filter(student => student.riskLevel !== 'low' || student.status === 'inactive')
      .map(student => ({
        id: student.id,
        studentName: student.name,
        type: student.riskLevel === 'high' ? 'high-risk' : student.status === 'inactive' ? 'inactive' : 'medium-risk',
        message: student.riskLevel === 'high' ? 'Student showing signs of disengagement' :
                 student.status === 'inactive' ? 'Student has become inactive' : 'Student needs additional support',
        priority: student.riskLevel === 'high' ? 'high' : 'medium',
        date: new Date().toISOString().split('T')[0]
      }));

    setInterventionAlerts(alerts);
  }, []);

  // Filter students based on search and filters
  useEffect(() => {
    let filtered = [...students];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(student =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.studentNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.programme.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Status filter
    if (filterStatus !== 'all') {
      filtered = filtered.filter(student => student.status === filterStatus);
    }

    // Programme filter
    if (filterProgramme !== 'all') {
      filtered = filtered.filter(student => student.programme === filterProgramme);
    }

    setFilteredStudents(filtered);
  }, [searchQuery, filterStatus, filterProgramme, students]);

  const handleViewStudent = (student) => {
    setSelectedStudentData(student);
    setShowStudentModal(true);
  };

  const getProgressPercentage = (progress) => {
    const completed = Object.values(progress).filter(p => p.completed).length;
    return Math.round((completed / 5) * 100);
  };

  const getRiskColor = (riskLevel) => {
    switch (riskLevel) {
      case 'high': return '#dc3545';
      case 'medium': return '#ffc107';
      case 'low': return '#28a745';
      default: return '#6c757d';
    }
  };

  const getRiskIcon = (riskLevel) => {
    switch (riskLevel) {
      case 'high': return <AlertTriangle size={16} color="#dc3545" />;
      case 'medium': return <Minus size={16} color="#ffc107" />;
      case 'low': return <CheckCircle size={16} color="#28a745" />;
      default: return <Minus size={16} color="#6c757d" />;
    }
  };

  // Overview Dashboard
  const renderOverview = () => {
    const totalStudents = students.length;
    const activeStudents = students.filter(s => s.status === 'active').length;
    const highRiskStudents = students.filter(s => s.riskLevel === 'high').length;
    const averageProgress = Math.round(students.reduce((sum, s) => sum + getProgressPercentage(s.progress), 0) / students.length);
    const averagePerformance = Math.round(students.reduce((sum, s) => sum + s.performance.overall, 0) / students.length);

    return (
      <div>
        {/* Summary Cards */}
        <div className="grid grid-4">
          <div className="card metric-card">
            <div className="metric-number">{totalStudents}</div>
            <div className="metric-label">Total Students</div>
            <Users className="metric-icon" size={40} color="#667eea" />
          </div>
          <div className="card metric-card">
            <div className="metric-number">{activeStudents}</div>
            <div className="metric-label">Active Students</div>
            <UserCheck className="metric-icon" size={40} color="#28a745" />
          </div>
          <div className="card metric-card">
            <div className="metric-number">{averageProgress}%</div>
            <div className="metric-label">Average Progress</div>
            <TrendingUp className="metric-icon" size={40} color="#17a2b8" />
          </div>
          <div className="card metric-card">
            <div className="metric-number">{highRiskStudents}</div>
            <div className="metric-label">High Risk</div>
            <AlertTriangle className="metric-icon" size={40} color="#dc3545" />
          </div>
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-2">
          <div className="card">
            <h2 className="card-title">
              <BarChart3 className="mr-2" size={24} />
              Progress Distribution
            </h2>
            <div className="chart-placeholder">
              <div className="chart-bars">
                {['0-20%', '21-40%', '41-60%', '61-80%', '81-100%'].map((range, index) => {
                  const count = students.filter(s => {
                    const progress = getProgressPercentage(s.progress);
                    const [min, max] = range.split('-').map(r => parseInt(r.replace('%', '')));
                    return progress >= min && progress <= max;
                  }).length;

                  return (
                    <div key={range} className="chart-bar" style={{ height: `${(count / totalStudents) * 100}%` }}>
                      <span className="chart-label">{range}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-title">
              <TrendingUp className="mr-2" size={24} />
              Performance Overview
            </h2>
            <div className="performance-overview">
              <div className="performance-item">
                <div className="performance-label">Average Performance</div>
                <div className="performance-value">{averagePerformance}%</div>
              </div>
              <div className="performance-item">
                <div className="performance-label">Average Attendance</div>
                <div className="performance-value">{Math.round(students.reduce((sum, s) => sum + s.performance.attendance, 0) / students.length)}%</div>
              </div>
              <div className="performance-item">
                <div className="performance-label">Completion Rate</div>
                <div className="performance-value">{Math.round((activeStudents / totalStudents) * 100)}%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Intervention Alerts */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              <Bell className="mr-2" size={24} />
              Intervention Alerts ({interventionAlerts.length})
            </h2>
          </div>
          <div className="alerts-list">
            {interventionAlerts.length === 0 ? (
              <div className="no-alerts">
                <CheckCircle size={48} color="#28a745" />
                <p>No intervention alerts at this time</p>
              </div>
            ) : (
              interventionAlerts.map((alert, index) => (
                <div key={alert.id} className={`alert-item alert-${alert.priority}`}>
                  <div className="alert-icon">
                    {alert.type === 'high-risk' ? <AlertTriangle size={20} color="#dc3545" /> :
                     alert.type === 'inactive' ? <UserCheck size={20} color="#ffc107" /> :
                     <Minus size={20} color="#17a2b8" />}
                  </div>
                  <div className="alert-content">
                    <div className="alert-title">{alert.studentName}</div>
                    <div className="alert-message">{alert.message}</div>
                    <div className="alert-date">{alert.date}</div>
                  </div>
                  <div className="alert-actions">
                    <button className="btn btn-sm btn-primary">View Profile</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  };

  // Students List
  const renderStudentsList = () => (
    <div>
      {/* Search and Filters */}
      <div className="card">
        <div className="grid grid-3">
          <div className="form-group mb-0">
            <label className="form-label">
              <Search size={16} className="mr-2" />
              Search Students
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Search by name, student number, or programme..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="form-group mb-0">
            <label className="form-label">
              <Filter size={16} className="mr-2" />
              Status
            </label>
            <select
              className="form-control"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="form-group mb-0">
            <label className="form-label">
              <Filter size={16} className="mr-2" />
              Programme
            </label>
            <select
              className="form-control"
              value={filterProgramme}
              onChange={(e) => setFilterProgramme(e.target.value)}
            >
              <option value="all">All Programmes</option>
              <option value="Information Technology N6">Information Technology</option>
              <option value="Business Management N6">Business Management</option>
              <option value="Engineering Studies N6">Engineering Studies</option>
              <option value="Hospitality Management N6">Hospitality Management</option>
            </select>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Students Overview ({filteredStudents.length})</h2>
        </div>

        {filteredStudents.length === 0 ? (
          <div className="feature-preview">
            <Users size={48} color="#6c757d" />
            <p>No students found matching your criteria</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="students-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Programme</th>
                  <th>Progress</th>
                  <th>Performance</th>
                  <th>Risk Level</th>
                  <th>Last Activity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>
                      <div>
                        <strong>{student.name}</strong>
                        <div style={{ fontSize: '0.85rem', color: '#6c757d' }}>
                          {student.studentNumber}
                        </div>
                      </div>
                    </td>
                    <td>{student.programme}</td>
                    <td>
                      <div className="progress-cell">
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{ width: `${getProgressPercentage(student.progress)}%` }}
                          ></div>
                        </div>
                        <span className="progress-text">{getProgressPercentage(student.progress)}%</span>
                      </div>
                    </td>
                    <td>
                      <span className={`performance-badge ${student.performance.overall >= 80 ? 'excellent' : student.performance.overall >= 60 ? 'good' : 'needs-improvement'}`}>
                        {student.performance.overall}%
                      </span>
                    </td>
                    <td>
                      <div className="risk-indicator">
                        {getRiskIcon(student.riskLevel)}
                        <span style={{ marginLeft: '8px', textTransform: 'capitalize' }}>
                          {student.riskLevel}
                        </span>
                      </div>
                    </td>
                    <td>{student.lastActivity}</td>
                    <td>
                      <button
                        className="btn-icon"
                        onClick={() => handleViewStudent(student)}
                        title="View Details"
                      >
                        <Eye size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );

  // Individual Student Modal
  const renderStudentModal = () => {
    if (!selectedStudentData) return null;

    return (
      <div className="modal-overlay" onClick={() => setShowStudentModal(false)}>
        <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Student Profile: {selectedStudentData.name}</h2>
            <button className="btn-icon" onClick={() => setShowStudentModal(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="modal-body">
            {/* Student Info */}
            <div className="student-profile-header">
              <div>
                <h3>{selectedStudentData.name}</h3>
                <p>{selectedStudentData.studentNumber} • {selectedStudentData.programme}</p>
                <div className="student-badges">
                  <span className={`status-badge ${selectedStudentData.status}`}>
                    {selectedStudentData.status}
                  </span>
                  <span className={`risk-badge risk-${selectedStudentData.riskLevel}`}>
                    {getRiskIcon(selectedStudentData.riskLevel)}
                    {selectedStudentData.riskLevel} risk
                  </span>
                </div>
              </div>
            </div>

            {/* Progress Overview */}
            <div className="profile-section">
              <h4>Assessment Progress</h4>
              <div className="progress-grid">
                {Object.entries(selectedStudentData.progress).map(([module, data]) => (
                  <div key={module} className={`progress-module ${data.completed ? 'completed' : 'pending'}`}>
                    <div className="module-header">
                      <span className="module-name">{module.replace(/([A-Z])/g, ' $1')}</span>
                      {data.completed ? (
                        <CheckCircle size={20} color="#28a745" />
                      ) : (
                        <Clock size={20} color="#ffc107" />
                      )}
                    </div>
                    {data.completed ? (
                      <div className="module-details">
                        <div className="module-score">{data.score}%</div>
                        <div className="module-date">Completed: {data.date}</div>
                      </div>
                    ) : (
                      <div className="module-details">
                        <div className="module-status">Not completed</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="profile-section">
              <h4>Performance Metrics</h4>
              <div className="performance-details">
                {Object.entries(selectedStudentData.performance).map(([metric, value]) => (
                  <div key={metric} className="performance-metric">
                    <span className="metric-label">{metric.replace(/([A-Z])/g, ' $1')}</span>
                    <div className="metric-bar">
                      <div
                        className="metric-fill"
                        style={{ width: `${value}%` }}
                      ></div>
                    </div>
                    <span className="metric-value">{value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="profile-section">
              <h4>Academic Timeline</h4>
              <div className="timeline">
                {selectedStudentData.timeline.map((milestone, index) => (
                  <div key={index} className={`timeline-item ${milestone.status}`}>
                    <div className="timeline-marker">
                      {milestone.status === 'completed' ? (
                        <CheckCircle size={20} color="#28a745" />
                      ) : milestone.status === 'in-progress' ? (
                        <RefreshCw size={20} color="#17a2b8" />
                      ) : milestone.status === 'overdue' ? (
                        <AlertTriangle size={20} color="#dc3545" />
                      ) : (
                        <Clock size={20} color="#6c757d" />
                      )}
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-title">{milestone.milestone}</div>
                      <div className="timeline-date">{milestone.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={() => setShowStudentModal(false)}>
              Close
            </button>
            <button className="btn btn-primary">
              <FileText size={18} className="mr-2" />
              Generate Report
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="student-tracking">
      {/* Header */}
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">
            <UserCheck className="mr-2" size={32} />
            Student Tracking
          </h1>
          <p>Monitor student progress and performance across all modules</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="card">
        <div className="card-header">
          <div className="tab-navigation">
            <button
              className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <BarChart3 size={20} className="mr-2" />
              Overview
            </button>
            <button
              className={`tab-button ${activeTab === 'students' ? 'active' : ''}`}
              onClick={() => setActiveTab('students')}
            >
              <Users size={20} className="mr-2" />
              Students
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'students' && renderStudentsList()}

      {/* Student Modal */}
      {showStudentModal && renderStudentModal()}
    </div>
  );
};

export default StudentTracking;
