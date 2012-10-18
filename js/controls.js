var Controls = {
	hammer: null
};

Controls.setHammer = function(selector) {
	Controls.hammer = new Hammer(document.getElementById(selector));
};