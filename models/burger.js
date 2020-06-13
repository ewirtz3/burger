const orm = require("../config/orm.js");

const cat = {
  all: function (cb) {
    orm.selectAll((res) => {
      cb(res);
    });
  },
  create: function (burger_name, cb) {
    orm.insertOne(burger_name, (res) => {
      cb(res);
    });
  },
  update: function (burger_name, cb) {
    orm.updateOne(burger_name, (res) => {
      cb(res);
    });
  },
};

module.exports = cat;
