const db = require("../models");
//Controller import model Coquital
const Coquital = db.coquital;

//Create and Save a new Coquital:

exports.create = (req, res) => {
  // Validate request
  if (!req.body.item) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Coquital
  const coquital = new Coquital({
    item: req.body.item,
    price: req.body.price,
    published: req.body.published ? req.body.published : false
  });

  // Save Coqquital in the database
  coquital
    .save(coquital)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Coquital."
      });
    });
};

  exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Coquital.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: "Tutorial was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

//Delete a Coquital with the specified id:
exports.delete = (req, res) => {
  const id = req.params.id;
  
  Coquital.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Coquital with id=${id}. Maybe Coquital was not found!`
        });
      } else {
        res.send({
          message: "Coquital was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Coquital with id=" + id
      });
    });
};

