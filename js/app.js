function main() {
  if (window.innerWidth <= 680) { //if on mobile device..
    $('#main').accordion();
  }
  //other functionality later...
}

window.onresize = function() {
  if (window.innerWidth <= 680) {
    main();
  } else {
    $('#main').accordion('destroy');
  }
};

$(document).ready(main);
