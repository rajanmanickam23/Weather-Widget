document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'd20c27fc1f020dd29958478b6dc8968c'; // Replace with your OpenWeatherMap API key
    const city = 'Chennai'; // Replace with the city you want to fetch weather for
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const location = data.name;
            const temperature = Math.round(data.main.temp);
            const condition = data.weather[0].description;

            document.getElementById('location').textContent = location;
            document.getElementById('temperature').textContent = `${temperature}°C`;
            document.getElementById('condition').textContent = condition.charAt(0).toUpperCase() + condition.slice(1);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather').innerHTML = '<p>Error fetching weather data.</p>';
        });
});
