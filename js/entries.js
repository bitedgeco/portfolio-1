var htmlEntries = [];

// Entry object
function Entry(info) {
  this.name = info.name;
  this.section = info.section;
  this.date = info.date;
  this.navImg = 'img/' + info.navImg;
  this.text = info.text;
}

function addNewEntry(name, section, date, navImg, text) {
  var entry = new Entry(name, section, date, navImg, text);
  entries.push(entry);
  entry.toHTML();
}

Entry.prototype.toHTML = function() {
  // nav icon
  // $('<li><a href="#' + this.name + '"><img src="' + this.navImg + '" class="nav-icon"/></a></li>').appendTo('.nav-menu');

  // //todo: set all nav img sizes to 600/#entries
  var $newEntry = $('entry.template').clone();
  $newEntry.removeClass();
  $newEntry.attr('class', this.name);
  $newEntry.find('h3').html('<a name="' + this.name + '"></a>' + this.section);
  $newEntry.find('p').text(this.text);
  return $newEntry.children();  //putting children() here removes entry tag for accordion menu to work
};

// Entries
var entries = [
  {
    name: 'about',
    section: 'About Me',
    date: 'July 2016',
    navImg: 'person.jpg',
    text: 'Hello, I am David, and this is my portfolio site.  Hopefully after browsing this site, you can get a sense of who I am and where I am going.  I began making this portfolio as a student at Code Fellows in July 2016.  At Code Fellows, I am studying to become a competitive developer, and plan on working as a data analyst.  I enjoy working with data in general, and find solving problems with it fun and rewarding.'
  },
  {
    name: 'edu',
    section: 'Education',
    date: 'July 2016',
    navImg: 'edu.png',
    text: 'I graduated in 2015 with a B.S. in chemistry and a B.A. in biochemistry from the University of Washington.  My favorite subjects were chemical biology, quantitative analysis, and statistical mechanics.  I joined Code Fellows in the summer of 2016, and am currently on track to learn Python.  If you click onmy GitHub link at the top of the page, you can see some of the projects that I have been working on.'
  },
  {
    name: 'exp',
    section: 'Experience',
    date: 'July 2016',
    navImg: 'work.jpg',
    text: 'Throughout my experience as a working member of society, I have worked as a cashier, a QA technician at a tire factory, and a server at many restaurants.  I am in the process of taking what I have learned and changing my career to the technology field, incorporating my education and experience.'
  },
  {
    name: 'int',
    section: 'Interests',
    date: 'July 2016',
    navImg: 'interests.png',
    text: 'When I\'m not coding, I have several hobbies keeping me busy.  I enjoy taking vacations, with my most recent trip being to Iceland.  It was one of the most beautiful places I have ever seen.  I also enjoy brewing beer.  I am currently fermenting a ginger beer for the first time.  For video games, I have been playing Fallout 4 and dying a lot in Dark Souls III.  I am also in one of the most in-depth fantasy football leagues ever made.'
  }
];

// entries.forEach(function(e) {
//   htmlEntries.push(new Entry(e));
// });
//
// htmlEntries.forEach(function(e) {
//   $('#main').append(e.toHTML());
// });

// $('.template').remove();
