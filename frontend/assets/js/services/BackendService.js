class BackendService {
  constructor(apikey) {
    this.apikey = apikey;
    this.baseurl = `http://localhost:8000`;
  }

  async login(email, password) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.baseurl + "/login", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", this.apikey);
    xhr.send(
      JSON.stringify({
        email,
        password,
      })
    );
    console.log(xhr);
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

  getProductById() {
    return fetch(`${this.baseurl}/getProductById`, {
      headers: {
        Authorization: this.apikey,
      },
    }).then((resp) => resp.json());
  }
}
