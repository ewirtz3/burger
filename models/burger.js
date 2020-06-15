const orm = require("../config/orm.js");

const burger = {
  all() {
    return orm.selectAll();
  },
  create(burger_name) {
    return orm.insertOne(burger_name);
  },
  update(condition) {
    return orm.updateOne(condition);
  },
};

module.exports = burger;
