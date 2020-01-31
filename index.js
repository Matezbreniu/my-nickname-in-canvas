const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const speed = 3;
const letters = [
  (letterM = [
    {x: 15, y: 160},
    {x: 15, y: 10},
    {x: 42, y: 10},
    {x: 80, y: 130},
    {x: 118, y: 10},
    {x: 145, y: 10},
    {x: 145, y: 160},
    {x: 130, y: 160},
    {x: 130, y: 25},
    {x: 90, y: 160},
    {x: 70, y: 160},
    {x: 30, y: 25},
    {x: 30, y: 160},
    {x: 15, y: 160},
  ]),
  (lettera = [
    {x: 155, y: 160},
    {x: 170, y: 85},
    {x: 210, y: 85},
    {x: 225, y: 160},
    {x: 210, y: 160},
    {x: 206, y: 145},
    {x: 174, y: 145},
    {x: 170, y: 160},
    {x: 155, y: 160},
  ]),
  (letteraInside = [
    {x: 176, y: 130},
    {x: 181, y: 102},
    {x: 198, y: 102},
    {x: 203, y: 130},
    {x: 176, y: 130},
  ]),
  (lettert = [
    {x: 255, y: 160},
    {x: 255, y: 102},
    {x: 225, y: 102},
    {x: 225, y: 85},
    {x: 300, y: 85},
    {x: 300, y: 102},
    {x: 270, y: 102},
    {x: 270, y: 160},
    {x: 255, y: 160},
  ]),
  (lettere = [
    {x: 310, y: 160},
    {x: 310, y: 85},
    {x: 365, y: 85},
    {x: 365, y: 100},
    {x: 325, y: 100},
    {x: 325, y: 115},
    {x: 350, y: 115},
    {x: 350, y: 130},
    {x: 325, y: 130},
    {x: 325, y: 145},
    {x: 365, y: 145},
    {x: 365, y: 160},
    {x: 310, y: 160},
  ]),
  (letterz = [
    {x: 375, y: 160},
    {x: 375, y: 145},
    {x: 420, y: 100},
    {x: 375, y: 100},
    {x: 375, y: 85},
    {x: 440, y: 85},
    {x: 440, y: 100},
    {x: 395, y: 145},
    {x: 440, y: 145},
    {x: 440, y: 160},
    {x: 375, y: 160},
  ]),
];

setWaypoints = (endPoints) => {
  const waypoints = [];
  for (let i = 0; i < endPoints.length - 1; i++) {
    const startPoint = endPoints[i];
    const nextPoint = endPoints[i + 1];
    const distancex = nextPoint.x - startPoint.x;
    const distancey = nextPoint.y - startPoint.y;
    const frames = (Math.abs(distancex) + Math.abs(distancey)) / speed;
    for (let j = 0; j < frames; j++) {
      const x = startPoint.x + (distancex * j) / frames;
      const y = startPoint.y + (distancey * j) / frames;
      waypoints.push({
        x,
        y,
      });
    }
  }
  return waypoints;
};
let t = 0; // for setting next frame
let i = 1; // for setting next letter
let points = setWaypoints(letters[0]);

animate = (points) => {
  if (t < points.length - 2) {
    requestAnimationFrame(() => animate(points));
  }
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(points[t].x, points[t].y);
  ctx.lineTo(points[t + 1].x, points[t + 1].y);
  ctx.stroke();
  t++;
  if (t === points.length - 1 && i < letters.length) {
    points = setWaypoints(letters[i]);
    requestAnimationFrame(() => animate(points));
    i++;
    t = 0;
  }
};

animate(points);

drawLines = () => {
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[i].length - 1; j++) {
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(letters[i][j].x, letters[i][j].y);
      ctx.lineTo(letters[i][j + 1].x, letters[i][j + 1].y);
      ctx.stroke();
    }
  }
};
