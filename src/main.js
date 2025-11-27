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
// const sectionsModule = initSections(video1);
const sections = initSections(video1 , video2 , video3);


// ------------------------------- scroll ------------------------------------
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    console.log(scrollY);

    heroSection.update(scrollY);
    logoSection.update(scrollY);

    sections.updateSections(scrollY);

})