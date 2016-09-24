var imageTuples = [
	{"image": "balloon-fest-baltinglass.jpg",
	 "location": "Baltinglass, Co. Wicklow, Ireland",
	 "url": ""},
	 {"image": "carrigeen-sunset.jpg",
	 "location": "Carrigeen, Baltinglass, Co. Wicklow, Ireland",
	 "url": ""},
	 {"image": "cliffs-of-moher.jpg",
	  "location": "Cliffs of Moher, Liscannor, Co. Clare, Ireland",
	  "url": ""},
	 {"image": "ha-penny-bridge.jpg",
	 "location": "Ha'Penny Bridge, Co. Dublin, Ireland",
	 "url": ""},
	 {"image": "nou-camp-barcelona-pitch-view.jpg",
	 "location": "Camp Nou, Carrer d'Aristides Maillol, Barcelona, Spain",
	 "url": ""}];

// var googleMapUrls = 
window.onload = function() {
    var randomIndex = (Math.floor(Math.random() * imageTuples.length));
    $('#header').addClass('header' + randomIndex);
    document.getElementById("image-location").innerText = imageTuples[randomIndex].location;
     $("#distraction").typed({
            strings: ["Software ^500 Engineer", "Web Developer", "Student", "Tea Drinker", "Comic Book Reader"],
            loop: true,
            startDelay: 1000,
            typeSpeed: 30
        });
};
