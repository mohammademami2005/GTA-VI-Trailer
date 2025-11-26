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
const section3 = main.querySelector("#section3");
const section3_Circle = section3.querySelector("#section3Circle");
const section3_Circle2 = section3.querySelector("#section3Circle2");
const section4 = main.querySelector("#section4");
const section5 = main.querySelector("#section5");
const JasonVideo = section5.querySelector("video");
const section6 = main.querySelector("#section6");
const section7 = main.querySelector("#section7");
const section8 = main.querySelector("#section8");
const section10 = main.querySelector("#section10");
const section11 = main.querySelector("#section11");

document.querySelectorAll(".cardHover").forEach((item) => {
  const img = document.createElement("img");
  img.classList.add("customSvg");
  img.src = "/img/maximize-2.svg";
  item.appendChild(img);
  console.log(item.firstElementChild.getAttribute("src"), "iasdfjlkadsfj");
  item.addEventListener("click", () => {
    const src = item.firstElementChild.getAttribute("src");
    const moduleWindow = document.createElement("div");
    moduleWindow.classList.add(
      "fixed",
      "top-0",
      "left-0",
      "w-full",
      "h-full",
      "bg-black",
      "bg-opacity-80",
      "flex",
      "justify-center",
      "items-center",
      "z-9999"
    );
    moduleWindow.innerHTML = `
      <div class="relative w-[90%] h-[90%] bg-black rounded-lg overflow-hidden">
        <img src="${src}" class="w-full h-full object-contain " alt='photo'/>
          <img id="closeBtn"  src="/img/close-circle.svg" class="w-10 h-10 absolute top-2 right-2  cursor-pointer" alt='close'/>
      </div>
    `;
    document.body.appendChild(moduleWindow);
    const closeBtn = moduleWindow.querySelector("#closeBtn");
    closeBtn.addEventListener("click", () => {
      document.body.removeChild(moduleWindow);
    });
  });
});

// --------------------------------------
// 🎯 تنظیمات اسکیل لوگو
// --------------------------------------
let maxScale = 45; // شروع اسکیل
let minScale = 0.5; // پایان اسکیل
let animationDistance = 1500; // چقدر اسکرول طول بکشه تا 45 → 1

// -----------------------------
// video scroll playback FIXED
// -----------------------------
const canvas = document.getElementById("videoCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // رسم مجدد فریم بعد از تغییر سایز
  if (videoLoaded) drawFrame();
}
window.addEventListener("resize", resizeCanvas);

// video
const video = document.getElementById("JasonVideo");
let videoLoaded = false;
let targetTime = 0;
let smoothTime = 0;

video.addEventListener("loadeddata", () => {
  video.pause();
  videoLoaded = true;
  drawFrame();
});

function drawFrame() {
  requestAnimationFrame(drawFrame);
  if (!videoLoaded) return;

  smoothTime += (targetTime - smoothTime) * 0.15;

  if (Math.abs(video.currentTime - smoothTime) > 0.01) {
    video.currentTime = smoothTime;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const vidW = video.videoWidth;
  const vidH = video.videoHeight;
  const canW = canvas.width;
  const canH = canvas.height;

  // object-fit: cover
  const scale = Math.max(canW / vidW, canH / vidH);
  const w = vidW * scale;
  const h = vidH * scale;
  const x = (canW - w) / 2;
  const y = (canH - h) / 20;

  ctx.drawImage(video, x, y, w, h);
}
// ---------------------------------------------------------------
const canvas2 = document.getElementById("videoCanvas2"); // اگر ویدئو دوم Canvas جدا دارد
const ctx2 = canvas2.getContext("2d");

function resizeCanvas2() {
  canvas2.width = window.innerWidth;
  canvas2.height = window.innerHeight;
  if (videoLoaded2) drawFrame2();
}
window.addEventListener("resize", resizeCanvas2);

const video2 = document.getElementById("JasonVideo2");
let videoLoaded2 = false;
let targetTime2 = 0;
let smoothTime2 = 0;

video2.addEventListener("loadeddata", () => {
  video2.pause();
  videoLoaded2 = true;
  drawFrame2();
});

function drawFrame2() {
  requestAnimationFrame(drawFrame2);
  if (!videoLoaded2) return;

  smoothTime2 += (targetTime2 - smoothTime2) * 0.15;

  if (Math.abs(video2.currentTime - smoothTime2) > 0.01) {
    video2.currentTime = smoothTime2;
  }

  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

  const vidW2 = video2.videoWidth;
  const vidH2 = video2.videoHeight;
  const canW2 = canvas2.width;
  const canH2 = canvas2.height;

  // object-fit: cover
  const scale = Math.max(canW2 / vidW2, canH2 / vidH2);
  const w2 = vidW2 * scale;
  const h2 = vidH2 * scale;
  const x2 = canW2 - w2;
  const y2 = (canH2 - h2) / 4;

  ctx2.drawImage(video2, x2, y2, w2, h2);
}
// =================================================================
// =================================================================
const canvas3 = document.getElementById("videoCanvas3"); // اگر ویدئو دوم Canvas جدا دارد
const ctx3 = canvas3.getContext("2d");

function resizeCanvas3() {
  canvas3.width = window.innerWidth;
  canvas3.height = window.innerHeight;
  if (videoLoaded3) drawFrame3();
}
window.addEventListener("resize", resizeCanvas3);

const video3 = document.getElementById("JasonVideo3");
let videoLoaded3 = false;
let targetTime3 = 0;
let smoothTime3 = 0;

video3.addEventListener("loadeddata", () => {
  video3.pause();
  videoLoaded3 = true;
  drawFrame3();
});

function drawFrame3() {
  requestAnimationFrame(drawFrame3);
  if (!videoLoaded3) return;

  smoothTime3 += (targetTime3 - smoothTime3) * 0.15;

  if (Math.abs(video3.currentTime - smoothTime3) > 0.01) {
    video3.currentTime = smoothTime3;
  }

  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);

  const vidW3 = video3.videoWidth;
  const vidH3 = video3.videoHeight;
  const canW3 = canvas3.width;
  const canH3 = canvas3.height;

  // object-fit: cover
  const scale = Math.max(canW3 / vidW3, canH3 / vidH3);
  const w3 = vidW3 * scale;
  const h3 = vidH3 * scale;
  const x3 = canW3 - w3;
  const y3 = (canH3 - h3) / 6;

  ctx3.drawImage(video3, x3, y3, w3, h3);
}

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // پارالاکس هرو
  const scaleHero = Math.max(1, 1.3 - scrollY / window.innerHeight);
  hero.style.transform = `scale(${scaleHero})`;

  let opacity = 1 - scrollY / window.innerHeight;
  opacity = Math.max(0.05, Math.min(1, opacity));
  img1.style.opacity = opacity;
  hero.querySelector("#playSvg").style.opacity = opacity;
  hero.querySelector("#whatchTrailer").style.opacity = opacity;

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
      logoImg.setAttribute("src", "/logoWhite2.png");
      logoText.style.backgroundColor = "black";

      if (scrollY >= 2100) {
        let newScroll2 = scrollY - 2100;
        let p = Math.max(Math.min(0.4 - newScroll2 / 1500, 0.4), 0.1);
        logoImg.style.transform = `scale(${p})`;
        logoImg.style.transition = "none";
        if (p == 0.1) {
          logoImg.style.transition = "all 1s ease-in-out";
          logoImg.style.marginBottom = "300vh";

          if (scrollY >= 3000) {
            let p = Math.min((scrollY - 3000) / 200, 1);
            section2.classList.remove("hidden");
            section2.classList.add("flex", "border-white");
            const imgInSection2 = section2.querySelector("img");
            const h2InSection2 = section2.querySelector("h2");
            imgInSection2.style.opacity = p;
            h2InSection2.style.opacity = p;
            if (scrollY >= 2700) {
              section2.style.position = "sticky";
              section2.style.top = "0";

              if (scrollY >= 3400) {
                let p = Math.min((scrollY - 3400) / 200, 1);
                const p2 = Math.min((scrollY - 3600) / 300, 1);
                const p3 = Math.min((scrollY - 3600) / 1500, 1);
                section3.classList.add("fixed", "flex");
                section3.querySelector("h2").style.opacity = p2;
                section3.querySelector("h3").style.opacity = p2;
                section3.querySelector("h2").style.scale = p3;
                section3.querySelector("h3").style.scale = p3;
                // section3_Circle.style.transform = `scale(${p*10})`
                section3_Circle2.style.top = `${p * -100}%`;
                section5.style.opacity = 0;

                if (scrollY >= 5000) {
                  const p = Math.min((scrollY - 5000) / 3000, 1);
                  section3.style.display = "none";

                  section6.classList.replace("absolute", "fixed");
                  section6.style.top = 0;
                  section6.style.opacity = p;
                  if (video2.duration) {
                    targetTime2 = video2.duration * p;
                  }

                  if (scrollY >= 8000) {
                    section4.classList.remove("hidden");
                    section4.classList.add("flex");
                    const p1 = Math.min((scrollY - 8000) / 3000, 1);
                    section6.style.opacity = 1 - p1;
                    const p2 = Math.min((scrollY - 9000) / 1000, 3);

                    // console.log(p2*100, "p2");
                    section4.style.top = `${p2 * -100}%`;

                    if (p >= 1) {
                      section6.style.top = `${(1 - p) * 100}%`;
                    }

                    if (scrollY >= 11000) {
                      const p_1 = Math.min(
                        Math.max((scrollY - 11000) / 1000, 0),
                        1
                      );
                      section6.style.zIndex = 0;

                      if (video.duration) {
                        targetTime = video.duration * p_1;
                      }
                      section5.style.position = "fixed";
                      section5.style.top = "0";
                      section5.style.opacity = p1;

                      // -----------------------------------------------------13000-----------------------------------------------
                      if (scrollY >= 13000) {
                        section7.classList.replace("hidden", "grid");
                        section5.style.opacity = 1 - p_1;
                        // section8.classList.replace("hidden", "flex");

                        if (scrollY >= 14800) {
                          // section8.classList.replace("hidden", "flex");
                          section8.style.opacity = Math.min(
                            (scrollY - 14800) / 800,
                            1
                          );
                          // -------------------------------------16000-------------------------------------
                          if (scrollY >= 16000) {
                            section8.style.opacity =
                              1 - Math.min((scrollY - 14800) / 2000, 1);
                            // ------------------------------------------------18600------------------------------------------------
                            if (scrollY >= 18600) {
                              section10.style.position = "fixed";
                              section10.style.top = 0;
                              if (video3.duration) {
                                const newP = Math.min(
                                  (scrollY - 18600) / 1000,
                                  1
                                );
                                targetTime3 = video3.duration * newP;
                                // ----------------------------------------19990----------------------------------------
                                if (scrollY >= 19770) {
                                  section11.style.position = "fixed";
                                  section11.style.top = "76%";
                                  if (scrollY >= 20000) {
                                    section11.style.position = "absolute";
                                    section11.style.top = "20900px";
                                    section11.style.backgroundColor = `rgba(0,0,0,${Math.min(
                                      (scrollY - 21000) / 500,
                                      1
                                    )})`;

                                    // if (scrollY >= 21000) {

                                    // }
                                  }
                                } else {
                                  section11.style.position = "absolute";
                                  section11.style.top = "20300px";
                                }
                              }
                            } else {
                              section10.style.position = "absolute";
                              section10.style.top = "18600px";
                            }
                          }
                        } else {
                          section8.style.opacity = 0;
                          // section8.style.top = "16000px";
                        }
                      } else {
                        // section7.classList.replace("flex", "hidden");
                      }
                    } else {
                      section6.style.zIndex = 400;
                    }
                  } else {
                    section5.style.position = "absolute";
                    section5.style.top = "7800px";
                    section4.classList.add("hidden");
                    section4.classList.remove("flex");
                  }
                } else {
                  section3.style.display = "flex";

                  // section6.classList.replace("fixed", "absolute");
                  // section6.style.top = 5000;
                  // if (video2.duration) {
                  //   targetTime2 = video2.duration * p;
                  // }
                }
              } else {
                section3.classList.remove("fixed", "hidden");
                section3_Circle2.style.display = "none";
              }
            }
          }
        } else {
          logoImg.style.marginBottom = "0";
        }
      }
    } else {
      logoImg.setAttribute("src", "/img/VIstack.bc737d6e.svg");
    }
  } else {
    logoText.classList.add("hidden");
    logoText.classList.remove("flex");
  }
  console.log(scrollY, "my name is gholam");
});
