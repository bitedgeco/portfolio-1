// Main file for portfolio
// David Smith
/////////////////////////////////////////////

function generateContent() {
  $('.nav-menu').html('');
  entries.forEach(function(e) {
    htmlEntries.push(new Entry(e));
  });

  htmlEntries.forEach(function(e) {
    $('#main').append(e.toHTML());
    $('.nav-menu').append('<li><a href=\"#' + e.name + '\"><img src=\"' + e.navImg + '\" class=\"nav-icon\"/></a></li>');
  });
  $('.template').remove();
}

function main() {
  if (window.innerWidth <= 680) { //if on mobile device..
    $('#main').accordion();
  }
  generateContent();
}

window.onresize = function() {
  if (window.innerWidth <= 680) {
    $('#main').accordion();
  } else {
    if ($('#main').hasClass('ui-accordion')) {
      $('#main').accordion('destroy');
    }
  }
};

$(document).ready(main);
