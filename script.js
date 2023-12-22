const inputbox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkweather(city) {
    const api_key = "2b389b83197dde26fc8b2eb026ffff37";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());

    if (weather_data.cod === '404') {
        location_not_found.style.display = "flex";
        weather_body.style.display="none";
        return;
    }
    location_not_found.style.display = "none";
    weather_body.style.display="flex";

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Kmph`;

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "https://cdn.pixabay.com/photo/2015/04/23/00/08/clods-735526_1280.jpg"; 
            break;
        case 'Clear':
            weather_img.src ="https://t4.ftcdn.net/jpg/05/34/04/49/360_F_534044927_VvU3IRpTwmkOaWQrZ6cQnSwTWldg06lB.jpg"; 
            break;
        case 'Rain':
            weather_img.src ="https://e0.pxfuel.com/wallpapers/469/943/desktop-wallpaper-rain-most-beautiful-rain.jpg"; 
            break;
        case 'Mist':
            weather_img.src ="https://st.depositphotos.com/1010263/2524/i/450/depositphotos_25248619-stock-photo-dense-smoke-background.jpg"; 
            break;
        case 'Snow':
            weather_img.src ="https://images.ctfassets.net/hrltx12pl8hq/5thrWp3Se4mcffFgMORIds/9013edc6afcdfe220a7334eb49d81b9d/snow-images.jpg?fit=fill&w=600&h=400"; 
            break;

        default:
            break;
    }
}

searchbtn.addEventListener('click', () => {
    checkweather(inputbox.value);
});