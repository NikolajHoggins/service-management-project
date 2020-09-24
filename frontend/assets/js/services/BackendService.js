class BackendService {
  constructor(apikey) {
    this.apikey = apikey;
    this.baseurl = `http://localhost:8000`;
  }

  addProduct(name, description, price, picture) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.baseurl + "/addProduct", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", this.apikey);
    xhr.send(
      JSON.stringify({
        name,
        description,
        price,
        picture,
      })
    );
  }

  getProducts() {
    return fetch(`${this.baseurl}/getProducts`, {
      headers: {
        Authorization: this.apikey,
      },
    }).then((resp) => resp.json());
  }

  getCityForecastByCoordinates(lat, lon) {
    //api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={YOUR API KEY}
    const url = `${this.baseurl}/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly&appid=${this.apikey}&units=metric`;

    return fetch(url).then((resp) => resp.json());
  }
}
