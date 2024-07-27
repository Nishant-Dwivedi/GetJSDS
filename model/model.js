const mongoose = require("mongoose");
require("dotenv").config();

const db_url = `mongodb+srv://nishant:${process.env.PASSWORD}@getjsds.oosblyh.mongodb.net/?retryWrites=true&w=majority&appName=GetJSDS`;
console.log("connecting to the database");
mongoose
  .connect(db_url, { dbName: "getJSDS" })
  .then((res) => {
    console.log("successfully connected to the database.");
  })
  .catch((e) => console.error(e));

const data_structure_schema = new mongoose.Schema(
  {
    name: String,
    content: String,
  },
  {
    collection: "data structures",
  }
);
const data_structure_model = new mongoose.model(
  "Data Structure",
  data_structure_schema
);

module.exports = { data_structure_model };
