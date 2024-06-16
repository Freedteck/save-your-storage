// Testimonials Data
const testimonialsData = [
  {
    name: "John Fang",
    company: "wordfaang.com",
    image: "../img/person1.jpeg",
    text: "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
  },
  {
    name: "Jeny Doe",
    company: "UX Engineer",
    image: "../img/person2.jpeg",
    text: "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
  },
  {
    name: "Alice Smith",
    company: "alicesmith.com",
    image: "../img/person3.jpeg",
    text: "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
  },
];

// Initializing variables
const testimonialContainer = document.querySelector(".testimonial-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const circles = document.querySelectorAll(".circles button");
const navLinks = document.querySelectorAll(".link");
let currentPosition = 0;

// Function for navigation Links
navLinks.forEach((nav) => {
  nav.addEventListener("click", () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    nav.classList.add("active");
  });
});
// FUnction to handle carousel Navigation
const handleCarouselNavigation = () => {
  nextBtn.disabled = currentPosition === testimonialsData.length - 1;
  nextBtn.innerHTML = nextBtn.disabled
    ? `<img src="../img/arrow-right-disabled.svg" alt="next" width="32" />`
    : ' <img src="img/arrow-right-white.svg" alt="next" width="32" />';
  prevBtn.disabled = currentPosition === 0;
  prevBtn.innerHTML = prevBtn.disabled
    ? `<img src="../img/arrow-left-disabled.svg" alt="next" width="32" />`
    : ' <img src="img/arrow-left.svg" alt="next" width="32" />';
  circles.forEach((circle) => circle.classList.remove("active"));
  circles[currentPosition].classList.add("active");
};

// Adding testimonials to DOM
testimonialsData.forEach((testimonial) => {
  const testimonialCard = document.createElement("div");
  const testimonialImg = document.createElement("div");
  const testimonialInfo = document.createElement("div");

  testimonialCard.classList.add("testimonial");
  testimonialImg.classList.add("img");
  testimonialInfo.classList.add("info");

  const image = new Image();
  image.src = testimonial.image;

  const title = document.createElement("div");
  const name = document.createElement("h4");
  const work = document.createElement("p");

  title.classList.add("title");

  const description = document.createElement("p");

  name.textContent = testimonial.name;
  work.textContent = testimonial.company;
  description.textContent = testimonial.text;

  title.appendChild(name);
  title.appendChild(work);
  testimonialImg.appendChild(image);
  testimonialInfo.appendChild(title);
  testimonialInfo.appendChild(description);
  testimonialCard.appendChild(testimonialImg);
  testimonialCard.appendChild(testimonialInfo);

  testimonialContainer.appendChild(testimonialCard);
});

// Logic to change testimonial to next
nextBtn.addEventListener("click", () => {
  testimonialContainer.scrollBy({ left: 700, behavior: "smooth" });
  currentPosition++;
  handleCarouselNavigation();
});

// Logic to change testimonial to previous
prevBtn.addEventListener("click", () => {
  testimonialContainer.scrollBy({ left: -700, behavior: "smooth" });
  currentPosition--;
  handleCarouselNavigation();
});
