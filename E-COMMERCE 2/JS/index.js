


//   ABOUT
const aboutSections = document.querySelectorAll('.about-content');
const options = {
    threshold: 0.1
};

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, options);

aboutSections.forEach(section => {
    observer.observe(section);
});





// JavaScript to handle the click event on the center container

const centerContainer = document.querySelector(".center-container");
const customerInfoContainer = document.querySelector(".customer-info-container");

centerContainer.addEventListener("click", () => {
    if (customerInfoContainer.style.display === "none") {
        customerInfoContainer.style.display = "block";
    } else {
        customerInfoContainer.style.display = "none";
    }
});













AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
});

document.addEventListener('aos:out', ({ detail }) => {
    console.log('animated out', detail);
});





document.addEventListener("DOMContentLoaded", function() {
    const headerHeight = document.querySelector('.fixed-header').offsetHeight;
    const smoothScrollLinks = document.querySelectorAll('.fixed-header a[href^="#"]');
    
    for (const link of smoothScrollLinks) {
      link.addEventListener('click', smoothScroll);
    }
    
    function smoothScroll(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
      
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  });