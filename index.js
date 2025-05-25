document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

setTimeout(() => {
    const typewriter = document.querySelector('.typewriter');
    if (typewriter) {
        typewriter.style.animation = 'none';
        typewriter.style.borderRight = 'none';
    }
}, 3500);

    document.addEventListener("DOMContentLoaded", function() {
        const text = "ML Researcher | Freelancer";
        let index = 0;
        const speed = 100; // Typing speed
        const typewriter = document.getElementById("typewriter");

        function typeWriterEffect() {
            if (index < text.length) {
                typewriter.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriterEffect, speed);
            } else {
                typewriter.classList.add("blink"); // Start blinking after typing
            }
        }

        typeWriterEffect();
    });

    const scheduleCallBtn = document.getElementById('scheduleCallBtn');

    if (scheduleCallBtn) {
        scheduleCallBtn.addEventListener('click', function() {
            // Check if Calendly is loaded before trying to use it
            if (typeof Calendly !== 'undefined' && typeof Calendly.initPopupWidget === 'function') {
                Calendly.initPopupWidget({
                    url: 'https://calendly.com/srinitishsri/30min' // Replace with your actual Calendly event URL
                });
            } else {
                console.error("Calendly widget script not loaded or 'Calendly.initPopupWidget' is not a function.");
            }
        });
    };