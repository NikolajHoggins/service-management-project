const backendService = new BackendService("jesper");

window.addEventListener("DOMContentLoaded", (event) => {
  main();
});

function main() {
  document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();
  });
  validateAdmin();
  adminAddItem();
}

function validateAdmin() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || user.type !== "admin") {
    window.location.href = "/?error=no_admin";
  }
}

function adminAddItem() {
  var name = document.getElementById("itemName").value;
  var desc = document.getElementById("itemDescription").value;
  var price = document.getElementById("itemPrice").value;
  var img = document.getElementById("itemImg").value;

  backendService.addProduct(name, desc, price, img);
  console.log(
    "name: " + name + "\ndesc: " + desc + "\nprice: " + price + "\nimg: " + img
  );

  name.innerHTML = "";
  desc.innerHTML = "";
  price.innerHTML = "";
  img.innerHTML = "";
}
