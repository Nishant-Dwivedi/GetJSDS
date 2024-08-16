const mongoose = require("mongoose");

const data_structure_schema = new mongoose.Schema(
  {
    name: String,
    content: String,
    usage: String,
  },
  {
    collection: "data structures",
  }
);

const data_structure_model = new mongoose.model(
  "data structures", // collection name
  data_structure_schema
);

module.exports = { data_structure_model };
