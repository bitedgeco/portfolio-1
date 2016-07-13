// Main file for portfolio
// David Smith
/////////////////////////////////////////////

function generateContent() {
  $('#main').html('<entry class="template"><h3 class="sub-headings"><a class="anchor" name="namehere"></a>section</h3><div><p>content here</p></div></entry>');
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
  generateContent();
  if (window.innerWidth <= 680) { //if on mobile device..
    $('#main').accordion();
  }
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
