export function initSections(video1, video2, video3Module, video4) {
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
  const realDimez = document.querySelector("#realDimez");
  const realText = document.querySelector('#realText');
  const footer = document.querySelector('footer')
  const footerContent = document.querySelector('#footerContent')

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
        viceCitySection.querySelector("h2").style.opacity = progress2;
        viceCitySection.querySelector("h3").style.opacity = progress2;
        viceCitySection.querySelector(
          "h2"
        ).style.transform = `scale(${progress2})`;
        viceCitySection.querySelector(
          "h3"
        ).style.transform = `scale(${progress2})`;
        viceCitySection_Circle.style.top = `${p * -100}%`;

        if(p >= 0.9){
          viceCitySection_Circle.style.display = "none";
        }else{
          viceCitySection_Circle.style.display = "block";
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
        section11.style.top = `${76 - p * 200}%`;
      },
    },
    {
      el: realDimez,
      start: 33000,
      end: 38500,
      onEnter: () => {
        realDimez.classList.replace("hidden", "block");
      },
      onExit: () => {
        realDimez.classList.replace("block", "hidden");
      },
      onProgress: (p) => {
        if (window.scrollY >= 34000) {
          const progress = Math.min((window.scrollY - 34000) / 3000, 1);

          // رنگ شروع: #313953
          const start = { r: 49, g: 57, b: 83 };

          // رنگ پایان: #0f1119
          const end = { r: 15, g: 17, b: 25 };

          const r = start.r + (end.r - start.r) * progress;
          const g = start.g + (end.g - start.g) * progress;
          const b = start.b + (end.b - start.b) * progress;

          realDimez.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

          if (window.scrollY > 35200) {
            realDimez.classList.replace("absolute", "fixed");
            realDimez.style.top = "-1390px";
            const newProgres = Math.min((window.scrollY - 35200) / 400, 1);
            video4.setTargetTime(newProgres);
              if(newProgres >= 0.9){
                const newProgres2 = Math.min((window.scrollY - 35576) / 20 , 55)
                realText.style.top= 100 - newProgres2 + '%';

                if(window.scrollY >= 36676){
                  realDimez.classList.replace('fixed' , 'absolute')
                  realDimez.style.top="35319px"
                }
              }
          } else {
            realDimez.classList.replace("fixed", "absolute");
            realDimez.style.top = "33860px";
          }
        }
      },
    },
    {
      el:footer,
      start:38500,
      end:45000,
      onEnter:()=>{footer.classList.replace('hidden','flex')},
      onExit:()=>{footer.classList.replace('flex','hidden')},
      onProgress:(p)=>{
        footerContent.style.opacity=p
      }
    }
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
