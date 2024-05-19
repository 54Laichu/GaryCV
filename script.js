document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

let observer = new IntersectionObserver((entries, observer) => { 
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
      }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card').forEach(card => {
  observer.observe(card);
});
