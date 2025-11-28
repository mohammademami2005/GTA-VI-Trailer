// import modules and styles
import "./style.css";
import { initHeroSection } from "./js/heroSection.js";
import { initLogo } from "./js/logoSection.js";
import { initSections } from "./js/sections.js";
import { initVideo } from "./js/videoController.js";
import { ImageModal } from "./js/imageModule.js";

ImageModal()


const heroSection = initHeroSection();
const logoSection = initLogo();

const video1 = initVideo(document.querySelector("#JasonVideo"), "videoCanvas");
const video2 = initVideo(document.querySelector("#JasonVideo2"), "videoCanvas2")
const video3 = initVideo(document.querySelector("#JasonVideo3"), "videoCanvas3")
const video4 = initVideo(document.querySelector('#realDimezVideo'),'realDimezCanvas')
// const sectionsModule = initSections(video1);
const sections = initSections(video1 , video2 , video3,video4);


// ------------------------------- scroll ------------------------------------
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    heroSection.update(scrollY);
    logoSection.update(scrollY);

    sections.updateSections(scrollY);

})


let scrollTarget = 0;
let scrollCurrent = 0;
let isScrolling = false;
const ease = 0.03; // ← این رو هرچقدر کمتر کنی نرم‌تر میشه

function smoothScroll() {
  scrollCurrent += (scrollTarget - scrollCurrent) * ease;

  window.scrollTo(0, scrollCurrent);

  if (Math.abs(scrollCurrent - scrollTarget) > 0.1) {
    requestAnimationFrame(smoothScroll);
  } else {
    isScrolling = false;
  }
}

window.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();

    scrollTarget += e.deltaY;
    scrollTarget = Math.max(0, scrollTarget);
    scrollTarget = Math.min(
      document.body.scrollHeight - window.innerHeight,
      scrollTarget
    );

    if (!isScrolling) {
      isScrolling = true;
      requestAnimationFrame(smoothScroll);
    }
  },
  { passive: false }
);
