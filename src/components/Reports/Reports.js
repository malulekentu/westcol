import React from 'react';
import { BarChart3, FileText, Download, Users } from 'lucide-react';

const Reports = () => {
  return (
    <div className="reports">
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">
            <BarChart3 className="mr-2" size={32} />
            Reports
          </h1>
          <p>Generate comprehensive reports and analytics</p>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h2 className="card-title">Individual Reports</h2>
          <div className="feature-preview">
            <Users size={48} color="#667eea" />
            <p>Generate detailed individual student reports</p>
            <button className="btn btn-primary">Coming Soon</button>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Group Reports</h2>
          <div className="feature-preview">
            <BarChart3 size={48} color="#28a745" />
            <p>Create reports for classes, campuses, and programs</p>
            <button className="btn btn-primary">Coming Soon</button>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Lecturer Statistics</h2>
          <div className="feature-preview">
            <FileText size={48} color="#ffc107" />
            <p>Generate lecturer performance and statistics reports</p>
            <button className="btn btn-primary">Coming Soon</button>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Export Options</h2>
          <div className="feature-preview">
            <Download size={48} color="#17a2b8" />
            <p>Export reports in PDF and Excel formats</p>
            <button className="btn btn-primary">Coming Soon</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
