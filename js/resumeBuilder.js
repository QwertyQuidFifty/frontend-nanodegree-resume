var bio = {
		"name": "Russell Scott Massang",
		"age": "27",
		"contacts": {
			"email": "russellmassang@gmail.com",
			"mobile": "0452527536",
            "github": "QwertyQuidFifty",
            "twitter": "@russellmassang",
            "location": "Adelaide"
		},
        "welcomeMessage": "Where all the white ladies at?",
        "skills": [
            "Japanese", "JavaScript"
        ],
        "bioPic":images/fry.jpg"
};

var work = {
    "jobs": [
        {   
        "employer":"Viterra",
		"title":"Grain Classifier",
		"dates":"Oct 2014",
		"description":"Soul crushing"
        },
        {
        "employer":"Joytalk",
        "title":"Business English Teacher",
        "dates":"Apr 2013 - Jun 2014",
        "description":"Not as bad as it could have been"        
        }
    ]    
};


var education = {
    "schools": [
        {
            "name": "University of Western Australia",
            "location": "Perth, WA",
            "degree":"Honours",
            "majors": "Agricultural Science",
            "dates": 2012,
            "url": "http://example.com"
        },
        {
            "name": "University of Western Australia",
            "location": "Perth, WA",
            "degree":"BSc",
            "majors": "Geography",
            "dates": 2008,
            "url": "http://example.com"
        }
    ],
    "onlineCourses": [
    	{	
            "title":"Javascript Basics",
    		"school":"Udacity",
            "dates": 2014,
            "url": "http://example.com"    	
        }
    ]    
};

var projects = {
    "projects": [
        {
            "title":"British East India Genealogy Project",
            "dates":"2009-present"
            "description":"The only worthwhile thing I've created in my life"
            "images": [
                "http://example.com",
                "http://example.com"
            ]
        }
    ]
};

var formattedName = HTMLheaderName.replace("%data%",bio.name)
var formattedRole = HTMLheaderRole.replace("%data%",work.position)
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
//$("#main").prepend(work)
//$("#main").append(bio.age);
//if(bio.skills.length > 0) {
//    $("header").append(HTMLskillsStart);
//    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0])
//    $("#skills").append(formattedSkill;)
//    formattedSkill = HTMLskills.replace("%data%",bio.skills[1])
//    $("#skills").append(formattedSkill;)
//}
for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedjobTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedjobTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

}
