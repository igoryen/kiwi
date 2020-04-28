window.onload = function() {
	console.log("loaded!");
	// songs come from songs.js
	// OUR GOD
	var l = ["english", "русский"];
	var n = ["Our God", "Наш Бог"];
	var v = [
		{
			en: ["Water you turned into wine", "opened the eyes of the blind", "there's no one like you", "none like You!"],
			ru: ["Воду..."]
		},
		{
			en: ["Into the darkness you shine", "out of the ashes we rise", "there's no one like you", "none like You!"],
			ru: ["Во тьму"]
		}
	];
	var c = [
		{
			en: ["Our God is greater, our God is stronger,", "God you are higher than any other.", "Our God is Healer, Awesome in Power,", " Our God! Our God!"],
			ru: ["Наш Бог великий"]
		}
	];

	var b = [
		{
			en: ["And if our God is for us,", "then who could ever stop us.", "And if our God is with us,", "then what could stand against."],
			ru: ["И если наш Бог с нами"]
		}
	];

	var ourGod = new Kiwi.Song(l, n, v, c, b);
	//========================


	var x = 0; // 0 = english, 1 = russian

	// console.log("ourGod.ru: " + ourGod.ru());

	// console.log("ourGod.ru.lang: " + ourGod.lang());
	// console.log("ourGod.ru.name: " + ourGod.ru.name());
	document.getElementById('title').innerHTML = "Kiwi";
	document.getElementById('lang').innerHTML = ourGod.language[x].lang;
	document.getElementById('name').innerHTML = ourGod.language[x].name;
	document.getElementById('verse').innerHTML = ourGod.language[x].verse[0];
	document.getElementById('verse2').innerHTML = ourGod.language[x].verse[1];

	document.getElementById('chorus').innerHTML = ourGod.language[x].chorus[0];
	document.getElementById('bridge').innerHTML = ourGod.language[x].bridge[0];

};

