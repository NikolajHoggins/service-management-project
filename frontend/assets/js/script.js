var status;
const backendService = new BackendService("jesper");
//Test to talk to backend
backendService.getRequestedCities().then((resp) => console.log(resp));

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
