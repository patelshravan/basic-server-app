//database connectivity
const mysql = require("mysql");
//connection string
const conUri = {
  host: "localhost",
  user: "root",
  password: "sp@123",
  database: "banking",
};

const con = mysql.createConnection(conUri);
con.connect((err) => {
  if (!err) {
    console.log("connection is successful with mysql DB");
  } else {
    console.log(err);
  }
});

module.exports = con;
