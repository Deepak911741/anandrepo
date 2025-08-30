document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Typewriter Effect for Hero Section
    const typewriterTextElement = document.getElementById('typewriter-text');
    const phrases = ["Web Development", "App Development", "Cloud Solutions", "AI Integration"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // milliseconds per character
    const deletingSpeed = 50;
    const delayBetweenPhrases = 1500; // milliseconds

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            typewriterTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let currentTypingSpeed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentPhrase.length) {
            currentTypingSpeed = delayBetweenPhrases;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            currentTypingSpeed = 500; // Short delay before next phrase starts typing
        }

        setTimeout(typeWriter, currentTypingSpeed);
    }

    if (typewriterTextElement) {
        typeWriter();
    }

    // Optional: Smooth Scroll for internal links (already handled by 'scroll-smooth' in Tailwind)
    // You can add more interactive elements here, like modals, carousels, etc.
});

// Basic CSS for animations (add to public/assets/css/style.css or directly in a <style> tag for quick testing)
// You would typically define these with @keyframes in a dedicated CSS file
/*
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
}
.animate-fadeInUp.delay-100 { animation-delay: 0.1s; }
.animate-fadeInUp.delay-200 { animation-delay: 0.2s; }
.animate-fadeInUp.delay-300 { animation-delay: 0.3s; }
.animate-fadeInUp.delay-400 { animation-delay: 0.4s; }

.animate-fadeInLeft {
    animation: fadeInLeft 0.8s ease-out forwards;
    opacity: 0;
}
.animate-fadeInRight {
    animation: fadeInRight 0.8s ease-out forwards;
    opacity: 0;
}
*/