const bright = document.querySelector("#bright");
const main = document.querySelector("main");
bright.addEventListener('input', function() {
  main.style.backgroundColor = `rgba(0,0,0,${1 - (this.value/10)})`;
});