const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item, index) => {
  const header = item.querySelector(".accordion-header");
  const body = item.querySelector(".accordion-body");


  header.addEventListener("click", () => {
    accordionItems.forEach(acc => {
      if (acc !== item) {
        acc.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});



const counters = document.querySelectorAll(".stat-number");

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const counter = entry.target;
    const target = +counter.dataset.target;
    let current = 0;

    const step = () => {
      current++;
      counter.textContent = current;
      if (current < target) requestAnimationFrame(step);
    };

    step();
    obs.unobserve(counter); // run only once
  });
}, { threshold: 0.4 });

counters.forEach(counter => observer.observe(counter));

//Hamburger Menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("active");
});
