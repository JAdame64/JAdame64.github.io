function addToCart(name, price, id) {
    const color = document.getElementById("color-" + id).value;
    const size = document.getElementById("size-" + id).value;
    const qty = parseInt(document.getElementById("qty-" + id).value);

    let cart = getCart();

    // Check if item with same attributes already exists
    let item = cart.find(i => i.name === name && i.color === color && i.size === size);

    if (item) {
        item.qty += qty;
    } else {
        cart.push({ name, price, color, size, qty });
    }

    saveCart(cart);

    alert(name + " added to cart!");
}