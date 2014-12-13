var bio = {};
var work = {};
var education = {};
var projects = {};






bio["name"] = "Kimberly Ryan";
bio["role"] = "Website Developer | Graphic Designer | Photographer";
bio["contacts"] = {
  "mobile": "210.000.0000",
  "email": "false-email@false-email.com",
  "github": "kimberlyryan",
  "twitter": "@no_twitter",
  "location": "San Antonio, Texas"
}
bio["welcomeMessage"] = " ";
bio["skills"] = [
  "website development", "graphic design", "photography", "customer service",
]
bio["bioPic"] = "images/kimberly.jpg";
work["jobs"] = [
  {
    "employer": "AT&T Global Services",
    "title": "HR Technology Consultant",
    "location": "San Antonio, Texas",
    "dates": "July 2014-Current",
    "description": "Develop and maintain web pages for AT&T's Human Resources department."
  },
  {
    "employer": "AT&T Mobility",
    "title": "Retail Sales Manager",
    "location": "San Antonio, Texas",
    "dates": "June 2013-July 2014",
    "description": "Oversee daily operations of retail store."
  },
    {
    "employer": "AT&T Mobility",
    "title": "Lead Retail Sales Consultant",
    "location": "Beverly Hills, California",
    "dates": "August 2012-June 2013",
    "description": "Assist customers in the selection and purchase of AT&T's products and services. Fill in as acting manager on duty, as necessary."
  },
    {
    "employer": "AT&T Mobility",
    "title": "Retail Sales Consultant",
    "location": "San Antonio, Texas",
    "dates": "August 2011-August 2012",
    "description": "Assist customers in the selection and purchase of AT&T's products and services."
  }
]
education["schools"] = [
  {
    "name": "University of Phoenix",
    "location": "San Antonio, Texas",
    "degree": "Bachelor of Technology",
    "majors": ["Information Systems Security"],
    "dates": "Anticipated Graduation: 2015",
    "url" : "https://phoenix.edu"
  },
  {
    "name": "Alamo Colleges",
    "location": "San Antonio, Texas",
    "degree": "Associate of Science",
    "majors": ["Computer Science"],
    "dates": "2010-2013",
    "url" : "https://alamo.edu"
  }
]
education["onlineCourses"] = [
  {
    "title": "Intro to HTML and CSS",
    "school" : "Udacity",
    "dates": 2014,
    "url" : "https://udacity.com"
  },
  {
    "title": "Javascript Basics",
    "school" : "Udacity",
    "dates": 2014,
    "url" : "https://udacity.com"
  },
  {
    "title": "Intro to jQuery",
    "school" : "Udacity",
    "dates": 2014,
    "url" : "http://udacity.com"
  }
]
projects["projects"] = [
  {
    "title": "Kimberly Ryan's Resume",
    "dates": "2014",
    "description": "I built my own online resume.",
    "images": [
      "images/kimberlyresume.jpg"
    ]   
  }
]

// could create vars to save all of the complex object infos used in replace() methods
bio.display = function() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role)
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  // not sure why the spacing is off between contact info and contact category
  for (contact in bio.contacts) {
    var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
    formattedContact = formattedContact.replace("%contact%", contact);
    $("#topContacts").append(formattedContact);
  }

  var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedPic);

  var formattedDescription = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedDescription);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
  }

  // needs styling, currently flows outside of header on mobile resolution
  for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkill);
  }

  for (contact in bio.contacts) {
    var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
    formattedContact = formattedContact.replace("%contact%", contact);
    $("#footerContacts").append(formattedContact);
  }

}

work.display = function() {
  for (job in work.jobs) {
    // create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    // concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLworkEmployer.replace("%data%", education.schools[school].name);
    var formattedDegree = HTMLworkTitle.replace("%data%", education.schools[school].degree);
    var formattedSchoolHeader = formattedSchoolName + formattedDegree;
    $(".education-entry:last").append(formattedSchoolHeader);

    //deal with majors

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    // TODO: style better
    for (major in education.schools[school].majors) {
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
      $(".education-entry:last").append(formattedMajor);
    }
  }
  
  $("#education").append(HTMLonlineClasses);

  for (course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
    var formattedOnlineHeader  = formattedTitle + formattedSchool;
    $(".education-entry:last").append(formattedOnlineHeader);
    
    var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedDates);

    // TODO: style better
    var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedURL);
  }
}

bio.display();
work.display();
education.display();
projects.display();


function inName(_name) {
  var name;
  if (_name) {
    name = _name;
  } else {
    name = bio.name;
  }
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] +" "+name[1];
}

//$('#main').append(internationalizeButton);

// you want to see a map? here's a map.
$("#mapDiv").append(googleMap);


