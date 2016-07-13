// Main file for portfolio
// David Smith
/////////////////////////////////////////////

function main() {
  if (window.innerWidth <= 680) { //if on mobile device..
    $('#main').accordion();
  }
}

window.onresize = function() {
  if (window.innerWidth <= 680) {
    main();
  } else {
    if ($('#main').hasClass('ui-accordion')) {
      $('#main').accordion('destroy');
    }
  }
};

$(document).ready(main);
