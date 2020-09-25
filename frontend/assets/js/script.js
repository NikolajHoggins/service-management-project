var status;
const backendService = new BackendService("jesper");
const cartService = new CartService();

backendService.getProducts().then((resp) => getList(resp));

window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("errorMessage").innerText = "";
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    backendService.login(username, password, (res) => {
      if (res.status === "success") {
        //Set token
      } else {
        //Error msg
        document.getElementById("errorMessage").innerText =
          "ERROR, WRONG USERNAME OR PASSWORD";
      }
    });

    //Attempt login

    if (status == "user") {
      goToShop();
    } else if (status == "admin") {
      goToShop();
    } else {
    }
  });
});

function logIn() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  console.log(username, password);
  if (username == "user" && password == "password") {
    status = "user";
  } else if (username == "admin" && password == "password") {
    status = "admin";
  }

  if (status == "user") {
    goToShop();
  } else if (status == "admin") {
    goToShop();
  } else {
    document.getElementById("errorMessage").innerText =
      "ERROR, WRONG USERNAME OR PASSWORD";
  }
}

function getList(resp) {
  resp.forEach((element) => {
    console.log(element.name);
    var container = document.getElementById("flex-container");
    var newItem = document.createElement("div");
    var cartButton = document.createElement("button");

    cartButton.innerHTML = "Add to cart";
    cartButton.onclick = () => addToCart(element.id);

    newItem.innerHTML = `<h3>${element.name}</h3>`;
    newItem.innerHTML += `<img src='https://freesvg.org/img/Placeholder.png'></img> <br>`;
    newItem.innerHTML += `<p>${element.description}</p> <br>`;
    newItem.innerHTML += `<p>kr. ${element.price.toFixed(2)}</p>`;

    newItem.appendChild(cartButton);
    container.appendChild(newItem);
  });
}

function addToCart(id) {
  console.log(id + " added to cart");
}
