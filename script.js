document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('nav-open');
    });

    // --- Intersection Observer for scroll animations ---
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const elementsToAnimate = document.querySelectorAll('.animate-in');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // --- Breathing Exercise Logic ---
    const breathingButton = document.getElementById('breathing-button');
    const breathingCircle = document.getElementById('breathing-circle');
    const breathingText = document.getElementById('breathing-text');
    let isBreathing = false;
    let breathInterval;

    breathingButton.addEventListener('click', () => {
        if (!isBreathing) {
            isBreathing = true;
            breathingButton.textContent = 'Stop';
            startBreathingCycle();
        } else {
            isBreathing = false;
            breathingButton.textContent = 'Start';
            clearInterval(breathInterval);
            resetBreathingAnimation();
        }
    });

    function startBreathingCycle() {
        breatheIn();
        breathInterval = setInterval(() => {
            // This creates a full cycle of ~10 seconds
            breatheIn();
        }, 10000); 
    }

    function breatheIn() {
        breathingText.textContent = 'Breathe In...';
        breathingCircle.style.transform = 'scale(1.5)';
        setTimeout(breatheOut, 4000); // 4 seconds in
    }

    function breatheOut() {
        breathingText.textContent = 'Breathe Out...';
        breathingCircle.style.transform = 'scale(1)';
        setTimeout(() => {
            breathingText.textContent = 'Hold';
        }, 5000); // 1 second hold after exhale
    }

    function resetBreathingAnimation() {
        breathingCircle.style.transform = 'scale(1)';
        breathingText.textContent = 'Click to Begin';
    }

});
if (
  !localStorage.getItem("theme") &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.body.classList.add("dark-mode");
  toggle.checked = true;
}
