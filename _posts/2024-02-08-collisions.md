---
layout: base
title: collision test
description: collisions lol
type: hacks
courses: { compsci: {week: 22} }
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Collisions lol</title>
</head>
<canvas> </canvas>
</html>

<script>
float x = 150;
float y = 100;
float xSpeed = 5;
float ySpeed = 4;

void setup() {
  size(300, 300);
}

void draw() {
  background(64);
  ellipse(x, y, 25, 25);

  x += xSpeed;
  y += ySpeed;
  
  if (x < 0 || x > width) {
    xSpeed *= -1;
  }

  if (y < 0  || y > height) {
    ySpeed *= -1;
  }
}
</script>

