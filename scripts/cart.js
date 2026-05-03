// cart.js

function loadCart() {
    let cart = getCart();
    let html = "";
    let total = 0;

    cart.forEach((item, index) => {
        let itemTotal = item.price * item.qty;
        total += itemTotal;

        html += `
        <div class="cart-item">
            <strong>${item.name}</strong><br>
            ${item.color}, ${item.size}<br>
            Qty:
            <input type="number" min="1" value="${item.qty}" 
                onchange="updateQty(${index}, this.value)">
            <button onclick="removeItem(${index})">Remove</button>
            <p>$${itemTotal.toFixed(2)}</p>
        </div>`;
    });

    document.getElementById("cart-area").innerHTML = html;
    document.getElementById("total").textContent = total.toFixed(2);
}

// Update quantity of a specific item
function updateQty(index, qty) {
    let cart = getCart();
    cart[index].qty = parseInt(qty);
    saveCart(cart);
    loadCart();
}

// Remove item from cart
function removeItem(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    loadCart();
}

// Load cart when page loads
window.onload = loadCart;