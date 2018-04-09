function draw() {
  var canvas = document.getElementById("multiplier");
  var ctx = canvas.getContext("2d");

  var x = 300; // x coordinate
  var y = 300; // y coordinate
  var radius = 300; // Arc radius
  var point_size = 1;
  var number_of_points = 0;
  var multiplier = 0;
  var points = [];
  var multiplierInput = document.getElementById("multiplierInput");
  var pointsInput = document.getElementById("pointNumber");
  var increase = true;
  drawCircle();

  function drawCircle() {
    points = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();

    var startAngle = 0; // Starting point on circle
    var endAngle = 2 * Math.PI; // End point on circle

    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.stroke();

    var i;
    var angleBetweenPoints = 360 / number_of_points;
    for (i = 0; i < number_of_points; i++) {
      drawPoint(i * angleBetweenPoints, 1);
    }

    for (i = 0; i < points.length; i++) {
      ctx.beginPath();
      ctx.moveTo(points[i].x, points[i].y);

      if (i < points.length / multiplier) {
        ctx.lineTo(points[i * multiplier].x, points[i * multiplier].y);
      } else {
        ctx.lineTo(
          points[(i * multiplier) % points.length].x,
          points[(i * multiplier) % points.length].y
        );
      }

      ctx.stroke();
    }
  }

  function drawPoint(angle, distance) {
    var pointx = x + radius * Math.cos(-angle * Math.PI / 180) * distance;
    var pointy = y + radius * Math.sin(-angle * Math.PI / 180) * distance;

    ctx.beginPath();
    ctx.arc(pointx, pointy, point_size, 0, 2 * Math.PI);
    ctx.fill();

    points.push({ x: pointx, y: pointy });
  }

  // event handlers
  multiplierInput.addEventListener("change", function () {
    multiplier = parseInt(this.value);
    drawCircle();
  })

  pointsInput.addEventListener("change", function () {
    number_of_points = parseInt(this.value);
    drawCircle();
  })
  // while (true) {
  //   if (increase) {
  //     if (multiplier < 50) {
  //       multiplier += 1;
  //       drawCircle();
  //     } else {
  //       increase = false;
  //     }
  //   } else {
  //     if (multiplier > 0) {
  //       multiplier -= 1;
  //       drawCircle();
  //     } else {
  //       increase = true;
  //     }
  //   }
  // }
}
