var status;
const backendService = new BackendService("jesper");

backendService.addProduct("Jesper", "Jespers diller", 79, "asdasd");
backendService.getProducts().then((resp) => getList(resp));
function logIn() {
  var username = document.getElementById("inputField1").value;
  var password = document.getElementById("inputField2").value;

  if (username == "user" && password == "password") {
    status = "user";
  } else if (username == "admin" && password == "password") {
    status = "admin";
  }

  if (status == "user") {
    window.location.href = "index.html";
  } else if (status == "admin") {
    window.location.href = "index.html";
  } else {
    document.getElementById("errorMessage").innerText =
      "ERROR, WRONG USERNAME OR PASSWORD";
  }
}

function getList(resp) {

  resp.forEach(element => {
    console.log(element.name);
    var container = document.getElementById("flex-container");
    var newItem = document.createElement("div");
    var cartButton = document.createElement("button");

    cartButton.innerHTML = "Add to cart";
    cartButton.onclick = ()=> addToCart(element.id);

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