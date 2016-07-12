function main() {
  if (window.innerWidth <= 680) { //if on mobile device..
    $('#main').accordion();
  }
}

$(document).ready(main);
window.onresize = function() {
  if (window.innerWidth <= 680) {
    main();
  } else {
    $('#main').accordion('destroy');
  }
};
