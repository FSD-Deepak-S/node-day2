import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRouter from './Routers/pensioner.router.js'

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json())

const port = process.env.PORT || 5000;


app.get("/",(req,res)=>{
    res.status(200).send("Welcome to our API");
})


app.use('/api/pensioner',productRouter);

app.listen(port,()=>{
    console.log();
    
})