class BackendService {
  constructor(apikey) {
    this.apikey = apikey;
    this.baseurl = `http://localhost:8000`;
  }

  login(email, password, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.baseurl + "/login", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", this.apikey);
    xhr.responseType = "text";
    xhr.send(
      JSON.stringify({
        email,
        password,
      })
    );
    xhr.onload = () => callback(JSON.parse(xhr.responseText));
  }

  register(email, password, callback = () => {}) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.baseurl + "/register", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", this.apikey);
    xhr.send(
      JSON.stringify({
        email,
        password,
      })
    );
    xhr.onload = () => callback(JSON.parse(xhr.responseText));
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

  getProductById(id, callback = () => {}) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.baseurl + "/getProductById", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", this.apikey);
    xhr.send(
      JSON.stringify({
        id,
      })
    );
    xhr.onload = () => callback(JSON.parse(xhr.responseText));
  }
}
