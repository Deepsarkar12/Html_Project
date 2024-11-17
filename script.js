// Add any interactive JS here
document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    let cart = [];

    // Function to update the cart display
    function updateCart() {
        const cartCount = document.getElementById('cartCount');
        const cartItems = document.getElementById('cartItems');
        const totalPrice = document.getElementById('totalPrice');
        let total = 0;

        // Clear previous cart items
        cartItems.innerHTML = '';

        // Add new cart items
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.innerHTML = `${item.name} - Rs. ${item.price} <button class="btn btn-danger btn-sm float-right removeFromCart" data-index="${index}">Remove</button>`;
            cartItems.appendChild(li);
            total += item.price;
        });

        // Update cart count
        cartCount.textContent = cart.length;

        // Update total price
        totalPrice.textContent = `Total: Rs. ${total}`;

        // Show the cart section if there are items in the cart
        document.getElementById('cartSection').style.display = cart.length > 0 ? 'block' : 'none';
    }

    // Event listener to add items to cart
    document.querySelectorAll('.addToCart').forEach(button => {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const price = parseInt(this.getAttribute('data-price'));
            cart.push({ name, price });
            updateCart();
        });
    });

    // Event listener to remove items from cart
    document.getElementById('cartItems').addEventListener('click', function(e) {
        if (e.target.classList.contains('removeFromCart')) {
            const index = e.target.getAttribute('data-index');
            cart.splice(index, 1);
            updateCart();
        }
    });

    // Event listener for checkout (optional)
    document.getElementById('checkoutButton').addEventListener('click', function() {
        alert('Thank you for your order! Proceeding to payment.');
        cart = []; // Clear the cart
        updateCart(); // Update the cart display
    });
});
