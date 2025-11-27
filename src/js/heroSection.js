export function initHeroSection() {
  const heroSection = document.querySelector("#heroSection");
  const gtaText = document.querySelector("#gtaText");
  const playSvg = document.querySelector("#playSvg");
  const whatchTrailerSvg = document.querySelector("#whatchTrailer");

  function update(scrollY) {
    const scale = Math.max(1, 1.3 - scrollY / window.innerHeight);
    const opacity = Math.max(0.05, 1 - scrollY / window.innerHeight);

    heroSection.style.transform = `scale(${scale})`;
    gtaText.style.opacity = opacity;
    playSvg.style.opacity = opacity;
    whatchTrailerSvg.style.opacity = opacity;

    if (scrollY > window.innerHeight * 5) {
      heroSection.classList.add("hidden");
    } else {
      heroSection.classList.remove("hidden");
    }
  }
  return { update };
}
