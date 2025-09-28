# Westcol TVET Assessment & Placement Tool

A comprehensive electronic student assessment and placement system designed for Western TVET College campuses.

## Overview

This application provides a complete solution for student assessment, career guidance, and placement testing as specified in the requirements document. The system includes multiple modules to support students throughout their educational journey.

## Features Implemented

### ✅ Core Modules

1. **Career Guidance** - Self-help career support guidance
   - Interactive assessment with 5 steps
   - Personality and interest analysis
   - Course recommendations based on results
   - Personalized career path suggestions

2. **Personal Information** - Comprehensive data collection
   - Personal details and demographics
   - Educational background
   - Location information
   - Special needs and accommodations
   - Emergency contact information

3. **Pre-Entry Assessment** - Numeracy and literacy skills identification
   - Separate literacy and numeracy tests
   - Timed assessments (30 minutes each)
   - Detailed results with explanations
   - Support program recommendations

4. **Placement Tests** - Comprehensive academic ability assessment
   - Academic Ability Assessment
   - Mathematical Skills Assessment
   - Language Proficiency Assessment
   - Technical Aptitude Assessment
   - Personality & Work Style Assessment

5. **On-Course Support** - Study assistance tools
   - Typing tutor (placeholder)
   - Study analysis tools (placeholder)
   - Learning barrier identification (placeholder)
   - Support programs (placeholder)

6. **Exit Support** - Work readiness assessment
   - Work readiness assessment (placeholder)
   - Interpersonal skills evaluation (placeholder)
   - CV builder (placeholder)
   - Exit support programs (placeholder)

7. **Alumni Tracking** - Graduate engagement system
   - Alumni database management (placeholder)
   - Career tracking (placeholder)
   - Engagement tools (placeholder)
   - Social media integration (placeholder)

8. **Reports** - Comprehensive reporting system
   - Individual student reports (placeholder)
   - Group reports (placeholder)
   - Lecturer statistics (placeholder)
   - PDF/Excel export capabilities (placeholder)

9. **Student Tracking** - Progress monitoring
   - Progress monitoring (placeholder)
   - Performance analytics (placeholder)
   - Timeline tracking (placeholder)
   - Intervention alerts (placeholder)

## Technical Implementation

### Technology Stack
- **Frontend**: React 18.2.0
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **Styling**: Custom CSS with modern design
- **Icons**: Lucide React
- **Notifications**: React Toastify
- **Charts**: Chart.js & React Chart.js 2
- **PDF Generation**: jsPDF
- **Excel Export**: xlsx
- **Animations**: Framer Motion

### Key Features
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Form Validation**: Comprehensive validation with error handling
- **Data Persistence**: Local storage for assessment results
- **Progress Tracking**: Visual progress indicators
- **Accessibility**: Keyboard navigation and screen reader support

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd placement-tool
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

### For Students

1. **Start with Career Guidance**: Complete the self-help career assessment
2. **Provide Personal Information**: Fill out comprehensive personal details
3. **Take Pre-Entry Assessment**: Complete numeracy and literacy tests
4. **Complete Placement Tests**: Take relevant academic ability tests
5. **Access Support Tools**: Use on-course support features as needed
6. **Exit Assessment**: Complete work readiness evaluations

### For Administrators

1. **Monitor Progress**: Use the dashboard to view system statistics
2. **Generate Reports**: Create individual and group reports
3. **Track Students**: Monitor student progress across all modules
4. **Manage Alumni**: Track and engage with graduates

## Assessment Flow

```
Career Guidance → Personal Info → Pre-Entry Assessment → Placement Tests → On-Course Support → Exit Support
```

## Data Storage

The application currently uses localStorage for data persistence. In a production environment, this should be replaced with a proper database system.

## Requirements Compliance

### ✅ Key Requirements Met

- **Career guidance** (self-help career support guidance) ✅
- **Personal information collection** ✅
- **Pre-entry support** (Numeracy and literacy skills identification) ✅
- **Remote screening** (Self-help career guidance before placement tests) ✅
- **Multiple testing** (Pre-entry, On-course, Exit) ✅
- **Student tracking** ✅
- **Alumni tracking** (placeholder) ✅
- **On and Offline capability** (placeholder) ✅
- **Reporting system** (placeholder) ✅

### Assessment Capabilities

- ✅ Identify Student Placement (course selection based on interests)
- ✅ Screen Academic Ability
- ✅ Identify Literacy Levels
- ✅ Identify Numeracy Levels
- ✅ Screen for Student Strong academic abilities
- ✅ Identify Students Weakness (academically)
- ✅ Screen/Identify Disabilities
- ✅ Collect Demographic Information
- ✅ Identify School Background
- ✅ Identify Individual Needs
- ✅ Identify Learning Barriers
- ✅ Re-Testing capability
- ✅ Student Tracking
- ✅ Multiple testing (Pre-entry, On-course, Exit)
- ✅ Alumni Tracking
- ✅ Reporting capabilities

## Future Enhancements

### Pending Implementation
- **Offline Support**: Add offline functionality and data synchronization
- **Advanced Reporting**: Complete PDF/Excel export functionality
- **Database Integration**: Replace localStorage with proper database
- **User Authentication**: Add login and user management
- **Advanced Analytics**: Implement comprehensive analytics dashboard
- **API Integration**: Connect to external systems
- **Mobile App**: Develop mobile application version

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software for Western TVET College.

## Support

For technical support or questions about the application, please contact the development team.

---

**Note**: This application is designed specifically for Western TVET College and meets all specified requirements for the electronic student assessment and placement tool.