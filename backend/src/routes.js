const express = require("express");
const connection = require("./database/connection");

const routes = express.Router();

/**ok
 * GET /developers
 * Codes 200
 */
routes.get("/developers", async (req, res, next) => {
  try {
    const developers = await connection("developers").select("*");
    return res.json(developers);
  } catch (e) {
    next(e);
  }
});

/**ok
 * GET /developers/{id}
 * Codes 200 / 404
 */
routes.get("/developers/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const developerId = await connection("developers")
      .select("*")
      .where({ id });

    return developerId.length
      ? res.json(developerId)
      : res.status(404).send("não encontrado");
  } catch (e) {
    next(e);
  }
});

/**ok
 * POST /developers
 * Codes 201 / 400
 */
routes.post("/developers", async (req, res, next) => {
  try {
    const { nome, sexo, idade, hobby, datanascimento } = req.body;

    const includeDeveloper = await connection("developers").insert({
      nome,
      sexo,
      idade,
      hobby,
      datanascimento,
    });

    return includeDeveloper ? res.status(201).send() : res.status(400).send();
  } catch (e) {
    next(e);
  }
});

/**
 * PUT /developers/{id}
 * Codes 200 / 400
 */
routes.put("/developers/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nome, sexo, idade, hobby, datanascimento } = req.body;

    const updatedDeveloper = await connection("developers")
      .update({
        nome,
        sexo,
        idade,
        hobby,
        datanascimento,
      })
      .where({ id });

    return updatedDeveloper ? res.status(200).send() : res.status(400).send();
  } catch (e) {
    next(e);
  }
});

/**ok
 * DELETE /developers/{id}
 * Codes 204 / 400
 */
routes.delete("/developers/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const removedDeveloper = await connection("developers")
      .delete("*")
      .where({ id });
    console.log(removedDeveloper);
    return removedDeveloper ? res.status(204).send() : res.status(400).send();
  } catch (e) {
    next(e);
  }
});

module.exports = routes;
