const { User } = require("../models/users");

const controllers = {
  myIndex(req, res) {
    res.render("index", { title: "Express" });
  },
  myUser(req, res) {
    res.json({
      name: "Axel",
      age: 27,
    });
  },
  newUser: async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json(user);
    } catch (err) {
      res.status(501).json({
        msg: "No se puede guardar el usuario en la DB, ese email ya existe",
        err,
      });
    }
  },
  verUser: async (req, res) => {
    const users = await User.find();
    res.json({ users })
  },
};

module.exports = controllers;
