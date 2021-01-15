class Weather {
    constructor(city) {
        this.apiKey = '556eb809b2df4176b48105028200608';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}