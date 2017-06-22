(function() {
	function getRandomIntInclusive(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function getRandomSpeed() {
		return getRandomIntInclusive(1, 3) * 100;
	}

	function getRandomX() {
		return getRandomIntInclusive(1, 5) * 101;
	}

	function getRandomY() {
		return 41 + getRandomIntInclusive(0, 2) * 83;
	}
	window.Functions = {
	    getRandomSpeed: getRandomSpeed,
	    getRandomX: getRandomX,
	    getRandomY: getRandomY
	};
})();