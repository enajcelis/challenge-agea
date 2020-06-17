const wrapper = document.getElementById("video-wrapper");
const player = document.getElementById("myYoutubeVideo");
const poster = document.getElementById("poster");
let playY;
const playVideo = poster.addEventListener("click", () => {
  wrapper.style.display = "block";
  poster.style.display = "none";
  playY = player.src += "?autoplay=1";
});
