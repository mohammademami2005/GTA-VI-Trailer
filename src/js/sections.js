export function initSections(video1, video2, video3Module) {
  // ---------------selections---------------
  const comingSection = document.querySelector("#coming-section");
  const viceCitySection = document.querySelector("#viceCitySection");
  const viceCitySection_Circle = document.querySelector("#section3Circle");
  const jsonVideoSection = document.querySelector("#jasonVideoSection");
  const JasonDuval = document.querySelector("#JasonDuval");
  const jsonVideoSection2 = document.querySelector("#jasonVideoSection2");
  const JasonDuval2 = document.querySelector("#JasonDuval2");
  const section8 = document.querySelector("#section8");
  const luciaSection = document.querySelector("#lucia");
  const luciaVideoSection = document.querySelector("#luciaVideo");
  const section11 = document.querySelector("#section11");

  // --------------sections array--------------
  const sections = [
    {
      el: comingSection,
      start: 2639,
      end: 5000,
      onEnter: () => {
        comingSection.classList.remove("hidden");
        comingSection.classList.add("flex");
      },
      onExit: () => {
        comingSection.classList.add("hidden");
        comingSection.classList.remove("flex");
      },
      onProgress: (p) => {
        comingSection.style.opacity = Math.min(
          (window.scrollY - 2639) / 600,
          1
        );
        if (p > 0.3) {
          comingSection.style.top = `${Math.min(-(p - 0.3) * 3 * 50, 70)}vh`;
        } else {
          comingSection.style.top = `160px`;
        }
      },
    },
    {
      el: viceCitySection,
      start: 5000,
      end: 6000,
      onEnter: () => {
        viceCitySection.classList.add("fixed", "flex");
        viceCitySection.classList.remove("hidden");
        viceCitySection_Circle.style.display = "block";
      },
      onExit: () => {
        viceCitySection.classList.remove("fixed", "flex");
        viceCitySection_Circle.style.display = "none";
      },
      onProgress: (p) => {
        const progress2 = Math.min((window.scrollY - 5000) / 400, 1);
        console.log("progress2", progress2);
        viceCitySection.querySelector("h2").style.opacity = progress2;
        viceCitySection.querySelector("h3").style.opacity = progress2;
        viceCitySection.querySelector(
          "h2"
        ).style.transform = `scale(${progress2})`;
        viceCitySection.querySelector(
          "h3"
        ).style.transform = `scale(${progress2})`;
        viceCitySection_Circle.style.top = `${p * -100}%`;
        if (progress2 === 1) {
          viceCitySection.style.opacity =
            1 - Math.min((window.scrollY - 5400) / 400, 1);
        }
      },
    },
    {
      el: jsonVideoSection,
      start: 6000,
      end: 12000,
      onEnter: () => {
        jsonVideoSection.classList.replace("absolute", "fixed");
        jsonVideoSection.style.top = 0;
      },
      onExit: () => {
        jsonVideoSection.classList.replace("fixed", "absolute");
        jsonVideoSection.style.top = "7000px";
      },
      onProgress: (p) => {
        jsonVideoSection.style.opacity = p;
        video1.setTargetTime(p);
      },
    },
    {
      el: JasonDuval,
      start: 10000,
      end: 12000,
      onEnter: () => {
        JasonDuval.classList.replace("hidden", "flex");
      },
      onExit: () => {
        JasonDuval.classList.replace("flex", "hidden");
      },
      onprogress: (p) => {
        JasonDuval.style.bottom = p;
      },
    },
    {
      el: jsonVideoSection2,
      start: 13000,
      end: 18000,
      onEnter: () => {
        jsonVideoSection2.classList.replace("hidden", "block");
        jsonVideoSection2.style.top = 0;
      },
      onExit: () => {
        // jsonVideoSection2.classList.replace("fixed", "absolute");
        // jsonVideoSection2.style.top = '18000px';
      },
      onProgress: (p) => {
        jsonVideoSection2.style.opacity = p;
        video2.setTargetTime(p);
      },
    },
    {
      el: JasonDuval2,
      start: 18000,
      end: 22000,
      onEnter: () => {
        JasonDuval2.classList.replace("hidden", "grid");
      },
      onExit: () => {
        JasonDuval2.classList.replace("grid", "hidden");
      },
      onProgress: (p) => {
        jsonVideoSection2.style.transform = `translateX(${p * 100 + 1}%)`;
      },
    },
    {
      el: section8,
      start: 22000,
      end: 25728,
      onEnter: () => {
        section8.classList.remove("hidden");
        //    jsonVideoSection2.cla
      },
      onExit: () => {
        section8.classList.add("hidden");
      },
      onProgress: (p) => {
        section8.style.opacity = p;
      },
    },
    {
      el: luciaSection,
      start: 24000,
      end: 27000,
      onEnter: () => {
        luciaSection.classList.replace("hidden", "grid");
      },
      onExit: () => {
        luciaSection.classList.replace("grid", "hidden");
      },
      onProgress: (p) => {
        luciaSection.style.background =
          "linear-gradient(to bottom,transparent , black)";
      },
    },
    {
      el: luciaVideoSection,
      start: 26800,
      end: 29000,
      onEnter: () => {
        luciaVideoSection.style.position = "fixed";
        luciaVideoSection.style.top = 0;
      },
      onExit: () => {
        // luciaVideoSection.style.position = "absolute";
        // luciaVideoSection.style.top = "26800px";
      },
      onProgress: (p) => {
        video3Module.setTargetTime(p);
      },
    },
    {
      el: section11,
      start: 28500,
      end: 34000,
      onEnter: () => {
        section11.style.position = "fixed";
        section11.style.top = "76%";
      },
      onExit: () => {
        section11.style.position = "absolute";
        section11.style.top = "29000px";
      },
      onProgress: (p) => {
        section11.style.backgroundColor = `rgba(0,0,0,${p})`;
        section11.style.top = `${76 - (p*200)}%`
      },
    },
    {
      el: section11,
      start: 28500,
      end: 34000,
      onEnter: () => {
        section11.style.position = "fixed";
        section11.style.top = "76%";
      },
      onExit: () => {
        section11.style.position = "absolute";
        section11.style.top = "29000px";
      },
      onProgress: (p) => {
        section11.style.backgroundColor = `rgba(0,0,0,${p})`;
        section11.style.top = `${76 - (p*200)}%`
      },
    },
  ];

  //  ---------------------- handle function ----------------------
  function updateSections(scrollY) {
    sections.forEach((sec) => {
      if (scrollY >= sec.start && scrollY <= sec.end) {
        sec.onEnter();
        const progress = (scrollY - sec.start) / (sec.end - sec.start);
        if (sec.onProgress) sec.onProgress(progress);
      } else {
        sec.onExit();
      }
    });
  }

  return { updateSections };
}
