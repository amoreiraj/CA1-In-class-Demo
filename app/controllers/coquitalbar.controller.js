const db = require("../models");
const Coquitalbar = db.coquitalbars;


//Create and Save a new Coquital:

exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Coquital
  const Coquitalbar = new Coquitalbar({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // Save Coqquital in the database
  Coquitalbar
    .save(Coquitalbar)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


// Retrieve all Coquitais from the database.
const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Tutorial.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });

    //Find a single Coquital with an id:

exports.findOne = (req, res) => {
  const id = req.params.id;

  Coquitalbar.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Coquital with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Coquital with id=" + id });
    });
};

//Update a Coquital identified by the id in the request:

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Coquitalbar.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Coquital with id=${id}. Maybe Coquital was not found!`
        });
      } else res.send({ message: "Coquital was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Coquital with id=" + id
      });
    });
};

//Delete a Coquital with the specified id:

exports.delete = (req, res) => {
  const id = req.params.id;

  Coquitalbar.findByIdAndRemove(id)
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

//Delete all Coquitais from the database:

exports.deleteAll = (req, res) => {
  Coquitalbar.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Coquitais were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all coquitais."
      });
    });
};

//Find all Coquitais with published = true:

exports.findAllPublished = (req, res) => {
  Coquitalbar.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving coquitais."
      });
    });
};