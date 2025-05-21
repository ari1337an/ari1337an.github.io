document.addEventListener('DOMContentLoaded', () => {
  // Ensure Motion One is loaded (it should be, as the script tag is before this one)
  if (typeof motion === 'undefined') {
    console.error('Motion One library not loaded.');
    return;
  }

  // Hero elements
  const heroHeading = document.querySelector('#hero h1');
  const heroParagraph = document.querySelector('#hero p:nth-of-type(1)'); // Title
  const heroContact = document.querySelector('#hero p:nth-of-type(2)'); // Contact info

  if (heroHeading) {
    motion.animate(heroHeading, 
      { opacity: [0, 1], y: [20, 0] }, 
      { duration: 0.8, delay: 0.2, easing: "ease-out" }
    );
  }
  if (heroParagraph) {
    motion.animate(heroParagraph, 
      { opacity: [0, 1], y: [20, 0] }, 
      { duration: 0.8, delay: 0.4, easing: "ease-out" }
    );
  }
  if (heroContact) {
    motion.animate(heroContact, 
      { opacity: [0, 1], y: [20, 0] }, 
      { duration: 0.8, delay: 0.6, easing: "ease-out" }
    );
  }

  // Section entrance animations on scroll
  const sections = document.querySelectorAll('section:not(#hero)');
  sections.forEach(section => {
    // Set initial state for sections to be animated
    motion.set(section, { opacity: 0, y: 50 });

    motion.scroll(
      motion.animate(section, 
        { opacity: [0, 1], y: [50, 0] }, 
        { duration: 0.7, easing: "ease-out" }
      ),
      { 
        target: section, 
        offset: ["start end", "0.25 start"] // Animate when 25% of the section is visible from the top of the viewport
                                           // "start end" -> top of section meets bottom of viewport
                                           // "0.25 start" -> animation finishes when section is 25% from the top of viewport
      }
    );
  });
});
