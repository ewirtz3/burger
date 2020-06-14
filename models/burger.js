const orm = require("../config/orm.js");

const burger = {
  all() {
    return orm.selectAll();
  },
  create(burger_name) {
    return orm.insertOne(burger_name);
  },
  update(burger_name, condition) {
    return orm.updateOne(burger_name, condition);
  },
};

module.exports = cat;
