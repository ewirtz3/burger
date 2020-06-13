const db = require("../config/connection.js");

const orm = {
  selectAll(cb) {
    const query = "SELECT * FROM burgers;";
    db.query(query, (err, result) => {
      if (err) {
        console.error(err);
      }
      cb(result);
    });
  },

  insertOne(burger_name, cb) {
    const query = "INSERT INTO burgers (burger) VALUES (?);";
    console.log(query);
    db.query(query, [burger_name], (err, result) => {
      if (err) {
        console.err(err);
      }
      cb(result);
    });
  },

  updateOne(burger_name, cb) {
    console.log(burger_name);
    const query = "UPDATE burgers SET devoured = true WHERE burger_name = (?)";
    db.query(query, [burger_name], (err, result) => {
      if (err) {
        console.error(err);
      }
      cb(result);
    });
  },
};

module.exports = orm;
