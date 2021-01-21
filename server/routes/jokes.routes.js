const jokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
  // CRUD routes
  // Create
  app.post("/api/jokes/new", jokesController.createJoke);
  // Read
  // app.get("/api", jokesController.index);
  app.get("/api/jokes/random", jokesController.getAllJokes);
  app.get("/api/joke/:joke_id", jokesController.getJoke);
  // Update
  app.put("/api/joke/update/:joke_id", jokesController.updateJoke);
  // Delete
  app.delete("/api/joke/delete/:joke_id", jokesController.deleteJoke);
};
