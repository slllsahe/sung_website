
// Function to update the menu button content
function updateMenuButtonContent() {
    const navLabel = document.getElementById('nav-label');
    if (window.innerWidth <= 1196) {
        navLabel.innerHTML = 'SL';
    } else {
        navLabel.innerHTML = '<span></span><span></span><span></span>';
    }
}

// Update content on page load
updateMenuButtonContent();

// Update content on window resize
window.addEventListener('resize', updateMenuButtonContent);
