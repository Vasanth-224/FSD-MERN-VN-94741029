const express = require('express');
const app = express();
const mongoose = require('mongoose')

const userRouter = require('./routes/studentRoutes');
const port = 8000;
mongoose
.connect("mongodb+srv://Vasanth:password22@cluster0.ankj0bf.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});
//middleware
app.use(express.json())

app.use(userRouter);

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
})