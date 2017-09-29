$("div.key").click(function() {
  audio = document.querySelector(`audio[data-key="${$(this).data("key")}`);
  audio.currentTime = 0;
  audio.play();
  $(this).addClass('playing');
});
