function Song(lang, name, verse, chorus, bridge) {
	// this.lang = lang;
	// this.name = name;
	// this.verse = verse;
	// this.chorus = chorus;
	// this.bridge = bridge;
	this.language = [
		{
			lang: lang[0],
			name: name[0],
			verse: [verse[0].en, verse[1].en],
			chorus: [chorus[0].en],
			bridge: [bridge[0].en]
		},
		{
			lang: lang[1],
			name: name[1],
			verse: [verse[0].ru, verse[1].ru],
			chorus: [chorus[0].ru],
			bridge: [bridge[0].ru]

		}
	]
};

//================================

window.onload = function() {
	console.log("loaded!");
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

	var ourGod = new Song(l, n, v, c, b);
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

