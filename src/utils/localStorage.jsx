// localStorage.clear()
const employees =  [
      {
        "id": 1,
        "firstName": "Tanjil",
        "email": "e1@e.com",
        "password": "123",
        "tasks": [
          {
            "taskTitle": "Complete project report",
            "taskDescription": "Compile and submit the final project report.",
            "taskDate": "2024-11-01",
            "category": "Documentation",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Update client on progress",
            "taskDescription": "Send weekly progress email to the client.",
            "taskDate": "2024-11-02",
            "category": "Communication",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "taskTitle": "Fix bugs in code",
            "taskDescription": "Identify and resolve bugs in the software module.",
            "taskDate": "2024-11-03",
            "category": "Development",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          }
        ],
        "taskCounts": {
          "active": 2,
          "newTask": 2,
          "completed": 1,
          "failed": 0
        }
      },
      {
        "id": 2,
        "firstName": "Karim",
        "email": "emp002@example.com",
        "password": "123",
        "tasks": [
          {
            "taskTitle": "Prepare presentation",
            "taskDescription": "Create slides for the quarterly meeting.",
            "taskDate": "2024-11-04",
            "category": "Presentation",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Review code",
            "taskDescription": "Review peer code for quality assurance.",
            "taskDate": "2024-11-01",
            "category": "Quality Control",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ],
        "taskCounts": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
        }
      },
      {
        "id": 3,
        "firstName": "Hasan",
        "email": "emp003@example.com",
        "password": "123",
        "tasks": [
          {
            "taskTitle": "Design logo",
            "taskDescription": "Create a logo for the new project.",
            "taskDate": "2024-11-05",
            "category": "Design",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Submit invoice",
            "taskDescription": "Submit invoice for project expenses.",
            "taskDate": "2024-11-03",
            "category": "Finance",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "taskTitle": "Client feedback session",
            "taskDescription": "Conduct feedback session with client on project progress.",
            "taskDate": "2024-11-02",
            "category": "Client Relations",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ],
        "taskCounts": {
          "active": 1,
          "newTask": 1,
          "completed": 2,
          "failed": 0
        }
      },
      {
        "id": 4,
        "firstName": "Fahim",
        "email": "emp004@example.com",
        "password": "123",
        "tasks": [
          {
            "taskTitle": "Implement new feature",
            "taskDescription": "Develop and test the new feature requested.",
            "taskDate": "2024-11-06",
            "category": "Development",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Update documentation",
            "taskDescription": "Add updates to the technical documentation.",
            "taskDate": "2024-11-04",
            "category": "Documentation",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Schedule team meeting",
            "taskDescription": "Organize a meeting with the development team.",
            "taskDate": "2024-11-02",
            "category": "Coordination",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ],
        "taskCounts": {
          "active": 2,
          "newTask": 2,
          "completed": 1,
          "failed": 0
        }
      },
      {
        "id": 5,
        "firstName": "Jamil",
        "email": "emp005@example.com",
        "password": "123",
        "tasks": [
          {
            "taskTitle": "Research market trends",
            "taskDescription": "Analyze current trends in the market.",
            "taskDate": "2024-11-05",
            "category": "Research",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Data backup",
            "taskDescription": "Ensure all data is backed up.",
            "taskDate": "2024-11-01",
            "category": "IT Support",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "taskTitle": "Organize workshop",
            "taskDescription": "Plan a workshop for team skill development.",
            "taskDate": "2024-11-07",
            "category": "Training",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          }
        ],
        "taskCounts": {
          "active": 2,
          "newTask": 2,
          "completed": 1,
          "failed": 0
        }
      }
];
  
const admin = [{
    "id": 1,
    "firstName": "Admin",
    "email": "admin001@example.com",
    "password": "123"
  }
]

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))
   return {employees,admin}
}



