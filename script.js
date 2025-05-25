document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for carousel (optional, but good for UX)
    const featuredCarousel = document.querySelector('.featured-carousel');

    // Basic carousel functionality (if you want automated scrolling or manual nav)
    // For now, it's just a horizontally scrollable container with CSS snap points.
    // If you want more advanced carousel (dots, arrows, auto-play), you'll need more JS.

    // Example of a simple floating effect for the logo (CSS handles most of this)
    const logo = document.querySelector('.logo img');
    if (logo) {
        // You can add more complex JS animations here if needed,
        // but for a gentle "floating" effect, CSS animation is often sufficient.
        // For now, assume CSS handles the 'floating' class.
    }

    // Input validation for phone number (Pulsa & Paket Data)
    const phoneInput = document.querySelector('.phone-input');
    if (phoneInput) {
        phoneInput.addEventListener('input', (event) => {
            let input = event.target.value.replace(/\D/g, ''); // Remove non-digits
            // Limit to 14 characters as per maxlength
            if (input.length > 14) {
                input = input.substring(0, 14);
            }
            event.target.value = input; // Update input field
        });
    }

    const checkButton = document.querySelector('.check-button');
    if (checkButton) {
        checkButton.addEventListener('click', () => {
            const phoneNumber = phoneInput.value;
            if (phoneNumber.length >= 8 && phoneNumber.length <= 14) { // Basic validation
                alert(`Mengecek nomor: ${phoneNumber}`);
                // In a real application, you'd send this number to a backend
                // to check operator and available packages.
            } else {
                alert('Silakan masukkan nomor handphone yang valid (8-14 digit).');
            }
        });
    }

    // You can add more interactive elements here, for example:
    // 1. Handling clicks on game items (redirecting to game-specific pages)
    // 2. Implementing a "Load More" button for game lists or vouchers
    // 3. Dynamic content loading
});
