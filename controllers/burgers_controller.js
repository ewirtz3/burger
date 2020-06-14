const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router;

router.get("/", async (_, res) => {
  const burgers = await burger.all();
  res.render("index", { burgers });
});

router.post("/api/burgers", async (req, res) => {
  const result = await burger.create([req.body.burger_name]);
  res.json({ id: result.insertId });
});

router.put("/api/burgers/:burger_name", async (req, res) => {
  console.log(req);
  const condition = "burger_name = " + req.params.burger_name;
  const results = await burger.update(
    {
      devoured: true,
    },
    condition
  );
  if (result.changedRows === 0) {
    return res.status(404).end();
  }
  res.status(200).end();
});

module.exports = router;
