const backendService = new BackendService("jesper");

window.addEventListener("DOMContentLoaded", (event) => {
  main();
});

function main() {
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("errorMessage").innerText = "";
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    backendService.login(username, password, (res) => {
      if (res.status === "success") {
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: res.user[0].id,
            type: res.user[0].user_type,
            email: res.user[0].email,
          })
        );
        window.location.href = "/";
      } else {
        //Error msg
        document.getElementById("errorMessage").innerText =
          "ERROR, WRONG USERNAME OR PASSWORD";
      }
    });
  });
}
