// Main file for portfolio
// David Smith
/////////////////////////////////////////////

function generateContent() {
  //adds template, removes current content and updates with information in entries, removes template, sets nav img sizes
  htmlEntries = [];
  $('#main').html('<entry class="template"><h3 class="sub-headings"><a class="anchor" name="namehere"></a>section</h3><div><p>content here</p></div></entry>');
  $('.nav-menu').html('');
  entries.forEach(function(e) {
    htmlEntries.push(new Entry(e));
  });
  htmlEntries.forEach(function(e) {
    $('#main').append(e.toHTML());
    if (e.navImg) {
      $('.nav-menu').append('<li><a href=\"#' + e.name + '\"><img src=\"' + e.navImg + '\" class=\"nav-icon\"/></a></li>');
    }
  });
  $('.template').remove();
  // todo: set all nav img sizes to 600px/#entries
}

function addNewEntry(name1, section1, date1, text1, navImg1) {
  var entry = new Entry({name: name1, section: section1, date: date1, text: text1, navImg: navImg1});
  entries.push(entry);
  entry.toHTML();
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

function main() {
  generateContent();
  if (window.innerWidth <= 680) {
    $('#main').accordion();
  }
}

$(document).ready(main);
