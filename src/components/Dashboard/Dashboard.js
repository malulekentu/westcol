import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  Award,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3
} from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalStudents: 0,
    completedAssessments: 0,
    pendingAssessments: 0,
    alumniTracked: 0
  });

  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    // Simulate loading data
    setStats({
      totalStudents: 1247,
      completedAssessments: 892,
      pendingAssessments: 355,
      alumniTracked: 234
    });

    setRecentActivity([
      { id: 1, student: 'John Doe', action: 'Completed Career Guidance', time: '2 hours ago', status: 'completed' },
      { id: 2, student: 'Jane Smith', action: 'Started Placement Test', time: '3 hours ago', status: 'in-progress' },
      { id: 3, student: 'Mike Johnson', action: 'Updated Personal Info', time: '5 hours ago', status: 'completed' },
      { id: 4, student: 'Sarah Wilson', action: 'Completed Exit Assessment', time: '1 day ago', status: 'completed' }
    ]);
  }, []);

  const quickActions = [
    {
      title: 'Career Guidance',
      description: 'Self-help career support guidance',
      link: '/career-guidance',
      icon: BookOpen,
      color: 'bg-blue-500'
    },
    {
      title: 'Placement Tests',
      description: 'Academic ability and skills assessment',
      link: '/placement-tests',
      icon: Award,
      color: 'bg-green-500'
    },
    {
      title: 'Student Tracking',
      description: 'Monitor student progress',
      link: '/student-tracking',
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Reports',
      description: 'Generate comprehensive reports',
      link: '/reports',
      icon: BarChart3,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="dashboard">
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">Dashboard Overview</h1>
          <p>Welcome to the Westcol TVET Assessment & Placement Tool</p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-4">
        <div className="card stat-card">
          <div className="stat-number">{stats.totalStudents.toLocaleString()}</div>
          <div className="stat-label">Total Students</div>
          <Users className="mt-3" size={40} color="#667eea" />
        </div>
        <div className="card stat-card">
          <div className="stat-number">{stats.completedAssessments.toLocaleString()}</div>
          <div className="stat-label">Completed Assessments</div>
          <CheckCircle className="mt-3" size={40} color="#28a745" />
        </div>
        <div className="card stat-card">
          <div className="stat-number">{stats.pendingAssessments.toLocaleString()}</div>
          <div className="stat-label">Pending Assessments</div>
          <Clock className="mt-3" size={40} color="#ffc107" />
        </div>
        <div className="card stat-card">
          <div className="stat-number">{stats.alumniTracked.toLocaleString()}</div>
          <div className="stat-label">Alumni Tracked</div>
          <TrendingUp className="mt-3" size={40} color="#17a2b8" />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Quick Actions</h2>
        </div>
        <div className="grid grid-2">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Link key={index} to={action.link} className="card quick-action-card">
                <div className="quick-action-content">
                  <div className={`quick-action-icon ${action.color}`}>
                    <Icon size={32} color="white" />
                  </div>
                  <div className="quick-action-text">
                    <h3>{action.title}</h3>
                    <p>{action.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Recent Activity</h2>
        </div>
        <div className="activity-list">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className="activity-icon">
                {activity.status === 'completed' ? (
                  <CheckCircle size={20} color="#28a745" />
                ) : (
                  <Clock size={20} color="#ffc107" />
                )}
              </div>
              <div className="activity-content">
                <div className="activity-student">{activity.student}</div>
                <div className="activity-action">{activity.action}</div>
              </div>
              <div className="activity-time">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* System Status */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">System Status</h2>
        </div>
        <div className="status-grid">
          <div className="status-item">
            <div className="status-indicator online"></div>
            <span>Career Guidance Module</span>
          </div>
          <div className="status-item">
            <div className="status-indicator online"></div>
            <span>Placement Testing</span>
          </div>
          <div className="status-item">
            <div className="status-indicator online"></div>
            <span>Student Tracking</span>
          </div>
          <div className="status-item">
            <div className="status-indicator online"></div>
            <span>Reporting System</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
