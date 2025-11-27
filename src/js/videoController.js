export function initVideo(videoElement, canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  let videoLoaded = false;
  let targetTime = 0;
  let smoothTime = 0;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (videoLoaded) drawFrame();
  }

  function drawFrame() {
    requestAnimationFrame(drawFrame);
    if (!videoLoaded) return;

    smoothTime += (targetTime - smoothTime) * 0.15;
    if (Math.abs(videoElement.currentTime - smoothTime) > 0.01) {
      videoElement.currentTime = smoothTime;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scale = Math.max(canvas.width / videoElement.videoWidth, canvas.height / videoElement.videoHeight);
    const w = videoElement.videoWidth * scale;
    const h = videoElement.videoHeight * scale;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 6;

    ctx.drawImage(videoElement, x, y, w, h);
  }

  videoElement.addEventListener("loadeddata", () => {
    videoElement.pause();
    videoLoaded = true;
    drawFrame();
  });

  window.addEventListener("resize", resizeCanvas);

  function setTargetTime(p) {
    if (!videoElement.duration) return;
    targetTime = videoElement.duration * p;
  }

  return { setTargetTime };
}
