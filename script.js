window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust the value as needed
        navbar.classList.add('translucent');
    } else {
        navbar.classList.remove('translucent');
    }
});
