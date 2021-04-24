module.exports = app => {
    const { login, logout } = require("@controllers/login.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Product
    router.post("/login", login);
  
    // Retrieve all Products
    router.get("/logout", logout);
  
    app.use(router);
};