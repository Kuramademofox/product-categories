// script.js
document.addEventListener('DOMContentLoaded', function () {
    const ratings = document.querySelectorAll('.rating');

    ratings.forEach(rating => {
        const stars = rating.querySelectorAll('.star');

        stars.forEach(star => {
            star.addEventListener('click', function () {
                const value = this.dataset.value;
                const productId = rating.dataset.productId;

                // Handle the rating logic for the specific product
                console.log(`Product ID: ${productId}, Rating: ${value}`);

                // Update the UI based on rating (optional)
                stars.forEach(s => {
                    s.style.color = s.dataset.value <= value ? '#f5c518' : '#ccc';
                });
            });
        });
    });
});

