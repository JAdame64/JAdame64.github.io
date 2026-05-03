// shipping.js

function validateForm() {
    // Billing info
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let zip = document.getElementById("zip").value.trim();
    let address = document.getElementById("address").value.trim();

    // Shipping info
    let shipName = document.getElementById("shipName").value.trim();
    let shipEmail = document.getElementById("shipEmail").value.trim();
    let shipZip = document.getElementById("shipZip").value.trim();
    let shipAddress = document.getElementById("shipAddress").value.trim();

    // Validation
    if (!name || !email || !zip || !address || !shipName || !shipEmail || !shipZip || !shipAddress) {
        alert("Please fill all required fields!");
        return false;
    }

    if (!email.includes("@") || !shipEmail.includes("@")) {
        alert("Invalid email address!");
        return false;
    }

    if (zip.length < 5 || isNaN(zip) || shipZip.length < 5 || isNaN(shipZip)) {
        alert("Invalid zip code!");
        return false;
    }

    // Display order summary
    let cart = getCart();
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return false;
    }

    let cartInfo = "<h3>Your Cart</h3><ul>";
    cart.forEach(item => {
        cartInfo += `<li>${item.qty} x ${item.name} (${item.color}, ${item.size}) - $${(item.price*item.qty).toFixed(2)}</li>`;
    });
    cartInfo += "</ul>";

    document.getElementById("message").innerHTML = `
        ${cartInfo}
        <h3>Shipping To:</h3>
        <p>${shipName}<br>${shipEmail}<br>${shipAddress}, ${shipZip}</p>
        <p>Thank you, ${name}! Your order has been placed.</p>
    `;

    // Clear cart and redirect after 3 seconds
    localStorage.removeItem("cart");
    setTimeout(() => {
        window.location.href = "store.html";
    }, 3000);

    return false;
}

// Copy billing info to shipping
function copyInfo() {
    const checkbox = document.getElementById("sameAsBilling");
    if (checkbox.checked) {
        document.getElementById("shipName").value = document.getElementById("name").value;
        document.getElementById("shipEmail").value = document.getElementById("email").value;
        document.getElementById("shipZip").value = document.getElementById("zip").value;
        document.getElementById("shipAddress").value = document.getElementById("address").value;
    } else {
        document.getElementById("shipName").value = "";
        document.getElementById("shipEmail").value = "";
        document.getElementById("shipZip").value = "";
        document.getElementById("shipAddress").value = "";
    }
}