function show_clock() {
  let h = document.getElementsByClassName('hour')[0];
  let m = document.getElementsByClassName('minut')[0];
  let s = document.getElementsByClassName('second')[0];

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  h.style.transform = `rotate(${30 * hours + minutes/2}deg)`;
  m.style.transform = `rotate(${6 * minutes}deg`;
  s.style.transform = `rotate(${ 6 * seconds}deg`;

  let sound = new Audio('sound.mp3');
  sound.play();
}

setInterval(show_clock, 1000);

// console.log('harsh dahiya $(ha)')