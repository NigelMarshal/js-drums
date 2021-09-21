window.addEventListener("keydown", function (e) {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audio);
  if (!audio) return; //Stop function is audio for the element is not present
  audio.play();
});
