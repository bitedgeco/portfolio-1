// Main file for portfolio
// David Smith
/////////////////////////////////////////////
//Global Vars

/////////////////////

function loadContent() {  //Load entries into web page via jQuery
  for (var e = 0; e < entries.length; e++) {
    entries[e].toHTML();
    // $('<li><a href="' + e + '"><img src="' + entries[e].navImg + '" class="nav-icon"/></a></li>').appendTo('.nav-menu');
    // $('<a name="'+ e + '">').appendTo($main);
    // $('<h3 class="sub-headings">' + entries[e].section + '</h3>').appendTo($main);
    // $('<div><p>' + entries[e].text + '</p></div>').appendTo($main);
  }
}

function main() {
  if (window.innerWidth <= 680) { //if on mobile device..
    $('#main').accordion();
  }
  //other functionality later...
  loadContent();
}

window.onresize = function() {
  if (window.innerWidth <= 680) {
    main();
  } else {
    $('#main').accordion('destroy');
  }
};

$(document).ready(main);
