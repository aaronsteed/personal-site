// var hobbies = ["Web Developer", "Student of DCU",
//     "Book Reader", "Tea Drinker", "Software Engineer"
// ];
var imageUrl = "../../../resources/media/images/";
var imageTuples = [
	{"image": "balloon-fest-baltinglass.jpg",
	 "location": "Baltinglass, Co. Wicklow, Ireland",
	 "url": ""},
	 {"image": "carrigeen-sunset.jpg",
	 "location": "Carrigeen, Baltinglass, Co. Wicklow, Ireland",
	 "url": ""},
	 {"image": "ha-penny-bridge.jpg",
	 "location": "Ha'Penny Bridge, Co. Dublin, Ireland",
	 "url": ""},
	 {"image": "nou-camp-barcelona-pitch-view.jpg",
	 "location": "Camp Nou, Carrer d'Aristides Maillol, Barcelona, Spain",
	 "url": ""},
	 {"image": "sagrada-familia-barcelona.jpg",
	 "location": "La Sagrada Familia, Carrer de Mallorca, Barcelona, Spain",
	 "url": ""}];

// var googleMapUrls = 
window.onload = function() {
    var randomIndex = (Math.floor(Math.random() * imageTuples.length));
    document.getElementById("blah").setAttribute("src",(imageUrl + imageTuples[randomIndex].image));
    document.getElementById("location").innerText = imageTuples[randomIndex].location;
     $("#hobby").typed({
            strings: ["Software ^500 Engineer", "Web Developer", "Student", "Tea Drinker", "Comic Book Reader"],
            typeSpeed: 0,
            loop: true
        });
};

// var index = 0;
// function changeHobby() {
// 	document.getElementById("hobby").innerHTMl = hobbies[index];
// 	index++;
// }

// setInterval(changeHobby, 3000)
