// Mouse follow for hero content
const heroContent = document.querySelector(".hero-content");

document.addEventListener("mousemove", (e) => {
  const moveX = (e.clientX / window.innerWidth - 0.5) * 20; // 20px max
  const moveY = (e.clientY / window.innerHeight - 0.5) * 20;

  heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
});



// jump from section 1
document.getElementById("startExploring").addEventListener("click", function(e) {
  e.preventDefault(); // prevent default anchor jump

  // Scroll to first section
  const section1 = document.getElementById("section1");
  section1.scrollIntoView({ behavior: "smooth" });
});


// change color of the navbar
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');

function updateNavbar() {
  if (window.scrollY < hero.offsetHeight - 50) {
    // Over hero: dark navbar
    navbar.classList.add('dark-navbar');
  } else {
    // After hero: light glass navbar
    navbar.classList.remove('dark-navbar');
  }
}

// Run on scroll
window.addEventListener('scroll', updateNavbar);

// update once webpage is loaded
window.addEventListener('load', updateNavbar);





