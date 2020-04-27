module.exports = app => {
  const coquital= require("../controllers/coquital.controller");

router = require("express").Router();

  // Create a new Coquital
  router.post("/", coquital.create);

//   // Retrieve all Coquital
 router.get("/test", coquital.findAll);

//   // Retrieve all published Coquitais
//   router.get("/published", coquitalbar.findAllPublished);

  // Retrieve a single Coquital by id
  router.get("/:id", coquital.findOne);

  // Update a Coquital with id
  router.put("/:id", coquital.update);

  // Delete a Coquital with id
  router.delete("/:id", coquital.delete);

//   // Create a new Coquital
//   router.delete("/", coquitalbar.deleteAll);

module.exports = router;

  app.use('/api/coquital', router);
};