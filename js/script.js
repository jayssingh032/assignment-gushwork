const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");
const offcanvas = document.getElementById("offcanvas");
const overlay = document.getElementById("overlay");


openBtn.addEventListener("click", () => {
  offcanvas.classList.add("active");
  overlay.classList.add("active");
});


closeBtn.addEventListener("click", () => {
  offcanvas.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  offcanvas.classList.remove("active");
  overlay.classList.remove("active");
});


const mobileToggle = document.querySelector(".mobile-drop-toggle");
const mobileDropdown = document.querySelector(".mobile-dropdown");

mobileToggle.addEventListener("click", () => {
  mobileDropdown.classList.toggle("active");
});


/*header sticky */

const header = document.getElementById('header');
const stickyOffset = header.offsetTop;

window.addEventListener('scroll', () => {
  if (window.pageYOffset > stickyOffset) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});


/* silider */
const mainImage = document.getElementById("mainImage");
const zoomResult = document.getElementById("zoomResult");


const lens = document.createElement("div");
lens.className = "img-zoom-lens";
document.querySelector(".img-zoom-container").appendChild(lens);

let cx, cy;


function initZoom() {
  if (!mainImage.complete) return;

  cx = zoomResult.offsetWidth / lens.offsetWidth;
  cy = zoomResult.offsetHeight / lens.offsetHeight;

  zoomResult.style.backgroundImage = `url(${mainImage.src})`;
  zoomResult.style.backgroundSize =
    (mainImage.offsetWidth * cx) + "px " +
    (mainImage.offsetHeight * cy) + "px";
}


function moveLens(e) {
  const rect = mainImage.getBoundingClientRect();

  let x = e.clientX - rect.left - lens.offsetWidth / 2;
  let y = e.clientY - rect.top - lens.offsetHeight / 2;

  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x > mainImage.offsetWidth - lens.offsetWidth)
    x = mainImage.offsetWidth - lens.offsetWidth;
  if (y > mainImage.offsetHeight - lens.offsetHeight)
    y = mainImage.offsetHeight - lens.offsetHeight;

  lens.style.left = x + "px";
  lens.style.top = y + "px";

  zoomResult.style.backgroundPosition =
    `-${x * cx}px -${y * cy}px`;
}


mainImage.addEventListener("mousemove", moveLens);
lens.addEventListener("mousemove", moveLens);

mainImage.addEventListener("mouseenter", () => {
  lens.style.display = "block";
  zoomResult.style.display = "block";
  initZoom();
});

mainImage.addEventListener("mouseleave", () => {
  lens.style.display = "none";
  zoomResult.style.display = "none";
});


mainImage.onload = initZoom;


const thumbs = document.querySelectorAll(".thumbnails img");
let currentIndex = 0;

thumbs.forEach((img, i) => {
  img.addEventListener("click", function () {
    thumbs.forEach(t => t.classList.remove("active"));
    this.classList.add("active");

    currentIndex = i;
    mainImage.src = this.src;
  });
});


function nextSlide() {
  currentIndex = (currentIndex + 1) % thumbs.length;
  thumbs[currentIndex].click();
}


function prevSlide() {
  currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
  thumbs[currentIndex].click();
}


document.getElementById("nextBtn").onclick = () => {
  nextSlide();
  resetAutoSlide();
};

document.getElementById("prevBtn").onclick = () => {
  prevSlide();
  resetAutoSlide();
};


let autoSlide = setInterval(nextSlide, 3000);


const container = document.querySelector(".img-zoom-container");

container.addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

container.addEventListener("mouseleave", () => {
  //autoSlide = setInterval(nextSlide, 3000);
});


function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 3000);
}


/* Mobile banner silider */

document.addEventListener("DOMContentLoaded", function () {

  const mainImage = document.getElementById("mainImage");
  const zoomBox = document.getElementById("zoomResult1");
  const zoomImg = document.getElementById("zoomImgMobile");
  const thumbs = document.querySelectorAll(".thumbnails img");

  let currentIndex = 0;


  function openZoomMobile() {
    if (window.matchMedia("(max-width: 767px)").matches) {
      zoomBox.classList.add("active");
      zoomImg.src = mainImage.src;
    }
  }


  mainImage.addEventListener("click", function (e) {
    e.stopPropagation();
    openZoomMobile();
  });


  thumbs.forEach((img, i) => {
    img.addEventListener("click", function (e) {
      e.stopPropagation();

      thumbs.forEach(t => t.classList.remove("active"));
      this.classList.add("active");

      currentIndex = i;
      mainImage.src = this.src;

      openZoomMobile();
    });
  });

  function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = thumbs.length - 1;
    if (currentIndex >= thumbs.length) currentIndex = 0;

    thumbs[currentIndex].click();
  }

  document.getElementById("prevBtn").onclick = (e) => {
    e.stopPropagation();
    changeSlide(-1);
  };

  document.getElementById("nextBtn").onclick = (e) => {
    e.stopPropagation();
    changeSlide(1);
  };


  document.addEventListener("click", function (e) {
    if (!zoomBox.contains(e.target)) {
      zoomBox.classList.remove("active");
    }
  });


  zoomBox.addEventListener("click", function (e) {
    e.stopPropagation();
  });

});


/*popup */

const quoteBtn1 = document.getElementById("quoteBtn1");
const quotePopup1 = document.getElementById("quotePopup1");
const closePopup1 = document.getElementById("closePopup1");

quoteBtn1.addEventListener("click", function (e) {
  e.preventDefault(); // link ka default behavior rokta hai
  quotePopup1.style.display = "block";
});

closePopup1.addEventListener("click", function () {
  quotePopup1.style.display = "none";
});

// Popup ke bahar click karne par close karne ke liye
window.addEventListener("click", function (e) {
  if (e.target == quotePopup1) {
    quotePopup1.style.display = "none";
  }
});


const quoteBtn2 = document.getElementById("quoteBtn2");
const quotePopup2 = document.getElementById("quotePopup2");
const closePopup2 = document.getElementById("closePopup2");

quoteBtn2.addEventListener("click", function (e) {
  e.preventDefault(); // link ka default behavior rokta hai
  quotePopup2.style.display = "block";
});

closePopup2.addEventListener("click", function () {
  quotePopup2.style.display = "none";
});

// Popup ke bahar click karne par close karne ke liye
window.addEventListener("click", function (e) {
  if (e.target == quotePopup2) {
    quotePopup2.style.display = "none";
  }
});


/* Testimonials slider */
const track = document.querySelector('.testimonial-track');
const testimonials = document.querySelectorAll('.testimonial');
const visibleItems = 6;
const totalItems = testimonials.length;

let index = 0;

function scrollNext() {
  index++;
  if (index > totalItems - visibleItems) index = 0;
  const itemWidth = testimonials[0].offsetWidth + 10;
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

setInterval(scrollNext, 2000);


/* faq */

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    faqItems.forEach(i => { if (i !== item) i.classList.remove('active'); });
    item.classList.toggle('active');
  });
});



/*slider*/
var autoSlide2;

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider2");
  const card = slider.querySelector(".card2");

  const scrollAmount = card.offsetWidth + 20;

  function startAutoPlay() {
    stopAutoPlay();
    autoSlide = setInterval(() => {

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth"
        });
      } else {
        slider.scrollBy({
          left: scrollAmount,
          behavior: "smooth"
        });
      }

    }, 3000);
  }

  function stopAutoPlay() {
    clearInterval(autoSlide);
  }

  window.scrollSlider = function (direction) {

    stopAutoPlay();

    if (direction === "left") {
      slider.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
      });
    } else {
      slider.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }

    startAutoPlay();
  };

  startAutoPlay();

  slider.addEventListener("mouseenter", stopAutoPlay);
  slider.addEventListener("mouseleave", startAutoPlay);
});



let currentTab = 0;

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

function showTab(index) {
  currentTab = index;

  tabs.forEach((tab, i) => {
    tab.classList.toggle("active", i === index);
  });

  contents.forEach((content, i) => {
    content.classList.toggle("active", i === index);
  });

  initSlider(index);
}

function changeTab(direction) {
  currentTab += direction;

  if (currentTab < 0) currentTab = tabs.length - 1;
  if (currentTab >= tabs.length) currentTab = 0;

  showTab(currentTab);
}


document.querySelectorAll(".image-slider").forEach((slider, index) => {
  const leftBtn = slider.querySelector(".left");
  const rightBtn = slider.querySelector(".right");

  leftBtn.addEventListener("click", () => changeTab(-1));
  rightBtn.addEventListener("click", () => changeTab(1));
});



/*Proven Results*/
var autoSlide4;

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider3");
  const card = slider.querySelector(".card3");

  const gap = 20;
  const scrollAmount = card.offsetWidth + gap;

  function startAuto() {
    stopAuto();

    autoSlide4 = setInterval(() => {

      slider.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });

      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 5) {
        setTimeout(() => {
          slider.scrollTo({ left: 0 });
        }, 400);
      }

    }, 2500);
  }

  function stopAuto() {
    clearInterval(autoSlide4);
  }

  startAuto();

  slider.addEventListener("mouseenter", stopAuto);
  slider.addEventListener("mouseleave", startAuto);
});