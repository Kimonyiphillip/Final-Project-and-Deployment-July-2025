// Grab sections & nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

// Highlight nav on scroll
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Smooth scroll for nav links
document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Order button popup for the "Order Now" button only
const orderBtn = document.querySelector(".home-content .btn");
orderBtn.addEventListener("click", (e) => {
  e.preventDefault();
  alert(" Thank you for your order! We'll prepare it right away.");
});

// Contact form validation
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Simple email regex for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation checks
  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  if (email === "") {
    alert("Please enter your email.");
    return;
  } else if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (message === "") {
    alert("Please enter your message.");
    return;
  }

  // If all validations pass
  alert("Thank you for contacting us, " + name + "! We will get back to you soon.");

  // Optionally, reset the form
  contactForm.reset();
});