// (c) Dean McNamee <dean@gmail.com>.  All rights reserved.
/*
window.addEventListener('load', function() {

  console.log( "drawCube load" );

  var black = new Pre3d.RGBA(0, 0, 0, 1);
  var white = new Pre3d.RGBA(1, 1, 1, 1);

  var screen_canvas = document.getElementById('canvas');
  var renderer = new Pre3d.Renderer(screen_canvas);

  var cube = Pre3d.ShapeUtils.makeCube(5);
  var transform = new Pre3d.Transform();


  var cur_white = false;  // Default to black background.

  function draw() {

	renderer.fill_rgba = new Pre3d.RGBA(255, 255, 255, 0.5),
    renderer.transform =transform
    renderer.bufferShape(cube);

    if (cur_white) {
      renderer.ctx.setFillColor(1, 1, 1, 1);
    } else {
      renderer.ctx.setFillColor(0, 0, 0, 1);
    }
    renderer.drawBackground();

    renderer.drawBuffer();
    renderer.emptyBuffer();
  }

  renderer.camera.focal_length = 2.5;

	function drawCube() {
		
		console.log( "drawCube" );
		DemoUtils.autoCamera(renderer, 0, 0, -30, 0, 0, 0, draw); 	
		draw();
	}
  
}, false);

*/
