function onGeoOk(position){
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
	console.log("your location is ", latitude, longitude);
}
function onGeoError(){
	alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);