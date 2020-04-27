module.exports = app => {
  const coquitalbar = require("../controllers/coquitalbar.controller");

  let router = require("express").Router();

  // Create a new Coquital
  router.post("/", coquitalbar.create);

//   // Retrieve all Coquital
//   router.get("/", coquitalbar.findAll);

//   // Retrieve all published Coquitais
//   router.get("/published", coquitalbar.findAllPublished);

  // Retrieve a single Coquital by id
  router.get("/:id", coquitalbar.findOne);

  // Update a Coquital with id
  router.put("/:id", coquitalbar.update);

  // Delete a Coquital with id
  router.delete("/:id", coquitalbar.delete);

//   // Create a new Coquital
//   router.delete("/", coquitalbar.deleteAll);

  app.use('/api/coquitalbar', router);
};