const backendService = new BackendService("jesper");
let cart = JSON.parse(localStorage.getItem("cart"));

window.addEventListener("DOMContentLoaded", (event) => {
  main();

  document.getElementById("buyBtn").onclick = () => {
    if (!cart) {
      alert("please add items to cart");
    } else {
    }
  };
  document.getElementById("clearBtn").onclick = () => {
    localStorage.removeItem("cart");
    cart = JSON.parse(localStorage.getItem("cart"));
    main();
  };
});

function main() {
  document.getElementById("cart").innerHTML = "";

  if (!cart) {
    document.getElementById("cart").innerHTML = "No items in cart";
    return;
  }
  cart.forEach((element) => {
    backendService.getProductById(element, ({ result }) => {
      console.log(result);
      var newItem = document.createElement("div");
      var cartButton = document.createElement("button");

      cartButton.innerHTML = "Remove from cart";
      cartButton.onclick = () => removeItem(result.id);
      newItem.className = "test";
      newItem.innerHTML = `<h3>${result.name}</h3>`;
      newItem.innerHTML += `<p>${result.description}</p> <br>`;
      newItem.innerHTML += `<p>kr. ${result.price.toFixed(2)}</p>`;

      newItem.appendChild(cartButton);
      document.getElementById("cart").appendChild(newItem);
    });
  });
}
