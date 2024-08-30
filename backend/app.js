const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const cors = require("cors");
const categoryRoutes = require("./routes/category");


app.use(cors());
app.use(express.json()); //middlewareee

app.get("/", (req, res) => {
    res.send("server running");
});
app.use("/category",categoryRoutes);
async function connectDb(){
   await mongoose.connect("mongodb://localhost:27017",{
        dbName: "med-app",

    });
console.log("Mongodb connected");
}

connectDb().catch((err)=>{
    console.error(err);
})
app.listen(port, ()=>{
    console.log("Server running on port", port);
});