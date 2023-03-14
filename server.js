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
  },
  console.log("db columbia")
);

db.connect((err) => {
  if (err) throw err;
  console.log(`Connected`);
});
