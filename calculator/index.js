const express = require("express");
const app = express();
const router = express.Router();

const calculator = {
  add: function(req, res) {
    let answer =
      parseInt(req.query.firstNumber) + parseInt(req.query.secondNumber);
    res.send({answer});
  },
  subtract: function(req, res) {
    let answer =
      parseInt(req.query.firstNumber) - parseInt(req.query.secondNumber);
    res.send({answer});
  },
  multiply: function(req, res) {
    let answer =
      parseInt(req.query.firstNumber) * parseInt(req.query.secondNumber);
    res.render({answer});
  },
  divide: function(req, res) {
    let answer =
      parseInt(req.query.firstNumber) / parseInt(req.query.secondNumber);
    res.send({answer});
  },
  list: function(req, res) {
    let answers = [];
    answers.push({ index: 0, number: parseInt(req.query.firstNumber) });
    answers.push({ index: 1, number: parseInt(req.query.secondNumber) });
    res.send({ answers });
  }
};
module.exports = calculator;
