const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", async (_, res) => {
  const burgers = await burger.all();
  res.render("index", { burgers });
});

router.post("/api/burgers", async (req, res) => {
  const result = await burger.create([req.body.burger_name]);
  res.json({ id: result.insertId });
});

router.put("/api/burgers/:id", async (req, res) => {
  console.log(req.params);
  const condition = "id = " + req.params.id;
  console.log("condition", condition);
  const results = await burger.update(condition);
  if (results.changedRows === 0) {
    return res.status(404).end();
  }
  res.status(200).end();
});

module.exports = router;
