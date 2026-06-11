const button = document.getElementById("playMusic");
const music = document.getElementById("music");

button.addEventListener("click", () => {
    music.play();
});
