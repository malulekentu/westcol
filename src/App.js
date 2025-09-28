import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// Import components
import Dashboard from './components/Dashboard/Dashboard';
import CareerGuidance from './components/CareerGuidance/CareerGuidance';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import PreEntryAssessment from './components/PreEntryAssessment/PreEntryAssessment';
import PlacementTests from './components/PlacementTests/PlacementTests';
import OnCourseSupport from './components/OnCourseSupport/OnCourseSupport';
import ExitSupport from './components/ExitSupport/ExitSupport';
import AlumniTracking from './components/AlumniTracking/AlumniTracking';
import Reports from './components/Reports/Reports';
import StudentTracking from './components/StudentTracking/StudentTracking';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/career-guidance" element={<CareerGuidance />} />
            <Route path="/personal-info" element={<PersonalInfo />} />
            <Route path="/pre-entry" element={<PreEntryAssessment />} />
            <Route path="/placement-tests" element={<PlacementTests />} />
            <Route path="/on-course" element={<OnCourseSupport />} />
            <Route path="/exit-support" element={<ExitSupport />} />
            <Route path="/alumni-tracking" element={<AlumniTracking />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/student-tracking" element={<StudentTracking />} />
          </Routes>
        </main>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;
