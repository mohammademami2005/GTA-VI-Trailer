import "./style.css";

const main = document.querySelector("#app");

// main.innerHTML = `

// // `;

// --------------------------------------
// 🎯 عناصر پروژه
// --------------------------------------
const hero = main.querySelector("#hero");
const img1 = main.querySelector("#img1");
const logoText = main.querySelector("#logoText");
const logoImg = main.querySelector("#logoImg");
const section2 = main.querySelector("#section2");


// --------------------------------------
// 🎯 تنظیمات اسکیل لوگو
// --------------------------------------
let maxScale = 45; // شروع اسکیل
let minScale = 0.5; // پایان اسکیل
let animationDistance = 1500; // چقدر اسکرول طول بکشه تا 45 → 1

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // پارالاکس هرو
  const scaleHero = Math.max(1, 1.3 - scrollY / window.innerHeight);
  hero.style.transform = `scale(${scaleHero})`;

  let opacity = 1 - scrollY / window.innerHeight;
  opacity = Math.max(0.05, Math.min(1, opacity));
  img1.style.opacity = opacity;

  // نمایش لوگو از 800px
  if (scrollY >= 800) {
    logoText.classList.remove("hidden");
    logoText.classList.add("flex");

    let newScroll = scrollY - 600;
    let progress = Math.min(newScroll / animationDistance, 1);

    // اسکیل لوگو
    let scale = maxScale - progress * (maxScale - minScale);
    logoImg.style.transform = `scale(${scale})`;
    logoText.style.backgroundColor = `rgba(255, 255, 255, ${progress})`;

    // تغییر تصویر لوگو در پایان انیمیشن
    if (progress === 1) {
      logoImg.setAttribute('src', '/logoWhite2.png');
      logoText.style.backgroundColor = 'black';

      if(scrollY >= 2100){
        let newScroll2 = scrollY - 2100;
        let p = Math.max(Math.min(0.4 - newScroll2 / 1000, 0.4), 0.1);
        logoImg.style.transform = `scale(${p})`;
        logoImg.style.transition = 'none'
        if(p == 0.1){
          logoImg.style.transition = 'all 1s ease-in-out';
          logoImg.style.marginBottom = '300vh';
          // hero.style.marginBottom = '300vh';
          // logoText.style.marginBottom = '300vh';
          console.log(scrollY);
        }else{
          logoImg.style.marginBottom = '0';
        }
      }
    } else {
      logoImg.setAttribute('src', '/img/VIstack.bc737d6e.svg');
    }

  } else {
    logoText.classList.add("hidden");
    logoText.classList.remove("flex");
  }


});

