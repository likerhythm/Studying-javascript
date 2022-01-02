const API_KEY = "dcc9e1bf3d19bf54821e3175107d2af0";
const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");

function onGeoOk(position){
	lat = position.coords.latitude;
	lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
		city.innerText = data.name;
		weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
	});
}
function onGeoError(){
	alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);