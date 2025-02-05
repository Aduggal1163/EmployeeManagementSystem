const employees = [
  {
    id: 1,
    name:"Abhishek Duggal",
    email: "employee1@example.com",
    password: "123",
    taskCounts:{
      active:2,
      newTask:1,
      completed:1,
      failed:0
    },
    tasks: [
      {
        title: "Prepare Report",
        description: "Create a financial report for Q1",
        date: "2025-02-10",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Attend the weekly team sync-up",
        date: "2025-02-08",
        category: "Meetings",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client Call",
        description: "Discuss project updates with the client",
        date: "2025-02-09",
        category: "Communication",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    name:"Aastha",
    email: "employee2@example.com",
    password: "123",
    taskCounts:{
      active:12,
      newTask:12,
      completed:13,
      failed:10
    },
    tasks: [
      {
        title: "Code Review",
        description: "Review the latest code submissions",
        date: "2025-02-07",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Design Mockups",
        description: "Create UI mockups for the new feature",
        date: "2025-02-11",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Bug Fixes",
        description: "Fix reported issues in the dashboard",
        date: "2025-02-06",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    name:"Karan",
    email: "employee3@example.com",
    password: "123",
    taskCounts:{
      active:3,
      newTask:3,
      completed:3,
      failed:1
    },
    tasks: [
      {
        title: "Marketing Strategy",
        description: "Plan the next quarter's marketing strategy",
        date: "2025-02-12",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Social Media Post",
        description: "Draft and schedule social media content",
        date: "2025-02-10",
        category: "Social Media",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Email Campaign",
        description: "Launch an email campaign for new users",
        date: "2025-02-09",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Competitor Analysis",
        description: "Analyze competitor strategies and trends",
        date: "2025-02-15",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    name:"Ram",
    email: "employee4@example.com",
    password: "123",
    taskCounts:{
      active:2,
      newTask:9,
      completed:0,
      failed:0
    },
    tasks: [
      {
        title: "Database Optimization",
        description: "Improve database performance and indexing",
        date: "2025-02-07",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Security Audit",
        description: "Conduct a security audit for vulnerabilities",
        date: "2025-02-12",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Server Maintenance",
        description: "Perform routine server maintenance",
        date: "2025-02-10",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "System Monitoring",
        description: "Set up system monitoring alerts",
        date: "2025-02-14",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Backup Data",
        description: "Ensure proper data backups are available",
        date: "2025-02-13",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    name:"Kartik",
    email: "employee5@example.com",
    password: "123",
    taskCounts:{
      active:2,
      newTask:1,
      completed:1,
      failed:0
    },
    tasks: [
      {
        title: "Product Testing",
        description: "Perform quality assurance on the new release",
        date: "2025-02-08",
        category: "QA",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "User Feedback",
        description: "Collect and analyze user feedback",
        date: "2025-02-09",
        category: "Product",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Documentation Update",
        description: "Update product documentation",
        date: "2025-02-11",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || null; 
  return { employees, admin };
};
