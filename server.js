const mongoose = require("mongoose");
const express = require("express");

const PORT = process.env.PORT || 3004;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json);

app.use(express.static("public"));

app.use(require("./routes/htmlroutes"));
app.use(require("./routes/apiroutes"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout");



app.listen(PORT, () => {
    console.log(" App running on PORT", PORT)
});