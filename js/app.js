function main() {
  if (window.innerWidth <= 680) { //if on mobile device..
    $('#main').accordion();
  }
}

$(document).ready(main);
