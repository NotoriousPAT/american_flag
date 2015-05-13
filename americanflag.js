//-------------------------------------------------

//              The American Flag
//          HTML5 canvas and javasript

//-------------------------------------------------



// Get the canvas context. Do this for all js canvas drawings

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');


//Fix a context bug that blurs the pixels

ctx.translate(0.5, 0.5);



//official dimensions of american flag:
//height=1.0
//width=1.9
//height of union=.5385
//width of union=.76 of height
//padding between bottom star and border of union=.054
//distance between center of stars top to bottom=.054
//padding between leftmost star and edge of flag=.063
//distance between center of stars left to right
//diamter of stars=.0616
//radius of stars=.0308
//height of stripes=.0769 (1/13)
//red=C40043
//white=ffffff
//blue=#002654



function drawAmericanFlag(x,y){
  var height=300;
  var width=height*1.9;
  var xStarSeparation = height * 0.063;
  var yStarSeparation = height * 0.054;


  //create white background

  ctx.fillStyle='#ffffff';
  ctx.fillRect(0,0, width, height);


  //create red stripes

  for(var i=0; i<13; i+=2){
    ctx.fillStyle = '#e0162b';
    ctx.fillRect(0, (i*(height/13)), width ,(height/13));
  }


  //create blue box

    ctx.fillStyle = '#0052a5';
    ctx.fillRect(0,0,(0.76*height),(7/13)*height);


  //fill stars and add to flag

    var outerRadius = 0.0616 * height / 2;
    var innerRadius = outerRadius * Math.sin(Math.PI / 10) / Math.sin(7 * Math.PI / 10);

    ctx.fillStyle = '#ffffff';
    for (var row = 1; row <= 9; ++row) {
        for (var col = 1; col <= 11; ++col) {
            if ((row + col) % 2 == 0) {
                drawStar(canvas, xStarSeparation * col, yStarSeparation * row, 5, outerRadius, innerRadius);
                ctx.fill();
            }
        }
    }


  //function used to build stars

  function drawStar(context, xCenter, yCenter, nPoints, outerRadius, innerRadius) {
      ctx.beginPath();
      for (var ixVertex = 0; ixVertex <= 2 * nPoints; ++ixVertex) {
          var angle = ixVertex * Math.PI / nPoints - Math.PI / 2;
          var radius = ixVertex % 2 == 0 ? outerRadius : innerRadius;
          ctx.lineTo(xCenter + radius * Math.cos(angle), yCenter + radius * Math.sin(angle));
      }
  }
}

  //call function

  drawAmericanFlag(0,0);
