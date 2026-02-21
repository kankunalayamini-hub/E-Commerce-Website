let cart = [];
let total = 0;
let cartCount = 0;

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    total += price;
    cartCount++;

    document.getElementById("cart-count").innerText = cartCount;
}