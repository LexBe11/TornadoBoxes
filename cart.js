// cartScript.js

document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updateCartDisplay = () => {
        const cartItemsContainer = document.getElementById('cartItems');
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `<span>${item.name}</span><span>$${item.price.toFixed(2)}</span>`;
            cartItemsContainer.appendChild(itemElement);
            total += item.price;
        });

        const totalElement = document.createElement('div');
        totalElement.className = 'cart-total';
        totalElement.innerHTML = `<strong>Total:</strong> $${total.toFixed(2)}`;
        cartItemsContainer.appendChild(totalElement);
    };

    const checkout = () => {
        alert('Redirecting to PayPal...');
        // Implement PayPal checkout process here
    };

    const cancel = () => {
        localStorage.removeItem('cart');
        alert('Cart has been cleared.');
        window.location.reload();
    };

    document.getElementById('checkoutButton').addEventListener('click', checkout);
    document.getElementById('cancelButton').addEventListener('click', cancel);

    updateCartDisplay();
});
