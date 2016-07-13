// Main file for portfolio
// David Smith
/////////////////////////////////////////////

function loadContent() {  //Load entries into web page via jQuery
  // for (var e = 0; e < entries.length; e++) {
  //   entries[e].toHTML();
  // }
}

function main() {
  if (window.innerWidth <= 680) { //if on mobile device..
    $('#main').accordion();
  }
}

window.onresize = function() {
  if (window.innerWidth <= 680) {
    main();
  } else {
    $('#main').accordion('destroy');
  }
};

$(document).ready(main);
loadContent();
