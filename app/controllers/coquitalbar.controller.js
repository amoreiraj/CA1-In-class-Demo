const db = require("../models");
//Controller import model Coquitalbar
const Coquitalbar = db.coquitalbars;

//Create and Save a new Coquital:

exports.create = (req, res) => {
  // Validate request
  if (!req.body.item) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Coquital
  const coquitalbar = new coquitalbar({
    item: req.body.item,
    price: req.body.price,
    published: req.body.published ? req.body.published : false
  });

  // Save Coqquital in the database
  coquitalbar
    .save(coquitalbar)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Coquitalbar."
      });
    });
};

// // Retrieve all Coquitais from the database.
// exports.findAll = (req, res) => {
// const item = req.query.item;
//   let condition = item ? { item: { $regex: new RegExp(item), $options: "i" } } : {};

//   coquitalbar.find(condition)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving coquitalbars."
//       });
//     });
// };
    
// //Find a single Coquital with an id:
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   coquitalbar.findById(id)
//     .then(data => {
//       if (!data)
//         res.status(404).send({ message: "Not found Coquital with id " + id });
//       else res.send(data);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .send({ message: "Error retrieving Coquital with id=" + id });
//     });
// };

// //Update a Coquital identified by the id in the request:
// exports.update = (req, res) => {
//     const id = req.params.id
//   if (!req.body) {
//     return res.status(400).send({
//       message: "Data to update can not be empty!"
//     });
//   }

//   coquitalbar.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot update Coquital with id=${id}. Maybe Coquital was not found!`
//         });
//       } else res.send({ message: "Coquital was updated successfully." });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Coquital with id=" + id
//       });
//     });
// };

//Delete a Coquital with the specified id:
exports.delete = (req, res) => {
  const id = req.params.id;
  coquitalbar.findByIdAndRemove(id)
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

// //Delete all Coquitais from the database:
// exports.deleteAll = (req, res) => {
//   coquitalbar.deleteMany({})
//     .then(data => {
//       res.send({
//         message: `${data.deletedCount} Coquitais were deleted successfully!`
//       });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all coquitais."
//       });
//     });
// };

// //Find all Coquitais with published = true:

// exports.findAllPublished = (req, res) => {
//   Coquitalbar.find({ published: true })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving coquitais."
//       });
//     });
// };