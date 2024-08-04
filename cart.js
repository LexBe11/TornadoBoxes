document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout');

    // Load cart from local storage
    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <h4>${item.product}</h4>
                <p>Price: $${item.price}</p>
            `;
            cartItems.appendChild(cartItem);
            total += parseFloat(item.price);
        });
        cartTotal.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
        document.getElementById('cart-count').textContent = cart.length;
    }

    // Handle checkout
    checkoutButton.addEventListener('click', () => {
        window.location.href = 'https://www.paypal.com';
    });

    // Initial load
    loadCart();
});
