const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router;

router.get("/", (req, res) => {
  burger.all((data) => {
    console.log({ burgers: data });
    res.render("index", { burgers: data });
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create([req.body.burger_name], (result) => {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:burger_name", (req, res) => {
  console.log(req);
  burger.update([req.body.burger_name], (result) => {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
