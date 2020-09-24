class CartService {
  addItem(id) {
    var cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  async getCart() {
    return localStorage.getItem("cart");
  }
}
