import React from 'react';
import { UserCheck, TrendingUp, Calendar, Award } from 'lucide-react';

const StudentTracking = () => {
  return (
    <div className="student-tracking">
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">
            <UserCheck className="mr-2" size={32} />
            Student Tracking
          </h1>
          <p>Monitor student progress and performance across all modules</p>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h2 className="card-title">Progress Monitoring</h2>
          <div className="feature-preview">
            <TrendingUp size={48} color="#667eea" />
            <p>Track student progress through all assessment modules</p>
            <button className="btn btn-primary">Coming Soon</button>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Performance Analytics</h2>
          <div className="feature-preview">
            <Award size={48} color="#28a745" />
            <p>Analyze student performance and identify areas for improvement</p>
            <button className="btn btn-primary">Coming Soon</button>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Timeline Tracking</h2>
          <div className="feature-preview">
            <Calendar size={48} color="#ffc107" />
            <p>Monitor completion timelines and milestones</p>
            <button className="btn btn-primary">Coming Soon</button>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Intervention Alerts</h2>
          <div className="feature-preview">
            <UserCheck size={48} color="#17a2b8" />
            <p>Get alerts for students who need additional support</p>
            <button className="btn btn-primary">Coming Soon</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTracking;
