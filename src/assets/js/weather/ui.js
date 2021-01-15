class UI {
    constructor() {
        this.location = $('#w-location');
        this.desc = $('#w-desc');
        this.string = $('#w-string');
        this.details = $('#w-details');
        this.icon = $('#w-icon');
        this.humidity = $('#w-humidity');
        this.fellsLike = $('#w-feels-like');
        this.wind = $('#w-wind');
    }

    paint(weather) {
        this.location.text(`${weather.location.country}, ${weather.location.name}`);
        this.desc.text(weather.current.condition.text);
        this.string.text(`${weather.current.temp_c} C`);
        this.icon.attr('src', weather.current.condition.icon);
        this.humidity.text(`Relative Humidity: ${weather.current.humidity}`);
        this.fellsLike.text(`Feels Like: ${weather.current.feelslike_c} C`);
        this.wind.text(`Wind: ${weather.current.wind_kph} km/h`);
    }
}