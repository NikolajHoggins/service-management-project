var status;
function logIn(){
    var username = document.getElementById("inputField1").value;
    var password = document.getElementById("inputField2").value;

    if (username == "user" && password == "password"){
        status = "user"
    } else if (username == "admin" && password == "password"){
        status = "admin"
    }

    if (status == "user"){
        
    } else if (status == "admin"){
        
    }
}