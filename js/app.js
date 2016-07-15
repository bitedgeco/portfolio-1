// Main file for portfolio
// David Smith
/////////////////////////////////////////////
var numImages = 0;  //used to calc nav img sizes, ++ in Entry constructor

function adjustNavImageSize() {
  // resizes nav images for when more populate
  var x = (450 / numImages).toString() + 'px';
  $('.nav-menu img').width(x);
  var m = (60 / numImages).toString() + 'px';
  $('.nav-menu img').css('margin-left', m);
}

// ex: addNewEntry('hello', 'test-header', 'content goes here', new Img('hello', 'fb.png'));
function genNavImages(entries1) {
  $('.nav-menu').html('');
  entries1.forEach(function(e) {
    if (e.navImg) {
      e.navImg.renderImg(e.navImg);
    }
  });
}

function generateContent(img) {
  //adds template, removes current content and updates with information in entries, removes template, sets nav img sizes
  numImages = 0;
  var htmlEntries = [];  //array constructed to refresh content upon entries changes and append to page

  if (img) {  //if img parameter was given by navImg event handler
    for(var i = 0; i < entries.length; i++) {
      if (entries[i].name === img) {
        $('#main').hide();
        $('#main').html('');  //check necessary
        htmlEntries.push(new Entry(entries[i]));
        htmlEntries.sort(function(a,b) {
          return (new Date(b.date)) - (new Date(a.date));
        });
        htmlEntries.forEach(function(e) {
          $('#main').append(e.toHTML());
        });
        genNavImages(entries);
        $('#main').fadeIn();
      }
    };
    return;
  }
  //if no navImg given
  $('#main').html('');
  $('.nav-menu').html('');

  entries.forEach(function(e) {
    htmlEntries.push(new Entry(e));
  });

  htmlEntries.sort(function(a,b) {
    return (new Date(b.date)) - (new Date(a.date));
  });

  htmlEntries.forEach(function(e) {
    $('#main').append(e.toHTML());
  });

  genNavImages(entries);
  adjustNavImageSize();  //does not work when put into genNavImages func ?
}

function addNewEntry(name1, section1, text1, navImg1) {
  var date1 = new Date();
  var entry = new Entry({name: name1, section: section1, date: date1, text: text1, navImg: navImg1});
  entries.push(entry);
  generateContent();
}


window.onresize = function() {
  var $mainID = $('#main');
  if (window.innerWidth <= 680) {
    generateContent();
    $mainID.accordion(); // it must be initialized, destroyed, then re-initialized to work when resizing back and forth
    $mainID.accordion('destroy');
    $mainID.accordion();
    $('.nav-menu').html('');
  } else {
    genNavImages(entries);
    if ($mainID.hasClass('ui-accordion')) {
      $mainID.accordion('destroy');
    }
  }
};

function main() {
  generateContent();

  $('#home').on('click', function() {
    generateContent();
    if ($('#main').hasClass('ui-accordion')) {
      $('#main').accordion('destroy');
      $('#main').accordion();
    }
  });

  if (window.innerWidth <= 680) {
    $('#main').accordion();
  }
}

$(document).ready(main);
