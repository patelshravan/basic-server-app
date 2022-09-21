const dal = require("../models/dal");

exports.login = async (req, res) => {
  let data = [];
  data = await dal.login(req);
  res.send(data);
};

exports.register = async (req, res) => {
  let data = [];
  data = await dal.register(req);
  res.send(data);
};
