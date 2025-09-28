import React from 'react';
import { Users, Mail, Facebook, Globe } from 'lucide-react';

const AlumniTracking = () => {
  return (
    <div className="alumni-tracking">
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">
            <Users className="mr-2" size={32} />
            Alumni Tracking
          </h1>
          <p>Track and engage with college alumni for feedback and career insights</p>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h2 className="card-title">Alumni Database</h2>
          <div className="feature-preview">
            <Users size={48} color="#667eea" />
            <p>Manage alumni contact information and career updates</p>
            <button className="btn btn-primary">Coming Soon</button>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Career Tracking</h2>
          <div className="feature-preview">
            <Globe size={48} color="#28a745" />
            <p>Track alumni career progression and employment status</p>
            <button className="btn btn-primary">Coming Soon</button>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Engagement Tools</h2>
          <div className="feature-preview">
            <Mail size={48} color="#ffc107" />
            <p>Send surveys and maintain communication with alumni</p>
            <button className="btn btn-primary">Coming Soon</button>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Social Media Integration</h2>
          <div className="feature-preview">
            <Facebook size={48} color="#17a2b8" />
            <p>Connect with alumni through social media platforms</p>
            <button className="btn btn-primary">Coming Soon</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniTracking;
