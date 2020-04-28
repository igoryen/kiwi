var Kiwi=(function(name){return name
}(Kiwi||{}));
Kiwi.Song = function(lang, name, verse, chorus, bridge) {

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

