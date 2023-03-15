const inquirer = require("inquirer");

const viewAllEmployees = (db) =>
  db.query(`SELECT * FROM employee`, function (err, results, fields) {
    console.table(results);
  });

const viewAllRoles = (db) =>
  db.query(`SELECT * FROM roles`, function (err, results, fields) {
    console.table(results);
  });

const viewAllDepartments = (db) =>
  db.query(`SELECT * FROM department`, function (err, results, fields) {
    console.table(results);
  });

const addDepartment = (db) => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the department you would like to add?",
        name: "input",
      },
    ])
    .then((answers) => {
      db.query(`INSERT INTO department(name), VALUES(${answers.input})`);
    });
};

const addEmployee = (db) => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the name of the employee you would like to add?",
        name: "input",
      },
    ])
    .then((answers) => {
      db.query(
        `INSERT INTO employee(first_name, last_name), VALUES(${answers.input})`
      );
    });
};

const addRole = (db) => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the role you would like to add?",
        name: "input",
      },
    ])
    .then((answers) => {
      db.query(
        `INSERT INTO roles(title, salary, department_1), VALUES(${answers.input})`
      );
    });
};

const updateEmployeeRole = (db) => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which employee would you like to update?",
        name: "input",
      },
    ])
    .then((answers) => {
      console.log(answer.input);
      // db.query(`INSERT INTO department(name), VALUES(${answers.input})`);
    });
};

module.exports = {
  viewAllEmployees,
  viewAllRoles,
  viewAllDepartments,
  addDepartment,
  addEmployee,
  updateEmployeeRole,
  addRole,
};
