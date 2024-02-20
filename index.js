// This ads all packages needed for this application!
const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require("mysql2");

// This asks the user what they want to do in the employee tracker!
inquirer.
prompt({
    type: "list",
    message: "What would you like to do?",
    name: "response",
    choices: [
        "Add Employee",
        "Update Employee Role",
        "Add Role",
        "View All Departments",
        "Add Department"
    ]
})
// This provides a function call to a different function depending on the user's selection!
.then((response) => {
    if(response === "Add Employee")
        addEmployee();
    else if (response === "Update Employee Role")
        updateEmployeeRole();
    else if (response === "Add Role")
        addEmployeeRole();
    else if (response === "View All Departments")
        viewAllDepartments();
    else if(response === "Add Department")
        addDepartment();
})

// This function will be called when user selected "Add Employee" from the choices.
function addEmployee(){
    console.log("Time to add an employee");
}

// This function will be called when user selected "Add Employee" from the choices.
function updateEmployeeRole(){
    console.log("Time to update an employee role");
}

// This function will be called when user selected "Add Employee" from the choices.
function addEmployeeRole(){
    console.log("Time to add an employee role");
}

// This function will be called when user selected "Add Employee" from the choices.
function viewAllDepartments(){
    console.log("Time to see all departments");
}

// This function will be called when user selected "Add Employee" from the choices.
function addDepartment(){
    console.log("Time to add a department");
}


/*
// This creates a connection to the MySQL database
const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "employees_db"
});
*/
