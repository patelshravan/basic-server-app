const sql = require("./db");

exports.getAll = function () {
  return new Promise((resolve) => {
    let command = "SELECT * FROM employees";
    sql.query(command, (err, rows, fields) => {
      resolve(rows);
    });
  });
};

exports.getById = function (id) {
  return new Promise((resolve) => {
    let command = `SELECT * FROM employees WHERE empid="${id}"`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        console.log("Error:", err);
      }
      resolve(rows);
    });
  });
};

exports.insert = function (req) {
  return new Promise((resolve) => {
    let data = req.body;
    let command = `INSERT INTO employees(firstname,lastname,email,contactno) values("${data.firstname}","${data.lastname}","${data.email}","${data.contactno}");`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        resolve("Inserted!");
      }
    });
  });
};

exports.remove = function (id) {
  return new Promise((resolve) => {
    let command = `DELETE FROM employees Where id="${id}"`;
    sql.query(command, (err, rows, fields) => {
      resolve(rows);
    });
  });
};

exports.update = function (id, data) {
  return new Promise((resolve) => {
    let command = `UPDATE employees SET empid="${data.empid}" WHERE empid="${id}"`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        resolve("Failed to update.");
      } else {
        resolve("Updated!");
      }
    });
  });
};

exports.login = function (req) {
  return new Promise((resolve) => {
    let data = req.body;
    let command = `SELECT firstname FROM employees WHERE email="${data.email}" AND firstname="${data.firstname}"`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        console.log("Error:", err);
      }
      let allUsersStr = JSON.stringify(rows);
      var allUsers = JSON.parse(allUsersStr);
      if (allUsers.length > 0) {
        resolve(rows);
      } else {
        resolve("Invalid User!");
      }
    });
  });
};

exports.register = function (req) {
  return new Promise((resolve) => {
    let data = req.body;
    let command = `INSERT INTO employees(firstname,lastname,email,contactno) values("${data.firstname}","${data.lastname}","${data.email}","${data.contactno}");`;
    sql.query(command, (err, rows, fields) => {
      if (err) {
        resolve("Failed, Enter Valid Details!");
      } else {
        resolve("Registered!");
      }
    });
  });
};
