function playSound(e) {
  {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; //Stop function is audio for the element is not present
    audio.currentTime = 0; //Prevent delay when spamming keys
    audio.play();
    audio.volume = 0.2;
    key.classList.add("playing");
  }
}

function removeTransition(e) {
  //Skip if not transform
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
