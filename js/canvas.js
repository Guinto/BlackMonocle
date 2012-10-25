var Canvas = {
	canvas: null,
	ctx: null,
	x: 0
};

Canvas.update = function() {
	Canvas.x++;
};

Canvas.draw = function() {
	Canvas.ctx.fillRect(0, 0, Canvas.x, 20);
};

Canvas.setup = function(idSelector) {
	Canvas.canvas = document.getElementById(idSelector);
	Canvas.ctx = Canvas.canvas.getContext("2d");
	Canvas.x = 0;
	
	Canvas.ctx.fillStyle = "#f00";
};

Canvas.clear = function(idSelector) {
	if (Canvas.canvas == null) {
		Canvas.canvas = document.getElementById(idSelector);
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