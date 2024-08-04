document.addEventListener("DOMContentLoaded", function() {
    const adPopup = document.getElementById('ad-popup');
    const closeAdBtn = document.getElementById('close-ad');

    // Display ad popup after 3 seconds
    setTimeout(() => {
        adPopup.style.display = 'block';
    }, 3000);

    // Close ad popup
    closeAdBtn.addEventListener('click', () => {
        adPopup.style.display = 'none';
    });

    // Add to Cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card');
            const productId = productCard.getAttribute('data-id');
            const productName = productCard.getAttribute('data-name');
            const productPrice = parseFloat(productCard.getAttribute('data-price'));

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push({ id: productId, name: productName, price: productPrice });
            localStorage.setItem('cart', JSON.stringify(cart));

            updateCartCount();
        });
    });

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        document.getElementById('cart-count').textContent = cart.length;
    }

    updateCartCount();
});
