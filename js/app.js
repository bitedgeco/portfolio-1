// Main file for portfolio
// David Smith
/////////////////////////////////////////////
var numImages = 0;

function adjustNavImageSize() {
  // resizes nav images for when more populate
  var x = (450 / numImages).toString() + 'px';
  $('.nav-menu img').width(x);
  var m = (60 / numImages).toString() + 'px';
  $('.nav-menu img').css('margin-left', m);
}

function generateContent(img) {
  //adds template, removes current content and updates with information in entries, removes template, sets nav img sizes
  var htmlEntries = [];  //array constructed to refresh content upon entries changes and append to page
  numImages = 0;

  if (img) {  //if img parameter was given by navImg event handler
    for(var i = 0; i < entries.length; i++) {
      if (entries[i].name === img) {
        $('#main').hide();
        $('#main').html('<entry class="template"><h3 class="sub-headings"><a class="anchor" name="namehere"></a>section</h3><div><time pubdate datetime="2000-01-01">Publish Time</time><p>content here</p></div></entry>');
        htmlEntries.push(new Entry(entries[i]));
        htmlEntries.sort(function(a,b) {
          return (new Date(b.date)) - (new Date(a.date));
        });
        htmlEntries.forEach(function(e) {
          $('#main').append(e.toHTML());
        });
        $('#main').fadeIn();
      }
    };
    $('.template').remove();
    return;
  }

  $('#main').html('<entry class="template"><h3 class="sub-headings"><a class="anchor" name="namehere"></a>section</h3><div><time pubdate datetime="2000-01-01">Publish Time</time><p>content here</p></div></entry>');
  $('.nav-menu').html('');

  entries.forEach(function(e) {
    htmlEntries.push(new Entry(e));
  });

  htmlEntries.sort(function(a,b) {
    return (new Date(b.date)) - (new Date(a.date));
  });

  htmlEntries.forEach(function(e) {
    $('#main').append(e.toHTML());
    if (e.navImg) {
      e.navImg.renderImg(e.navImg);
    } else {
      console.log('no image supplied');
    }
  });

  $('.template').remove();
  adjustNavImageSize();
}

function addNewEntry(name1, section1, text1, navImg1) {
  var date1 = new Date();
  var entry = new Entry({name: name1, section: section1, date: date1, text: text1, navImg: navImg1});
  entries.push(entry);
  generateContent();
}


window.onresize = function() {
  adjustNavImageSize();
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
