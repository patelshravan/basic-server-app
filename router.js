var authController = require("./controllers/authcontroller");
var userController = require("./controllers/usercontroller");

//HTTP request mapping is done using routing technique
module.exports = function (app) {
  app
    .route("/api/employees")
    .get(userController.getAll) // get all employees
    .post(userController.insert); //insert new employees

  app
    .route("/api/employees/:id")
    .delete(userController.remove) //remove existing employees whose id = ?
    .put(userController.update) //update existing employees whose id = ?
    .get(userController.getById); //get  existing employees whose id = ?

  app.route("/api/login").post(authController.login);
  app.route("/api/register").post(authController.register);
};
