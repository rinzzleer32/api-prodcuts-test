
import express from "express";


//database
import mongoose from "mongoose";

mongoose.connect(
    "databaseurl",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(
        console.log("databse connected"),
        
    );
//rutas
import router from "./routes/productsRoutes.js";

const app = express();

const port = 3000;

app.listen(port, ()=>console.log("Sevidor encendido en el "+ port));

app.use(express.json());
app.use("/api/v1/products",router);