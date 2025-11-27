export function initLogo() {
  const logoText = document.querySelector("#logoText");
  const logoImg = document.querySelector("#logoImg");
  const config = { maxScale: 45, minScale: 0.5, distance: 1500 };

  function update(scrollY) {
    if (scrollY < 800) {
      logoText.classList.add("hidden");
      return;
    }

    logoText.classList.remove("hidden");
    logoText.classList.add("flex");

    const progress = Math.min((scrollY - 600) / config.distance, 1);
    const scale =
      config.maxScale - progress * (config.maxScale - config.minScale);

    logoImg.style.transform = `scale(${scale})`;
    logoText.style.backgroundColor = `rgba(255,255,255,${progress})`;
    logoImg.src =
      progress === 1 ? "/logoWhite2.png" : "/img/VIstack.bc737d6e.svg";

    if (progress === 1) {
      logoImg.setAttribute("src", "/logoWhite2.png");
      logoText.style.backgroundColor = "black";

      if (scrollY >= 2100) {
        let newScroll2 = scrollY - 2100;
        let p = Math.max(Math.min(0.5 - newScroll2 / 1500, 0.5), 0.14);
        logoImg.style.transform = `scale(${p})`;
        logoImg.style.transition = "none";
        if (p == 0.14) {
          logoImg.style.opacity = "0";
        } else {
          logoImg.style.opacity = "1";
        }
      } else {
        logoImg.setAttribute("src", "/img/VIstack.bc737d6e.svg");
      }
    }
    if(scrollY >= 6000){
      logoText.classList.add("hidden");
    }else{
        logoText.classList.remove("hidden");
    }
  }

  return { update };
}
