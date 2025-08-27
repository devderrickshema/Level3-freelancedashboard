# Freelance Admin Dashboard (Internship Project at Elevvo)

A modern, responsive admin dashboard built with React.js as part of the Elevvo Internship (Level 3 Project).
This dashboard helps freelance professionals manage projects, track earnings, and monitor business performance effectively.


## Features

### 📊 Dashboard Overview
- Summary cards showing total projects, earnings, tasks due, and completed projects
- Interactive charts displaying monthly earnings and project status distribution
- Recent activity feed with real-time updates
- Quick stats panel with key business metrics

### 📋 Project Management
- Comprehensive project listing with search and filter capabilities
- Toggle between card and table views
- Project status tracking (Completed, In Progress, Pending)
- Progress visualization and deadline monitoring
- Client information and budget tracking

### 👤 Profile Settings
- User profile management with editable information
- Profile picture and bio customization
- Security settings with password management
- Account preferences and notification controls
- Skills showcase and contact information

### 🎨 Modern UI/UX
- Clean, professional design using Tailwind CSS
- Fully responsive layout for desktop and mobile
- Intuitive navigation with sidebar and header
- Interactive notifications dropdown
- Consistent design patterns and components

## Technology Stack

- **Frontend Framework:** React.js 18
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS
- **Charts:** Chart.js with React Chart.js 2
- **Icons:** Heroicons (via Tailwind UI)
- **Build Tool:** Create React App

## Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone or download the project files**
   ```bash
   # If you have the project in a zip file, extract it
   # If you're copying the files, create a new directory
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the dashboard

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.js          # Top navigation header
│   │   ├── Sidebar.js         # Left navigation sidebar
│   │   └── Layout.js          # Main layout wrapper
│   ├── UI/
│   │   ├── SummaryCard.js     # Dashboard summary cards
│   │   ├── ProjectCard.js     # Project display cards
│   │   └── ActivityList.js    # Recent activity component
│   └── Charts/
│       ├── BarChart.js        # Monthly earnings chart
│       └── PieChart.js        # Project status chart
├── pages/
│   ├── Overview.js            # Dashboard home page
│   ├── Projects.js            # Projects management page
│   └── Profile.js             # User profile settings
├── data/
│   └── mockData.js            # Sample data for demo
├── App.js                     # Main app component with routing
├── index.js                   # React app entry point
└── index.css                  # Global styles and Tailwind imports
```

## Key Features Implemented

### ✅ Complete Requirements Checklist

- **Pages:**
  - ✅ Overview Page with summary cards, charts, and activity list
  - ✅ Projects Page with search, filter, and toggle views
  - ✅ Profile Settings Page with editable user information

- **Layout & Navigation:**
  - ✅ Consistent sidebar navigation across all pages
  - ✅ Responsive top header with notifications
  - ✅ React Router implementation for SPA navigation
  - ✅ Mobile-responsive design with hamburger menu

- **Components:**
  - ✅ Reusable SummaryCard component
  - ✅ ProjectCard component with progress tracking
  - ✅ ActivityList component for recent actions
  - ✅ Header with notification dropdown
  - ✅ Responsive sidebar navigation

- **Charts & Visualization:**
  - ✅ Bar chart for monthly earnings using Chart.js
  - ✅ Pie chart for project status distribution
  - ✅ Interactive and responsive chart components

- **Styling & Design:**
  - ✅ Modern Tailwind CSS implementation
  - ✅ Consistent color scheme and typography
  - ✅ Hover effects and smooth transitions
  - ✅ Professional, clean interface design

- **Data & Functionality:**
  - ✅ Comprehensive mock data structure
  - ✅ Conditional rendering for project statuses
  - ✅ Search and filter functionality
  - ✅ Form handling in profile settings
  - ✅ Notification system with unread indicators

## Customization

### Adding New Data
Edit `src/data/mockData.js` to modify:
- Project information
- User profile data
- Dashboard statistics
- Chart data
- Notification content

### Styling Customization
- Colors: Modify `tailwind.config.js` for custom color schemes
- Components: Update individual component styles in their respective files
- Global styles: Edit `src/index.css` for app-wide styling

### Adding New Features
1. Create new components in appropriate folders
2. Add new routes in `src/App.js`
3. Update navigation in `src/components/Layout/Sidebar.js`
4. Add corresponding data structures in `src/data/mockData.js`

## Contributing

This is a demo project, built as part of the Elevvo Internship Program – Level 3 Project.
You can extend it by adding:

1. Backend API integration

2. Authentication system

3. Real-time notifications

4. Additional pages (clients, invoices, analytics)

5. Data export functionality

## License

Created for Elevvo Internship educational purposes.

This project is created for educational and demonstration purposes. Feel free to use and modify as needed for your projects.

---

**Ready to use!** The dashboard is fully functional and ready to run immediately after installation. All components are responsive and include professional styling with smooth interactions.
