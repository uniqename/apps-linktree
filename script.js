// Auto-update last updated date
document.getElementById('last-updated').textContent = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// Logos are loaded directly from HTML img tags - no JavaScript override needed

// Add smooth scroll for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add click analytics (placeholder - replace with your analytics)
document.querySelectorAll('.link-button').forEach(button => {
    button.addEventListener('click', function() {
        const linkText = this.querySelector('.link-text').textContent;
        console.log('Link clicked:', linkText);
        // Add your analytics tracking here
        // Example: gtag('event', 'click', { 'event_category': 'link', 'event_label': linkText });
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
