// Init weather object
const ui = new UI();
const storage = new Storage();
// Get stored location data
const city = storage.getLocationData();
const weather = new Weather(city);
// Get weather on DOM load
$(getWeather);
// Change Location event
$('#w-change-btn').on('click', (e) => {
    const city = $('#city').val();
    // Change Location
    weather.changeLocation(city);
    // Set local Storage item
    storage.setLocationData(city);
    // Get and display weather
    getWeather();
    // Close modal
    $('#locModal').modal('hide');
});
function getWeather() {
    weather.getWeather()
        .then(results => ui.paint(results))
        .catch(err => console.log(err));
}

