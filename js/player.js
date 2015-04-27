'use strict';

var Player = (function () {

	var Player = function (name) {
		this.name = name;
		this.life = 5000;
	};

	Player.prototype.attack = function (player) {
		console.log('ataco'+this.name);		
	};

	Player.prototype.damage = function (damage) {
		console.log('se jodio'+this.name);
	};

	Player.prototype.isDead = function () {
		return this.life <= 0;
	};

	Player.prototype.setFaction = function (faction) {
		this.faction = faction;
	};

	return Player;

})();
