module.exports = app => {
  const coquitalbars = require("../controllers/coquitalbar.controller.js");

  var router = require("express").Router();

  // Create a new Coquital
  router.post("/", coquitalbars.create);

  // Retrieve all Coquital
  router.get("/", coquitalbars.findAll);

  // Retrieve all published Coquitais
  router.get("/published", coquitalbars.findAllPublished);

  // Retrieve a single Coquital with id
  router.get("/:id", coquitalbars.findOne);

  // Update a Coquital with id
  router.put("/:id", coquitalbars.update);

  // Delete a Coquital with id
  router.delete("/:id", coquitalbars.delete);

  // Create a new Coquital
  router.delete("/", coquitalbars.deleteAll);

  app.use('/api/coquitalbars', router);
};