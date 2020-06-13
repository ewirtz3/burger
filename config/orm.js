const db = require("../config/connection.js");

const orm = {
  selectAll() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM burgers;";
      db.query(query, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },

  insertOne(burger_name) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO burgers (burger) VALUES (?);";
      console.log(query);
      db.query(query, [burger_name], (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },

  updateOne(burger_name) {
    return new Promise((resolve, reject) => {
      console.log(burger_name);
      const query =
        "UPDATE burgers SET devoured = true WHERE burger_name = (?)";
      db.query(query, [burger_name], (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
};

module.exports = orm;
