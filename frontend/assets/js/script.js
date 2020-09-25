var status;
const backendService = new BackendService("jesper");
const cartService = new CartService();

backendService.getProducts().then((resp) => getList(resp));
window.addEventListener("DOMContentLoaded", (event) => {
  main();
});

function main() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  if (user) {
    document.getElementById("loginBtn").innerHTML = user.email;
    document.getElementById("loginBtn").addEventListener("click", logout);
  } else {
    document.getElementById("loginBtn").onclick = () =>
      (window.location.href = "/loginPage.html");
  }
}

function logout(e) {
  e.preventDefault();
  localStorage.removeItem("user");
  window.location.href = "/";
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
