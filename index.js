const express = require("express");
const routes = require("./routes");
const helmet = require("helmet");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(helmet());

app.use("/v1", routes);

app.listen(process.env.PORT, () =>
  console.log(`server up   ${process.env.PORT}`)
);
