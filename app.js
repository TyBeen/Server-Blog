const express = require("express");
const cors = require("cors");
require("dotenv").config();
const fileRoute = require("./routes/fileRoute");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { PORT } = process.env;

// Rute for using the file route and controller logic
app.use("/fileData", fileRoute);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})