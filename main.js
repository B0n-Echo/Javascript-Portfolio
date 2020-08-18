/***********************Particles*************/
var options = {
    "particles": {
        "number": {
            "value": 399,
            "density": {
                "enable": true,
                "value_area": 240.5118091298284
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 353.2535873510851,
                "line_linked": {
                    "opacity": 0.1727499321339551
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 140.78421578421577,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true

};
particlesJS("particle", options);


function getExperience() {

    var initializingDate = new Date(2016, 3, 19);
    var previousExpirenceEnd = new Date(2016, 9, 20);

     var newExperienceStart = new Date(2017, 7, 1);

    const currentDate = new Date();

    var diff = Math.floor(currentDate.getTime() - initializingDate.getTime());
    
    var gap = Math.floor(newExperienceStart.getTime() - previousExpirenceEnd.getTime());

    var day = 1000 * 60 * 60 * 24;

    var d = Math.floor(gap/day);
    var m = Math.floor(d/31);
    var y = Math.floor(m/12);

    var d1 = Math.floor(diff/day);
    var m1 = Math.floor(d1/31);
    var y1 = Math.floor(m1/12);

    var months = m1 - m;
    var years = 0;

    while(months > 12){
        months -= 12;
        years += 1;
    }


    var message = currentDate.toDateString();
    message += " makes It! "
    message += years > 1 ? years + " years " : years + " year "
    message += months + " months "

    var experience = message;

     return experience;
}


document.getElementById("experience").innerHTML = getExperience();


  AOS.init();