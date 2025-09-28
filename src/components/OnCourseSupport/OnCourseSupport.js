import React from 'react';
import { GraduationCap, Keyboard, BookOpen, BarChart3 } from 'lucide-react';

const OnCourseSupport = () => {
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

      <div className="grid grid-2">
        <div className="card">
          <h2 className="card-title">Typing Tutor</h2>
          <div className="feature-preview">
            <Keyboard size={48} color="#667eea" />
            <p>Improve your keyboarding skills with interactive typing lessons</p>
            <button className="btn btn-primary">Coming Soon</button>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Study Analysis</h2>
          <div className="feature-preview">
            <BookOpen size={48} color="#28a745" />
            <p>Analyze your studying strengths and weaknesses</p>
            <button className="btn btn-primary">Coming Soon</button>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Learning Barriers</h2>
          <div className="feature-preview">
            <BarChart3 size={48} color="#ffc107" />
            <p>Identify and address learning challenges</p>
            <button className="btn btn-primary">Coming Soon</button>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Support Programs</h2>
          <div className="feature-preview">
            <GraduationCap size={48} color="#17a2b8" />
            <p>Access numeracy and literacy support programs</p>
            <button className="btn btn-primary">Coming Soon</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnCourseSupport;
