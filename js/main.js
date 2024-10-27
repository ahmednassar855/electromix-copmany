const navTriggerBtn = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_menu');

// event listener

navTriggerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-is-open');
})

// swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    loopedSlides: 1,
    autoplay: {
        delay: 3000, // time in milliseconds (e.g., 3000ms = 3 seconds)
        disableOnInteraction: false, // keeps autoplay running after interaction
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        960: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        },
    }
});


const swiper2 = new Swiper('.swiper__partner', {
    loop: true,
    loopedSlides: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // breakpoints
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        960: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },
    }
});

// scroll revail animation

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 600,
    reset : true,
})

// hero
sr.reveal('.hero__text', { origin: 'top' });

// steps
sr.reveal('.steps__step', { distance: '100px', interval: 100 });

// about
sr.reveal('.about__text', {  origin: 'left'});
sr.reveal('.about__img', {  origin: 'right' , delay : 800});

// testimonial
sr.reveal('.testimonial__bg', {  delay : 800});
sr.reveal('.testimonial__title');
sr.reveal('.testimonial__slider' , { delay : 1000 });

// brands
sr.reveal('.brands__img', {  delay : 600 , distance : '100px' , interval : 100});


// works
sr.reveal('.work__title');
sr.reveal('.work__subtitle' , { delay : 800 });
sr.reveal('.work__grid' , { delay : 1000 });

// stats
sr.reveal('.stats');
sr.reveal('.stats__item' , { distance :'100px' ,interval : 100, });

// news__title
sr.reveal('.news__title');
sr.reveal('.news__subtitle' , { delay : 900 });
sr.reveal('.news__item' , { distance :'100px' ,interval : 100, delay : 1000 });

//  contact
sr.reveal('.contact__container');
sr.reveal('.contact__text' , { delay : 900 });

// footer
sr.reveal('.footer__item' , { distance :'100px' ,interval : 100 });
sr.reveal('.footer__copyright');
 


// home carousal
const images = document.querySelectorAll('.carousel-image');
  let currentImageIndex = 0;
  const intervalTime = 5000; // 5 seconds

  // Function to update visible image
  function updateImageVisibility() {
    images.forEach((img, index) => {
      img.classList.toggle('opacity-100', index === currentImageIndex);
      img.classList.toggle('opacity-0', index !== currentImageIndex);
    });
  }

  // Show the next image
  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;    
    updateImageVisibility();
  }

  // Show the previous image
  function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImageVisibility();
  }

  // Set initial visible image
  updateImageVisibility();

  // Auto-play carousel
  let carouselInterval = setInterval(showNextImage, intervalTime);

  // Event listeners for the buttons
  document.getElementById('nextBtn').addEventListener('click', () => {
    clearInterval(carouselInterval);
    showNextImage();
    carouselInterval = setInterval(showNextImage, intervalTime); // Restart interval
  });

  document.getElementById('prevBtn').addEventListener('click', () => {
    clearInterval(carouselInterval);
    showPreviousImage();
    carouselInterval = setInterval(showNextImage, intervalTime); // Restart interval
  });



//  for about section


document.addEventListener("DOMContentLoaded", () => {
    const carouselItems = document.querySelectorAll('[data-carousel-item]');
    let currentIndex = 0;
    const intervalTime = 5000; // Time for each slide in milliseconds

    function showNextCarouselItem() {
        // Hide current item
        carouselItems[currentIndex].classList.remove('active');

        // Move to the next item, looping back to the start if necessary
        currentIndex = (currentIndex + 1) % carouselItems.length;

        // Show next item
        carouselItems[currentIndex].classList.add('active');
    }

    // Initial display setup
    carouselItems[currentIndex].classList.add('active');

    // Start the automatic cycling
    setInterval(showNextCarouselItem, intervalTime);
});

  

//   window hieght

// Select all anchor links in the nav menu
document.querySelectorAll('#nav_menu a').forEach(link => {
    link.addEventListener('click', (event) => {
      // Prevent the default behavior
      event.preventDefault();
  
      // Get the target section by href attribute of the link
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      // Calculate the scroll position with an offset of -150px
      if (targetSection) {
        const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - 150;
        
        // Scroll to the calculated position smoothly
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  