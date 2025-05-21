// ==========================
// gsap animation
// ==============================
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();
tl.to(".nav-bar", {
  duration: 0.5,
  top: 0,
})
tl.pause();



gsap.from(".hero-data", {
  opacity: 0,
  y: 200,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".hero-data",
    start: "top 70%",
    end: "bottom 40%",
    markers: false,
  },

});

gsap.from("#about-page", {
  opacity: 0,
  y: 200,
  duration: 1.5,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#about-page",
    start: "top 115%",
    end: "bottom 20%",
    markers: false,
  },

});

gsap.from("#about-page .bio-data-data", {
  duration: 1,
  delay: 0.5,
  y: 50,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#about-page .bio-data-data",
    start: "top 110%",
    end: "bottom -90%",
    markers: false,
  },

});

gsap.from("#projects-page", {
  opacity: 0,
  y: 200,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: "#projects-page",
    start: "top 90%",
    end: "bottom 20%",
    markers: false,
  },

});

gsap.from(".section-counter", {
  opacity: 0,
  y: 200,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".section-counter",
    start: "top 90%",
    end: "bottom 20%",
    markers: false,
  },

});

gsap.from(".services-section", {
  opacity: 0,
  y: 200,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".services-section",
    start: "top 70%",
    end: "bottom 20%",
    markers: false,
  },

});

gsap.from(".testimonial-section", {
  opacity: 0,
  y: 200,
  duration: 1,
  delay: 1,

  scrollTrigger: {
    trigger: ".testimonial-section",
    start: "top 100%",
    end: "bottom 100%",
    markers: false,
  },

});

gsap.from(".freelancing-section", {
  opacity: 0,
  y: 200,
  duration: 1,
  delay: 1,

  scrollTrigger: {
    trigger: ".freelancing-section",
    start: "top 90%",
    end: "bottom 20%",
    markers: false,
  },

});

gsap.from(".contact-section", {
  opacity: 0,
  y: 200,
  duration: 1,
  delay: 1,

  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 80%",
    end: "bottom 20%",
    markers: false,
  },

});

// ===============================================
//  CREATING RESPONSIVE NAV_BAR
// ===============================================

const menu_bar_btn = document.querySelector(".menu-bar-btn");
const close_bar_btn = document.querySelector(".close-bar-btn");
menu_bar_btn.addEventListener("click", () => {
  tl.play();
  const nav_links = document.querySelectorAll(".navbar-link");
  nav_links.forEach(link => {
    link.addEventListener("click", () => tl.reverse())
  })
})
close_bar_btn.addEventListener("click", () => tl.reverse())

// ===============================================
//  CREATING STICKY RESPONSIVE NAV_BAR
// ===============================================
const hero_section = document.querySelector(".section-hero")
const nav_observer = new IntersectionObserver((entries) => {
  const ent = entries[0];
  ent.isIntersecting ? document.body.classList.remove("sticky") : document.body.classList.add("sticky");
}, {
  root: null,
  threshold: 0,
});
nav_observer.observe(hero_section)

// ===============================================
//  CREATING A PROJECT TABBED COMPONENT
// ===============================================
const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img = document.querySelectorAll(".img-overlay");
p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target
  if (p_btn_clicked.classList.contains("p-btn")) {
    p_btn.forEach((ele) => ele.classList.remove("p-btn-active"))
    p_btn_clicked.classList.add("p-btn-active");
    // to get btn no.
    const btn_num = p_btn_clicked.dataset.btnNum;
    const p_active_img = document.querySelectorAll(`.p-btn-${btn_num}`)
    p_img.forEach(img => img.classList.add("p-img-hidden"))
    p_active_img.forEach(active_img => active_img.classList.remove("p-img-hidden"))
  }
})

// ===========================================
// HANDLING THEME BTN
// ===================================================
const THEME_ICON = document.querySelector(".theme-btn i")
const THEME_BTN = document.querySelector(".theme-btn")
const body = document.querySelector('.body');
// ===========================
// loaal storage
// ===========================
const themeKey = "theme"; // my key
const storedTheme = (key, theme) => {
  try {
    localStorage.setItem(key, theme);
  } catch (error) {
    console.error("Error storing theme in localStorage:", error);
  }
}

const getTheme = (key) => {
  try {
    const theme = localStorage.getItem(key);
    if (theme) {
      return theme;
    }
  } catch (error) {
    console.error("Error getting theme from localStorage:", error);
    return null;
  }
}

let theme = getTheme(themeKey);
console.log(theme);
if (theme == "light") {
  THEME_ICON.classList.remove("fa-moon");
  THEME_ICON.classList.add("fa-sun")
  body.classList.remove("dark-mode")
} else {
  theme = "dark";
  THEME_ICON.classList.add("fa-moon");
  THEME_ICON.classList.remove("fa-sun");
  body.classList.add("dark-mode")
}
console.log(theme);
const handleTheme = () => {
  if (theme == "light") {
    theme = "dark"
    THEME_ICON.classList.add("fa-moon");
    THEME_ICON.classList.remove("fa-sun");
    body.classList.add("dark-mode")
  } else {
    theme = "light";
    THEME_ICON.classList.remove("fa-moon");
    THEME_ICON.classList.add("fa-sun")
    body.classList.remove("dark-mode")
  }
  storedTheme(themeKey, theme);
  console.log(theme);
}


THEME_BTN.addEventListener("click", handleTheme);
// ========================================================
//     TESTIMONIAL SECTION
// ========================================================

// swiper
new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// handling media queries for testimonial section

const handleJsMedia = (widthSize) => {
  if (widthSize.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  } else {
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
    })
  }
}
const widthSize = window.matchMedia("(max-width:780px)");

handleJsMedia(widthSize)
widthSize.addEventListener("change", handleJsMedia)


// ========================================================
//    COUNTER SECTION
// ========================================================
// animate numbers

const counter_section = document.querySelector(".section-counter");
const counter_observer = new IntersectionObserver((entries, observer) => {
  const entry = entries[0];
  if (!entry.isIntersecting) { return }
  if (entry.isIntersecting) {
    const counterNums = document.querySelectorAll(".counter-numbers");
    const speed = 200;

    counterNums.forEach(counter => {
      const updateNums = () => {
        const targetNum = parseInt(counter.dataset.number);
        const initNum = parseInt(counter.innerText);
        const incrementBy = Math.trunc(targetNum / speed);
        if (initNum < targetNum) {
          counter.innerText = `${initNum + incrementBy}+`;
          setTimeout(updateNums, 10)
        }
      }
      updateNums();
    });

    observer.unobserve(counter_section);
  }
}, {
  root: null,
  threshold: 0,
})

counter_observer.observe(counter_section);