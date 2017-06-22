(function() {
	function getRandomIntInclusive(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function getRandomSpeed() {
		return getRandomIntInclusive(1, 5) * 100;
	}

	function getRandomX() {
		return getRandomIntInclusive(1, 5) * 101;
	}
	window.Functions = {
	    getRandomSpeed: getRandomSpeed,
	    getRandomX: getRandomX
	};
})();