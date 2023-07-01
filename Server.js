const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

// const routes = require("./routes/todoroute")


require("dotenv").config();
const app = express();
const PORT = process.env.port || 5000;

app.use(express.json())
app.use(cors())
// app.use(cors)
mongoose
.connect(process.env.MONFODB_URL)
.then(() => console.log("connected to mongo db"))
.catch((err) => console.log(err));

// routes.use(express.json());
app.use( require("./routes/todoroute"));

app.listen(PORT, () => console.log(`listenig to ${PORT} `));