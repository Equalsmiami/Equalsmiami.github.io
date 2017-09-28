
function playingSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // if an invalid key is pressed function will simply stop.
  audio.currentTime = 0; // resets the play time of the audio to zero.
                        // So multiple hits are heard better.
  audio.play();
  key.classList.add('playing');
};

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip event listen if it is not a "transform"
  this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playingSound);
window.addEventListener('click', playingSound);
