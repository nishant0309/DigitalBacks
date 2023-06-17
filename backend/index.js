const connecttoMongo = require('./db');
connecttoMongo();

const express= require('express');
const watchlistRoutes= require('./Routes/watchlistRoutes');

const app=express();
const port=5000;

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
})
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));   // Now our endpoint will be /api/CreateUser
app.use('/api/watchlist',watchlistRoutes);
app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
