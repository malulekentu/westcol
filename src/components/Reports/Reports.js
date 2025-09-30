import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  BarChart3,
  FileText,
  Download,
  Users,
  TrendingUp,
  Calendar,
  Filter,
  Eye,
  Search,
  Award,
  BookOpen,
  GraduationCap,
  Building2,
  Target,
  Activity,
  Clock,
  CheckCircle,
  AlertCircle,
  X,
  Plus,
  Settings,
  PieChart,
  LineChart,
  RefreshCw
} from 'lucide-react';

const Reports = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [reportType, setReportType] = useState('individual');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedCampus, setSelectedCampus] = useState('');
  const [selectedProgramme, setSelectedProgramme] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [reportData, setReportData] = useState(null);
  const [showReportPreview, setShowReportPreview] = useState(false);
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [campuses, setCampuses] = useState([]);
  const [programmes, setProgrammes] = useState([]);
  const [lecturers, setLecturers] = useState([]);

  // Sample data
  useEffect(() => {
    // Sample students data
    const sampleStudents = [
      { id: 1, name: 'Sarah Johnson', studentNumber: 'WC2019001', class: 'IT2023A', programme: 'Information Technology N6', campus: 'Main Campus' },
      { id: 2, name: 'Michael Dlamini', studentNumber: 'WC2020045', class: 'BM2023B', programme: 'Business Management N6', campus: 'City Campus' },
      { id: 3, name: 'Thandiwe Mkhize', studentNumber: 'WC2021078', class: 'ENG2023A', programme: 'Engineering Studies N6', campus: 'Main Campus' },
      { id: 4, name: 'John Peters', studentNumber: 'WC2018034', class: 'HM2022B', programme: 'Hospitality Management N6', campus: 'City Campus' },
      { id: 5, name: 'Amanda Smith', studentNumber: 'WC2022001', class: 'IT2023A', programme: 'Information Technology N6', campus: 'Main Campus' },
      { id: 6, name: 'David Wilson', studentNumber: 'WC2022056', class: 'BM2023A', programme: 'Business Management N6', campus: 'Main Campus' }
    ];

    // Sample classes data
    const sampleClasses = [
      { id: 'IT2023A', name: 'Information Technology 2023A', programme: 'Information Technology N6', campus: 'Main Campus' },
      { id: 'IT2023B', name: 'Information Technology 2023B', programme: 'Information Technology N6', campus: 'City Campus' },
      { id: 'BM2023A', name: 'Business Management 2023A', programme: 'Business Management N6', campus: 'Main Campus' },
      { id: 'BM2023B', name: 'Business Management 2023B', programme: 'Business Management N6', campus: 'City Campus' },
      { id: 'ENG2023A', name: 'Engineering Studies 2023A', programme: 'Engineering Studies N6', campus: 'Main Campus' },
      { id: 'HM2022B', name: 'Hospitality Management 2022B', programme: 'Hospitality Management N6', campus: 'City Campus' }
    ];

    // Sample campuses
    const sampleCampuses = [
      { id: 'main', name: 'Main Campus' },
      { id: 'city', name: 'City Campus' }
    ];

    // Sample programmes
    const sampleProgrammes = [
      { id: 'it', name: 'Information Technology N6' },
      { id: 'bm', name: 'Business Management N6' },
      { id: 'eng', name: 'Engineering Studies N6' },
      { id: 'hm', name: 'Hospitality Management N6' }
    ];

    // Sample lecturers
    const sampleLecturers = [
      { id: 1, name: 'Dr. Maria Santos', department: 'Information Technology', subjects: ['Programming', 'Database Design'], classes: ['IT2023A', 'IT2023B'] },
      { id: 2, name: 'Prof. James Brown', department: 'Business Management', subjects: ['Marketing', 'Business Ethics'], classes: ['BM2023A', 'BM2023B'] },
      { id: 3, name: 'Ms. Linda Johnson', department: 'Engineering', subjects: ['Mechanical Engineering', 'CAD'], classes: ['ENG2023A'] },
      { id: 4, name: 'Mr. Robert Davis', department: 'Hospitality', subjects: ['Food Service', 'Hotel Management'], classes: ['HM2022B'] }
    ];

    setStudents(sampleStudents);
    setClasses(sampleClasses);
    setCampuses(sampleCampuses);
    setProgrammes(sampleProgrammes);
    setLecturers(sampleLecturers);
  }, []);

  // Generate sample report data based on selections
  const generateReportData = () => {
    let data = {};

    switch (reportType) {
      case 'individual':
        const student = students.find(s => s.id.toString() === selectedStudent);
        if (student) {
          data = {
            student: student,
            assessments: {
              preEntry: Math.floor(Math.random() * 40) + 60,
              placement: Math.floor(Math.random() * 40) + 60,
              careerGuidance: Math.floor(Math.random() * 40) + 60,
              workReadiness: Math.floor(Math.random() * 40) + 60,
              interpersonal: Math.floor(Math.random() * 40) + 60
            },
            attendance: Math.floor(Math.random() * 20) + 80,
            performance: {
              assignments: Math.floor(Math.random() * 30) + 70,
              tests: Math.floor(Math.random() * 30) + 70,
              exams: Math.floor(Math.random() * 30) + 70,
              overall: Math.floor(Math.random() * 30) + 70
            },
            activities: [
              { activity: 'Career Guidance Session', date: '2023-09-15', status: 'Completed' },
              { activity: 'Industry Visit', date: '2023-09-22', status: 'Completed' },
              { activity: 'Mock Interview', date: '2023-10-01', status: 'Scheduled' },
              { activity: 'CV Workshop', date: '2023-10-08', status: 'Scheduled' }
            ]
          };
        }
        break;

      case 'group':
        const classData = classes.find(c => c.id === selectedClass);
        if (classData) {
          data = {
            class: classData,
            summary: {
              totalStudents: Math.floor(Math.random() * 10) + 15,
              averageAttendance: Math.floor(Math.random() * 15) + 85,
              averagePerformance: Math.floor(Math.random() * 20) + 75,
              completionRate: Math.floor(Math.random() * 15) + 85
            },
            breakdown: {
              assessments: {
                completed: Math.floor(Math.random() * 5) + 10,
                pending: Math.floor(Math.random() * 3) + 1,
                averageScore: Math.floor(Math.random() * 20) + 75
              },
              activities: {
                completed: Math.floor(Math.random() * 8) + 12,
                upcoming: Math.floor(Math.random() * 4) + 2,
                participation: Math.floor(Math.random() * 15) + 85
              }
            },
            topPerformers: students
              .filter(s => s.class === selectedClass)
              .sort((a, b) => b.performance - a.performance)
              .slice(0, 3)
          };
        }
        break;

      case 'lecturer':
        const lecturer = lecturers.find(l => l.id.toString() === selectedStudent); // Using same field for lecturer selection
        if (lecturer) {
          data = {
            lecturer: lecturer,
            statistics: {
              totalClasses: lecturer.classes.length,
              totalStudents: Math.floor(Math.random() * 50) + 100,
              averageRating: (Math.random() * 2) + 3, // 3-5 rating
              completionRate: Math.floor(Math.random() * 15) + 85
            },
            performance: {
              studentSatisfaction: Math.floor(Math.random() * 15) + 85,
              contentDelivery: Math.floor(Math.random() * 15) + 85,
              assessmentQuality: Math.floor(Math.random() * 15) + 85,
              engagement: Math.floor(Math.random() * 15) + 85
            },
            subjects: lecturer.subjects.map(subject => ({
              subject,
              averageScore: Math.floor(Math.random() * 20) + 75,
              passRate: Math.floor(Math.random() * 15) + 85
            }))
          };
        }
        break;

      case 'campus':
        const campus = campuses.find(c => c.id === selectedCampus);
        if (campus) {
          data = {
            campus: campus,
            overview: {
              totalStudents: Math.floor(Math.random() * 200) + 800,
              totalClasses: Math.floor(Math.random() * 20) + 40,
              totalLecturers: Math.floor(Math.random() * 15) + 30,
              totalProgrammes: programmes.length
            },
            performance: {
              averageAttendance: Math.floor(Math.random() * 10) + 88,
              averageGrade: Math.floor(Math.random() * 15) + 75,
              completionRate: Math.floor(Math.random() * 10) + 88,
              satisfactionRate: Math.floor(Math.random() * 10) + 88
            },
            programmes: programmes.map(prog => ({
              programme: prog.name,
              enrolled: Math.floor(Math.random() * 50) + 100,
              completion: Math.floor(Math.random() * 15) + 85
            }))
          };
        }
        break;

      default:
        break;
    }

    return data;
  };

  const handleGenerateReport = () => {
    const data = generateReportData();
    if (!data) {
      toast.error('Please select all required filters before generating report.');
      return;
    }

    setReportData(data);
    setShowReportPreview(true);
    toast.success('Report generated successfully!');
  };

  const handleExportReport = (format) => {
    toast.info(`Report exported as ${format.toUpperCase()} - In production, this would generate the actual file`);
  };

  // Dashboard metrics
  const dashboardMetrics = {
    totalStudents: students.length,
    totalClasses: classes.length,
    totalCampuses: campuses.length,
    totalProgrammes: programmes.length,
    averageAttendance: 87,
    averagePerformance: 78,
    completionRate: 85,
    satisfactionRate: 89
  };

  // Render Dashboard
  const renderDashboard = () => (
    <div>
      <div className="grid grid-4">
        <div className="card metric-card">
          <div className="metric-number">{dashboardMetrics.totalStudents}</div>
          <div className="metric-label">Total Students</div>
          <Users className="metric-icon" size={40} color="#667eea" />
        </div>
        <div className="card metric-card">
          <div className="metric-number">{dashboardMetrics.totalClasses}</div>
          <div className="metric-label">Active Classes</div>
          <BookOpen className="metric-icon" size={40} color="#28a745" />
        </div>
        <div className="card metric-card">
          <div className="metric-number">{dashboardMetrics.averageAttendance}%</div>
          <div className="metric-label">Attendance Rate</div>
          <CheckCircle className="metric-icon" size={40} color="#17a2b8" />
        </div>
        <div className="card metric-card">
          <div className="metric-number">{dashboardMetrics.averagePerformance}%</div>
          <div className="metric-label">Performance</div>
          <TrendingUp className="metric-icon" size={40} color="#ffc107" />
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h2 className="card-title">
            <PieChart className="mr-2" size={24} />
            Programme Distribution
          </h2>
          <div className="chart-placeholder">
            <div className="chart-bars">
              {programmes.map((prog, index) => (
                <div key={prog.id} className="chart-bar" style={{ height: `${Math.floor(Math.random() * 40) + 60}%` }}>
                  <span className="chart-label">{prog.name.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">
            <LineChart className="mr-2" size={24} />
            Monthly Trends
          </h2>
          <div className="chart-placeholder">
            <div className="trend-line">
              {[65, 70, 75, 80, 78, 85, 82, 88, 90, 87, 89, 91].map((value, index) => (
                <div key={index} className="trend-point" style={{ height: `${value}%` }}>
                  <span className="trend-value">{value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-3">
        <div className="card">
          <h3 className="section-title">Recent Activities</h3>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">
                <CheckCircle size={16} color="#28a745" />
              </div>
              <div className="activity-content">
                <div className="activity-title">Assessment Completed</div>
                <div className="activity-time">2 hours ago</div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">
                <Users size={16} color="#667eea" />
              </div>
              <div className="activity-content">
                <div className="activity-title">New Student Enrolled</div>
                <div className="activity-time">4 hours ago</div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">
                <Award size={16} color="#ffc107" />
              </div>
              <div className="activity-content">
                <div className="activity-title">Certificate Issued</div>
                <div className="activity-time">1 day ago</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="section-title">Top Performing Classes</h3>
          <div className="ranking-list">
            {classes.slice(0, 5).map((cls, index) => (
              <div key={cls.id} className="ranking-item">
                <div className="ranking-position">#{index + 1}</div>
                <div className="ranking-content">
                  <div className="ranking-title">{cls.name}</div>
                  <div className="ranking-subtitle">{cls.programme}</div>
                </div>
                <div className="ranking-score">{Math.floor(Math.random() * 20) + 80}%</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="section-title">System Health</h3>
          <div className="health-indicators">
            <div className="health-item">
              <div className="health-status healthy">
                <CheckCircle size={20} color="#28a745" />
              </div>
              <div className="health-content">
                <div className="health-title">Database</div>
                <div className="health-subtitle">All systems operational</div>
              </div>
            </div>
            <div className="health-item">
              <div className="health-status healthy">
                <CheckCircle size={20} color="#28a745" />
              </div>
              <div className="health-content">
                <div className="health-title">Assessments</div>
                <div className="health-subtitle">All modules functioning</div>
              </div>
            </div>
            <div className="health-item">
              <div className="health-status warning">
                <AlertCircle size={20} color="#ffc107" />
              </div>
              <div className="health-content">
                <div className="health-title">Storage</div>
                <div className="health-subtitle">80% capacity used</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render Report Generator
  const renderReportGenerator = () => (
    <div>
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">
            <BarChart3 className="mr-2" size={32} />
            Report Generator
          </h1>
          <p>Create customized reports based on your requirements</p>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h2 className="card-title">Report Configuration</h2>

          <div className="form-group">
            <label className="form-label">Report Type</label>
            <select
              className="form-control"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <option value="individual">Individual Student Report</option>
              <option value="group">Group/Class Report</option>
              <option value="lecturer">Lecturer Statistics</option>
              <option value="campus">Campus Overview</option>
            </select>
          </div>

          {reportType === 'individual' && (
            <div className="form-group">
              <label className="form-label">Select Student</label>
              <select
                className="form-control"
                value={selectedStudent}
                onChange={(e) => setSelectedStudent(e.target.value)}
              >
                <option value="">Choose a student...</option>
                {students.map(student => (
                  <option key={student.id} value={student.id}>
                    {student.name} ({student.studentNumber})
                  </option>
                ))}
              </select>
            </div>
          )}

          {reportType === 'group' && (
            <>
              <div className="form-group">
                <label className="form-label">Select Class</label>
                <select
                  className="form-control"
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                >
                  <option value="">Choose a class...</option>
                  {classes.map(cls => (
                    <option key={cls.id} value={cls.id}>
                      {cls.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Select Campus</label>
                <select
                  className="form-control"
                  value={selectedCampus}
                  onChange={(e) => setSelectedCampus(e.target.value)}
                >
                  <option value="">Choose a campus...</option>
                  {campuses.map(campus => (
                    <option key={campus.id} value={campus.id}>
                      {campus.name}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}

          {reportType === 'lecturer' && (
            <div className="form-group">
              <label className="form-label">Select Lecturer</label>
              <select
                className="form-control"
                value={selectedStudent}
                onChange={(e) => setSelectedStudent(e.target.value)}
              >
                <option value="">Choose a lecturer...</option>
                {lecturers.map(lecturer => (
                  <option key={lecturer.id} value={lecturer.id}>
                    {lecturer.name} ({lecturer.department})
                  </option>
                ))}
              </select>
            </div>
          )}

          {reportType === 'campus' && (
            <div className="form-group">
              <label className="form-label">Select Campus</label>
              <select
                className="form-control"
                value={selectedCampus}
                onChange={(e) => setSelectedCampus(e.target.value)}
              >
                <option value="">Choose a campus...</option>
                {campuses.map(campus => (
                  <option key={campus.id} value={campus.id}>
                    {campus.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="grid grid-2">
            <div className="form-group">
              <label className="form-label">Start Date</label>
              <input
                type="date"
                className="form-control"
                value={dateRange.start}
                onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
              />
            </div>
            <div className="form-group">
              <label className="form-label">End Date</label>
              <input
                type="date"
                className="form-control"
                value={dateRange.end}
                onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
              />
            </div>
          </div>

          <div className="form-actions">
            <button className="btn btn-primary" onClick={handleGenerateReport}>
              <BarChart3 size={18} className="mr-2" />
              Generate Report
            </button>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Report Preview</h2>
          {!showReportPreview ? (
            <div className="feature-preview">
              <FileText size={48} color="#6c757d" />
              <p>Configure and generate your report to see preview here</p>
            </div>
          ) : (
            <div className="report-preview">
              <div className="report-header">
                <h3>Report Preview</h3>
                <div className="report-actions">
                  <button className="btn btn-secondary btn-sm" onClick={() => handleExportReport('pdf')}>
                    <Download size={16} className="mr-2" />
                    PDF
                  </button>
                  <button className="btn btn-secondary btn-sm" onClick={() => handleExportReport('excel')}>
                    <Download size={16} className="mr-2" />
                    Excel
                  </button>
                </div>
              </div>

              {reportData && (
                <div className="report-content">
                  {reportType === 'individual' && reportData.student && (
                    <div>
                      <h4>Student Report: {reportData.student.name}</h4>
                      <div className="report-section">
                        <h5>Assessment Results</h5>
                        <div className="assessment-results">
                          {Object.entries(reportData.assessments).map(([key, value]) => (
                            <div key={key} className="assessment-item">
                              <span className="assessment-name">{key.replace(/([A-Z])/g, ' $1')}</span>
                              <span className="assessment-score">{value}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="report-section">
                        <h5>Performance Summary</h5>
                        <div className="performance-grid">
                          {Object.entries(reportData.performance).map(([key, value]) => (
                            <div key={key} className="performance-item">
                              <span>{key.replace(/([A-Z])/g, ' $1')}</span>
                              <span>{value}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {reportType === 'group' && reportData.class && (
                    <div>
                      <h4>Class Report: {reportData.class.name}</h4>
                      <div className="report-section">
                        <h5>Class Summary</h5>
                        <div className="summary-stats">
                          {Object.entries(reportData.summary).map(([key, value]) => (
                            <div key={key} className="stat-item">
                              <span className="stat-label">{key.replace(/([A-Z])/g, ' $1')}</span>
                              <span className="stat-value">{value}{key.includes('Rate') ? '%' : ''}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="report-section">
                        <h5>Top Performers</h5>
                        <div className="top-performers">
                          {reportData.topPerformers.map((student, index) => (
                            <div key={student.id} className="performer-item">
                              <span className="performer-rank">#{index + 1}</span>
                              <span className="performer-name">{student.name}</span>
                              <span className="performer-score">{Math.floor(Math.random() * 20) + 80}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {reportType === 'lecturer' && reportData.lecturer && (
                    <div>
                      <h4>Lecturer Report: {reportData.lecturer.name}</h4>
                      <div className="report-section">
                        <h5>Lecturer Statistics</h5>
                        <div className="lecturer-stats">
                          {Object.entries(reportData.statistics).map(([key, value]) => (
                            <div key={key} className="stat-item">
                              <span className="stat-label">{key.replace(/([A-Z])/g, ' $1')}</span>
                              <span className="stat-value">{value}{key.includes('Rate') ? '%' : key.includes('Rating') ? '/5' : ''}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="report-section">
                        <h5>Subject Performance</h5>
                        <div className="subject-performance">
                          {reportData.subjects.map((subject, index) => (
                            <div key={index} className="subject-item">
                              <span className="subject-name">{subject.subject}</span>
                              <span className="subject-score">{subject.averageScore}%</span>
                              <span className="subject-pass">{subject.passRate}% pass rate</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {reportType === 'campus' && reportData.campus && (
                    <div>
                      <h4>Campus Report: {reportData.campus.name}</h4>
                      <div className="report-section">
                        <h5>Campus Overview</h5>
                        <div className="campus-stats">
                          {Object.entries(reportData.overview).map(([key, value]) => (
                            <div key={key} className="stat-item">
                              <span className="stat-label">{key.replace(/([A-Z])/g, ' $1')}</span>
                              <span className="stat-value">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="report-section">
                        <h5>Programme Performance</h5>
                        <div className="programme-performance">
                          {reportData.programmes.map((prog, index) => (
                            <div key={index} className="programme-item">
                              <span className="programme-name">{prog.programme}</span>
                              <span className="programme-enrolled">{prog.enrolled} enrolled</span>
                              <span className="programme-completion">{prog.completion}% completion</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="reports">
      {/* Navigation Tabs */}
      <div className="card">
        <div className="card-header">
          <div className="tab-navigation">
            <button
              className={`tab-button ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <BarChart3 size={20} className="mr-2" />
              Dashboard
            </button>
            <button
              className={`tab-button ${activeTab === 'generator' ? 'active' : ''}`}
              onClick={() => setActiveTab('generator')}
            >
              <FileText size={20} className="mr-2" />
              Report Generator
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'dashboard' && renderDashboard()}
      {activeTab === 'generator' && renderReportGenerator()}
    </div>
  );
};

export default Reports;
