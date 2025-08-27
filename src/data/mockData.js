// Mock data for the dashboard
export const dashboardStats = {
  totalProjects: 24,
  totalEarnings: 15420,
  tasksDue: 8,
  completedProjects: 18
};

export const projects = [
  {
    id: 1,
    name: "AUCA Website Redesign",
    client: "AUCA College",
    status: "In Progress",
    deadline: "2025-09-01",
    budget: 5000,
    progress: 67
  },
  {
    id: 2,
    name: "IKIBINA Development",
    client: "NISR Rwanda",
    status: "Completed",
    deadline: "2025-08-20",
    budget: 8000,
    progress: 100
  },
  {
    id: 3,
    name: "RNP Traffic Fines Website",
    client: "Rwanda National Police",
    status: "Pending",
    deadline: "2025-10-30",
    budget: 4500,
    progress: 0
  },
  {
    id: 5,
    name: "Front-End Development",
    client: "ELEVVO Tech Company",
    status: "Completed",
    deadline: "2025-01-15",
    budget: 5000,
    progress: 100
  },
];

export const recentActivities = [
  {
    id: 1,
    action: "Project completed",
    project: "Mobile App Development",
    time: "2 hours ago",
    type: "success"
  },
  {
    id: 2,
    action: "New project added",
    project: "RRA Logo Design",
    time: "1 day ago",
    type: "info"
  },
  {
    id: 3,
    action: "Payment received",
    project: "NISR Rwanda",
    time: "2 days ago",
    type: "success"
  },
  {
    id: 4,
    action: "Deadline approaching",
    project: "AUCA Website Redesign",
    time: "10 days ago",
    type: "warning"
  },
  {
    id: 5,
    action: "Client feedback received",
    project: "Incoming Project",
    time: "2 months ago",
    type: "info"
  }
];

export const monthlyEarnings = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Monthly Earnings ($)',
      data: [3200, 4100, 2800, 5200, 3900, 4600],
      backgroundColor: 'rgba(59, 130, 246, 0.6)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1
    }
  ]
};

export const projectStatusData = {
  labels: ['Completed', 'In Progress', 'Pending'],
  datasets: [
    {
      data: [18, 4, 2],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(249, 115, 22, 0.8)'
      ],
      borderColor: [
        'rgba(34, 197, 94, 1)',
        'rgba(59, 130, 246, 1)',
        'rgba(249, 115, 22, 1)'
      ],
      borderWidth: 1
    }
  ]
};

export const notifications = [
  {
    id: 1,
    title: "Payment Received",
    message: "Payment of $8,000 received from NISR Rwanda.",
    time: "10 minutes ago",
    read: false
  },
  {
    id: 2,
    title: "Project Deadline",
    message: "AUCA Website Redesign deadline is in 10 days.",
    time: "2 hours ago",
    read: false
  },
  {
    id: 3,
    title: "New Message",
    message: "Elevvo invited you again to their project.",
    time: "1 day ago",
    read: true
  }
];

export const userProfile = {
  name: "Derrick SHEMA",
  email: "shederrick03@gmail.com",
  avatar: "https://www.freepik.com/premium-ai-image/cartoon-computer-portrait-smiling_357378771.htm#fromView=keyword&page=1&position=26&uuid=592dbf67-081b-4a39-b689-a46faeb19384&query=Freelancer+avatar",
  phone: "+250788672296",
  location: "RWANDA, RW",
  bio: "Software engineer and IT specialist passionate about building impactful digital solutions.",
  skills: ["React", "Node.js", "UI/UX Design", "Mobile Development"]
};
