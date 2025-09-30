import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Compass, 
  User, 
  BookOpen, 
  ClipboardCheck, 
  GraduationCap, 
  Briefcase, 
  Users, 
  BarChart3, 
  UserCheck,
  Menu,
  X
} from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/career-guidance', label: 'Career Guidance', icon: Compass },
    { path: '/personal-info', label: 'Personal Information', icon: User },
    { path: '/pre-entry', label: 'Pre-Entry Assessment', icon: BookOpen },
    { path: '/placement-tests', label: 'Placement Tests', icon: ClipboardCheck },
    { path: '/on-course', label: 'On-Course Support', icon: GraduationCap },
    { path: '/exit-support', label: 'Exit Support', icon: Briefcase },
    { path: '/alumni-tracking', label: 'Alumni Tracking', icon: Users },
    { path: '/reports', label: 'Reports', icon: BarChart3 },
    { path: '/student-tracking', label: 'Student Tracking', icon: UserCheck }
  ];

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button 
        className="mobile-menu-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && <div className="mobile-overlay" onClick={() => setIsOpen(false)} />}

      {/* Navigation */}
      <nav className={`navigation ${isOpen ? 'open' : ''}`}>
        <div className="nav-header">
          <h1>Westcol TVET</h1>
          <p>Assessment & Placement Tool</p>
        </div>
        <div className="nav-menu">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="nav-item-icon">
                  <Icon size={20} />
                </span>
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
