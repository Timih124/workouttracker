//adding dependicies

const mongoose = require("mongoose");
const express = require("express");

const PORT = process.env.PORT || 3004;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes/htmlroutes"));
app.use(require("./routes/apiroutes"));

//error is popping on node side about DeprecationWarning.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true }, { useUnifiedTopology: true },
// adding to connect to MongoDB Atlas

{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }

);



app.listen(PORT, () => {
    console.log(" App running on PORT", PORT)
});