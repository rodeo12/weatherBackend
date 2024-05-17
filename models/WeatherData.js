// server/models/WeatherData.js

const mongoose = require('mongoose');

const weatherDataSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
    },
    country: {
        type:String,
        requrired:true,
    },
    temperature: {
        type: Number,
        required: true,
    },
    humidity: {
        type: Number,
        required: true,
    },
    weatherCondition: {
        type: String,
        required: true,
    },
    dateTime: {
        type: String,
        required: true
    }
},
{ versionKey: false });


const WeatherData = mongoose.model('WeatherData', weatherDataSchema);

module.exports = WeatherData;
