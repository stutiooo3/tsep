
const form = document.getElementById('location-form');
const locationInput = document.getElementById('location');
const forecastDiv = document.getElementById('forecast');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const location = locationInput.value.trim();
	if (!location) {
		alert('Please enter a valid location.');
		return;
	}
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c0e3d8c26fmsh39eac4c50506fd2p16fdcfisn877bcd1c4479)
		.then((response) => response.json())
		.then((data) => {
			const { name, main, weather } = data;
			const forecastHTML = `
				<h2>${name}</h2>
				<p>Temperature: ${main.temp} K</p>
				<p>Humidity: ${main.humidity}%</p>
				<p>Weather: ${weather[0].description}</p>
			`;
			forecastDiv.innerHTML = forecastHTML;
		})
		.catch((error) => {
			console.error(error);
			alert('Error fetching weather data. Please try again.');
		});
});