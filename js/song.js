function Song(lang, name, verse, chorus, bridge) {
	this.lang = lang;
	this.name = name;
	this.verse = verse;
	this.chorus = chorus;
	this.bridge = bridge;
}

Song.prototype.showLang = function() {
	console.log(this.lang[0]);
};
Song.prototype.showName = function() {
	console.log(this.name[0]);
};

//================================

var l = ["en", "ru"];
var n = ["Our God", "Наш Бог"];

var s = new Song(l, n, "verse", "chorus", "bridge");
s.showLang();
s.showName();