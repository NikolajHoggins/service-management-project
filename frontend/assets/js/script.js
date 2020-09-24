var status;
const backendService = new BackendService("jesper");
const cartService = new CartService();

cartService.addItem(1);
cartService.getCart().then((resp) => console.log(resp));

backendService.getProducts().then((resp) => console.log(resp));

function logIn() {
  var username = document.getElementById("inputField1").value;
  var password = document.getElementById("inputField2").value;

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

function addItem() {
  var int = 0;

  while (int < 5) {
    var container = document.getElementById("flex-container");
    var newItem = document.createElement("div");
    newItem.innerHTML =
      "<h3>Item header</h3> <img src='https://freesvg.org/img/Placeholder.png'></img> <br> <p>Description</p> <br> <p>Price</p> <button>Add to cart</button>";
    container.appendChild(newItem);
    int++;
  }
}

function goToCart(){
  window.location.href = "cartpage.html";
}

function goToSignIn(){
  window.location.href = "loginpage.html";
}

function goToShop(){
  window.location.href = "index.html";
}