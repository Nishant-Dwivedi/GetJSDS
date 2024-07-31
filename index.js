const express = require("express");
const cors = require("cors");
const data_structure_model = require("./model/model").data_structure_model;

const app = express();
app.listen(3001, () => {
  console.log("listening on PORT: 3001");
});

app.use(cors());
app.get("/ds/:ds_name", (req, res) => {
  console.log(`request received for ${req.params.ds_name}`);
  data_structure_model
    .findOne({ name: req.params.ds_name })
    .then((ds) => {
      console.log(
        ds != null
          ? `${ds.name} fetched successfully from the database.`
          : `database couldn't find the requested resource.`
      );
      ds !== null ? res.json(ds) : res.status(404).send(`resource not found.`);
    })
    .catch((e) => {
      console.error(e);
      res.status(500).send(`internal server error.`);
    });
});
