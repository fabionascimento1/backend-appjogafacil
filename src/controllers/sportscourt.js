const Sportscourt = require("../models/sportscourt");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
  //console.log("req.body", req.body);
  const sportscourt = new Sportscourt(req.body);
  sportscourt.save((err, sportscourt) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json({
      sportscourt
    });
  });
};

exports.listByUser = (req, res) => {
  Sportscourt.find()
    .where({
      user: req.params.userId
    })
    .exec(function(err, sportscourties) {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        });
      } else {
        res.status(200).json(sportscourties);
      }
    });
};

exports.listActiveByUser = (req, res) => {
  Sportscourt.find()
    .where({
      user: req.params.userId,
      active: 1
    })
    .exec(function(err, sportscourties) {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        });
      } else {
        res.status(200).json(sportscourties);
      }
    });
};

exports.update = (req, res) => {
  Sportscourt.findById(req.params.id, function(err, sportscourt) {
    if (err) res.send(err);
    sportscourt.active = req.params.status;
    sportscourt.save((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        });
      }
      res.json(data);
    });
  });
};
