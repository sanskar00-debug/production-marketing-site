const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#nav-menu');

menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
});

// Append directly inside your existing document DOMContentLoaded block or loose at the bottom
const contactForm = document.getElementById('accessible-contact-form');
const statusContainer = document.getElementById('status-container');

if (contactForm && statusContainer) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents standard page refreshing
        
        const nameVal = document.getElementById('user-name').value.trim();
        const emailVal = document.getElementById('user-email').value.trim();
        const msgVal = document.getElementById('user-message').value.trim();

        if (!nameVal || !emailVal || !msgVal) {
            statusContainer.className = "form-status";
            statusContainer.style.backgroundColor = "#fee2e2";
            statusContainer.style.color = "#991b1b";
            statusContainer.style.display = "block";
            statusContainer.textContent = "Please fill out all required operational input fields.";
            return;
        }

        // Simulating immediate validation success execution
        statusContainer.className = "form-status success";
        statusContainer.textContent = "Success! Your tracking configuration inquiry has been logged securely.";
        contactForm.reset();
    });
}