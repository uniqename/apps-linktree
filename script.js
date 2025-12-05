// Auto-update last updated date
document.getElementById('last-updated').textContent = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// Load logo images from Downloads folder if available
const homelinkLogo = document.getElementById('homelink-logo');
const beaconLogo = document.getElementById('beacon-logo');
const profileImg = document.getElementById('profile-img');

// Try to load logos from Downloads folder
// These paths should be updated to match your actual logo locations
const homelinkLogoPath = '/Users/enamegyir/Downloads/homelink_icon_1024.png';
const beaconLogoPath = '/Users/enamegyir/Downloads/beacon_icon_1024.png';

// Function to create placeholder SVG if image fails to load
function createPlaceholder(text, bgColor) {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='${encodeURIComponent(bgColor)}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='60' fill='white' font-weight='bold'%3E${text}%3C/text%3E%3C/svg%3E`;
}

// Set placeholder logos
homelinkLogo.src = createPlaceholder('HL', '#4A5568');
beaconLogo.src = createPlaceholder('BN', '#E53E3E');
profileImg.src = createPlaceholder('Apps', '#667eea');

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
