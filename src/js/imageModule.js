export function ImageModal() {
  const cards = document.querySelectorAll(".cardHover");

  cards.forEach((card) => {
    // ساخت SVG آیکون بزرگ‌نمایی
    const icon = document.createElement("img");
    icon.src = "/img/maximize-2.svg";
    icon.classList.add("customSvg");
    card.appendChild(icon);

    // وقتی روی کارت کلیک می‌شود
    card.addEventListener("click", () => {
      const imgSrc = card.querySelector("img").getAttribute("src");

      // ساخت پنجره مودال
      const modal = document.createElement("div");
      modal.className = `
        fixed top-0 left-0 w-full h-full bg-black bg-opacity-80
        flex justify-center items-center z-[9999]
      `;

      modal.innerHTML = `
        <div class="relative w-[90%] h-[90%] bg-black rounded-lg overflow-hidden">
          <img src="${imgSrc}" class="w-full h-full object-contain" />
          <img id="closeBtn" src="/img/close-circle.svg"
            class="w-10 h-10 absolute top-2 right-2 cursor-pointer" />
        </div>
      `;

      document.body.appendChild(modal);

      // بستن مودال
      modal.querySelector("#closeBtn").addEventListener("click", () => {
        modal.remove();
      });
    });
  });
}
