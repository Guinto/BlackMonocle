var Canvas = {
	canvas: null,
	ctx: null
};

Canvas.update = function() {
	Canvas.x++;
};

Canvas.draw = function() {
	Canvas.ctx.fillRect(x, 100, 20 , 20);
};

Canvas.setup = function(selector) {
	Canvas.canvas = document.getElementById(selector);
	Canvas.ctx = Canvas.canvas.getContext("2d");
	Canvas.x = 100;
	
	Canvas.ctx.fillStyle = "#f00";
};

Canvas.clear = function(selector) {
	if (Canvas.canvas == null) {
		Canvas.canvas = document.getElementById(selector);
	}
	if (Canvas.ctx == null) {
		Canvas.ctx = Canvas.canvas.getContext("2d");
	}
	
	// Store the current transformation matrix
	Canvas.ctx.save();

	// Use the identity matrix while clearing the canvas
	Canvas.ctx.setTransform(1, 0, 0, 1, 0, 0);
	Canvas.ctx.clearRect(0, 0, Canvas.canvas.width, Canvas.canvas.height);

	// Restore the transform
	Canvas.ctx.restore();
};