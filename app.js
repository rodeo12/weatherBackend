const express= require("express");
const connectDB = require('./db');
const weatherRoute = require('./routes/weatherRoute');

require("dotenv").config();
const cors= require("cors");

const PORT= process.env.PORT ;
const app= express();
connectDB();

//Middlewares:
app.use(cors());
app.use(express.json())
app.use('/weather', weatherRoute);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.get("/",(req,res)=>{
    res.send("Welcome To Weather App Backend");
})


app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})

