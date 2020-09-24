const backendService = new BackendService("jesper");
document.getElementById("submit").addEventListener("click", function(e){e.preventDefault()});

function adminAddItem() {
    
    var name = document.getElementById("itemName").value;
    var desc = document.getElementById("itemDescription").value;
    var price = document.getElementById("itemPrice").value;
    var img = document.getElementById("itemImg").value;

    backendService.addProduct(name, desc, price, img);
    console.log("name: " + name + "\ndesc: " + desc + "\nprice: " + price + "\nimg: " + img);
 
    name.innerHTML = "";
    desc.innerHTML = "";
    price.innerHTML = "";
    img.innerHTML = "";
}