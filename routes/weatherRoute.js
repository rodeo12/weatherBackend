// server/routes/weather.js

const express = require('express');
const axios = require('axios');
const WeatherData = require('../models/WeatherData'); // Import the WeatherData model
const router = express.Router();

let global=[];

// Route to fetch weather data
router.get('/', async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.apiKEY; // Your weather API key from .env file
    
    // console.log(city,apiKey)
    try {
        
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        const weatherData = response.data;
        // console.log(weatherData)
        const currentDateTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

        // Save weather data to MongoDB
        const newWeatherData = new WeatherData({
            city: weatherData.location.name,
            country: weatherData.location.country,
            temperature: weatherData.current.temp_c,
            weatherCondition: weatherData.current.condition.text,
            humidity: weatherData.current.humidity,
            dateTime: currentDateTime
            
        });
         console.log(newWeatherData)
        global.push(newWeatherData)
        console.log(global)
        // await newWeatherData.save();

        res.json({...weatherData,
            dateTime: currentDateTime});
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});

// POST route to save weather data to MongoDB
router.post('/', async (req, res) => {
    // const city = req.body.city;
    // const apiKey = process.env.apiKEY; // Your weather API key from .env file
    // console.log(global)
    try {
        // const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        // const weatherData = response.data;
        

        // const currentDateTime = new Date().toLocaleString(); // Get current date and time

        // // Save weatherData to MongoDB using Mongoose
        // const newWeatherData = new WeatherData({
        //     city: weatherData.location.name,
        //     country: weatherData.location.country,
        //     temperature: weatherData.current.temp_c,
        //     weatherCondition: weatherData.current.condition.text,
        //     humidity: weatherData.current.humidity,
        //     dateTime: currentDateTime 
        // });

        if(global.length==0){
            console.log("No Data found")
        }else{
          // Save weatherData to MongoDB using Mongoose
          console.log(global[0])
          await global[0].save();
          global.pop()
          console.log(global)
        // const newWeatherData = new WeatherData({
        //     city: weatherData.location.name,
        //     country: weatherData.location.country,
        //     temperature: weatherData.current.temp_c,
        //     weatherCondition: weatherData.current.condition.text,
        //     humidity: weatherData.current.humidity,
        //     dateTime: currentDateTime 
        // });
        }

        // await newWeatherData.save();

        res.status(201).json({ message: 'Weather data saved successfully' });
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Error saving weather data' });
    }
});



  //to get MongoDb Saved Data
  router.get('/dbData', async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
    const limit = parseInt(req.query.limit) || 5; // Default to 10 items per page if not provided
  
    try {
      const weatherData = await WeatherData.find()
        .skip((page - 1) * limit)
        .limit(limit);
  
      const totalDocuments = await WeatherData.countDocuments();
      const totalPages = Math.ceil(totalDocuments / limit);
  
      res.status(200).json({
        data: weatherData,
        currentPage: page,
        totalPages: totalPages,
        totalDocuments: totalDocuments
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
      res.status(500).json({ error: 'Error fetching weather data' });
    }
  });
  
module.exports = router;
