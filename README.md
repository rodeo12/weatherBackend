# weatherBackend

# Weather App
  A simple weather application that allows users to fetch current weather information for a city and save the data to a MongoDB database. The application displays weather information including city name, country, temperature, weather condition, and the current date and time.
  
# Features
 - Color Changing Background
 - Fetch current weather information from WeatherAPI.
 - Save weather data to MongoDB.
 - Display weather information on the frontend.
 - Displays weather icon as per the weather conditions.

 # Technologies Used
 - Node.js
 - Express.js
 - MongoDB with Mongoose
 - WeatherAPI
 - HTML, CSS, JavaScript
 
 # Getting Started

 * Prerequisites
   Make sure you have the following installed:
   - Node.js
   - MongoDB
   
 * Installation:

   1. Clone the repository:
       git clone https://github.com/yourusername/weather-app.git 

   2. Navigate to the project directory:cd weather-app

   3. Install the dependencies:
       npm install express mongoose dotenv axios cors nodemon

   4. Set up the environment variables:
       Create a .env file in the root directory and add your WeatherAPI key & mongoDB connection:
       apiKey=your_weather_api_key
       MONGODB_URI= "Your MongoDB connection link"

   
  # Running the Application
     Start the server:
       nodemon app.js

  # Usage:
    Enter the city name in the input field and click the "Get Weather" button.The weather information for the specified city will be displayed, including the city name, country, temperature, weather condition, and current date and time.To Save the weather data,click on the button "Save the Data" & it  will be save the data to the MongoDB database.
  
  # Project Structure 
    weather-app/
    │
    ├── .env
    ├── package.json
    ├── README.md
    ├── server/
    │   ├── models/
    │   │   └── WeatherData.js
    │   ├── routes/
    │   │   └── weatherRoute.js
    │   └── server.js
    └── public/
        ├── index.html
        ├── style.css
        └── script.js
        
  # License
    This project is licensed under the MIT License. See the LICENSE file for details.
    
  # Acknowledgments
    WeatherAPI for providing weather data