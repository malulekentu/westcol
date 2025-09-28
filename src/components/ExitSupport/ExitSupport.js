import React from 'react';
import { Briefcase, FileText, Users, Award } from 'lucide-react';

const ExitSupport = () => {
  return (
    <div className="exit-support">
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
        <div className="card">
          <h2 className="card-title">Work Readiness Assessment</h2>
          <div className="feature-preview">
            <Briefcase size={48} color="#667eea" />
            <p>Assess your readiness for the workplace</p>
            <button className="btn btn-primary">Coming Soon</button>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Interpersonal Skills Assessment</h2>
          <div className="feature-preview">
            <Users size={48} color="#28a745" />
            <p>Evaluate your interpersonal work readiness</p>
            <button className="btn btn-primary">Coming Soon</button>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">CV Builder</h2>
          <div className="feature-preview">
            <FileText size={48} color="#ffc107" />
            <p>Create a professional curriculum vitae</p>
            <button className="btn btn-primary">Coming Soon</button>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Exit Support Programs</h2>
          <div className="feature-preview">
            <Award size={48} color="#17a2b8" />
            <p>Access numeracy and literacy programs for graduates</p>
            <button className="btn btn-primary">Coming Soon</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitSupport;
