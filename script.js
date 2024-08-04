// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Cart updated:', cart);
    };

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const name = productCard.dataset.name;
            const price = parseFloat(productCard.dataset.price);
            const product = { name, price };

            cart.push(product);
            updateCart();
        });
    });

    const searchProducts = () => {
        const query = document.getElementById('searchInput').value.toLowerCase();
        const products = document.querySelectorAll('.product-card');
        products.forEach(product => {
            const name = product.dataset.name.toLowerCase();
            if (name.includes(query)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    };

    window.searchProducts = searchProducts;
});
