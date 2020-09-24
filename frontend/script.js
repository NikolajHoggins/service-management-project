function addItem() {
    var int = 0;

    while(int < 5) {
        var container = document.getElementById("flex-container");
        var newItem = document.createElement("div");
        newItem.innerHTML = 
            "<h3>Item header</h3> <img src='https://freesvg.org/img/Placeholder.png'></img> <br> <p>Description</p> <br> <p>Price</p> <button>Add to cart</button>";
        container.appendChild(newItem);
        int++;
    }


}