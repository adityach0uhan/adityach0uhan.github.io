// Ensure the DOM is fully loaded before running the animation
document.addEventListener('DOMContentLoaded', () => {
    // Select the name element
    const nameElement = document.getElementById('name');

    // Ensure nameElement is defined before using it
    if (nameElement) {
        // Wrap each character in a span
        const text = nameElement.textContent;
        nameElement.innerHTML = text
            .split('')
            .map((char) => `<span>${char}</span>`)
            .join('');

        console.log('Spans created:', nameElement.innerHTML);

        // Create a GSAP timeline for the name animation
        const tl = gsap.timeline();

        // Initial animation: fade in and move up
        tl.to('#name span', {
            duration: 1,
            opacity: 1,
            y: -50,
            ease: 'power2.out',
            stagger: 0.1,
            onStart: () => console.log('Name animation started'),
            onComplete: () => console.log('Name animation complete')
        });

        // Additional animation: bounce effect
        tl.to('#name span', {
            duration: 1,
            y: 0,
            ease: 'bounce.out',
            stagger: 0.1,
            onComplete: () => console.log('Bounce animation complete')
        });
    } else {
        console.error('Element with id "name" not found.');
    }
});
