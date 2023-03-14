const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const db = mysql.createConnection(
  {
    user: "root",
    password: "Monty1020!",
    database: "columbia_db",
    host: "localhost",
  }
  // console.log(database)
);

// const table = "department";
// db.query(`SELECT * FROM ${table}`, function (err, results, fields) {
//   console.log(results);
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log(`Connected`);
// });

const choices = [
  {
    value: "View all departments",
    num: 1,
  },
  {
    value: "View all roles",
    num: 2,
  },
  {
    value: "View all employees",
    num: 3,
  },
  {
    value: "Add a department",
    num: 4,
  },
  {
    value: "Add a role",
    num: 5,
  },
  {
    value: "Add an employee",
    num: 6,
  },
  {
    value: "Update an employee role",
    num: 7,
  },
];

inquirer
  .prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: choices,
      name: "beginning",
    },
    /* Pass your questions in here */
  ])
  .then((answers) => {
    const table = "department";
    console.log(department.choices.num);
    console.log(answers.beginning);
    db.query(`SELECT * FROM ${table}`, function (err, results, fields) {
      console.log(results.choices.num);
      console.log(department.choices.num);

      // if results.num ==1
    });
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
