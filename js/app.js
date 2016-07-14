// Main file for portfolio
// David Smith
/////////////////////////////////////////////
var numImages = 0;

function generateContent() {
  //adds template, removes current content and updates with information in entries, removes template, sets nav img sizes
  var htmlEntries = [];  //tmp array constructed to refresh content upon entries changes and append to page
  numImages = 0;

  $('#main').html('<entry class="template"><h3 class="sub-headings"><a class="anchor" name="namehere"></a>section</h3><div><time pubdate datetime="2000-01-01">Publish Time</time><p>content here</p></div></entry>');
  $('.nav-menu').html('');

  entries.forEach(function(e) {
    htmlEntries.push(new Entry(e));
  });

  htmlEntries.sort(function(a,b) {
    return (new Date(b.date)) - (new Date(a.date));
  });
//todo: make img an object with name property and onclick event!
  htmlEntries.forEach(function(e) {
    $('#main').append(e.toHTML());
    if (e.navImg) {
      e.navImg.renderImg(e.navImg);
    } else {
      console.log('no image supplied');
    }
  });

  $('.template').remove();
  // resizes nav images for when more populate
  var x = (450 / numImages).toString() + 'px';
  $('.nav-menu img').width(x);
  var m = (60 / numImages).toString() + 'px';
  $('.nav-menu img').css('margin-left', m);
}

function addNewEntry(name1, section1, text1, navImg1) {
  var date1 = new Date();
  var entry = new Entry({name: name1, section: section1, date: date1, text: text1, navImg: navImg1});
  entries.push(entry);
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
