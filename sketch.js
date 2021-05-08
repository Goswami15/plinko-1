const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var ground;
function setup() {
  createCanvas(500, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);

  for (var i = 0; i <= width; i = i + 80) {
    divisions.push(new Ground(i, 650, 10, 300));
  }

  for (var i = 20; i <= width; i = i + 50) {
    plinkos.push(new Plinko(i, 100));
  }

  for (var i = 55; i <= width - 10; i = i + 50) {
    plinkos.push(new Plinko(i, 200));
  }

  for (var i = 25; i <= width; i = i + 50) {
    plinkos.push(new Plinko(i, 300));
  }

  for (var i = 60; i <= width - 10; i = i + 50) {
    plinkos.push(new Plinko(i, 400));
  }
}

function draw() {
  background(0);
  Engine.update(engine);
  for (var i = 0; i < divisions.length; i = i + 1) {
    divisions[i].display();
  }
  if (frameCount % 60 === 0) {
    particles.push(new Particle(width / 2 - 10, 50, 10));
  }
  ground.display();

  for (var b = 0; b < particles.length; b++) {
    particles[b].display();
  }

  for (var b = 0; b < plinkos.length; b++) {
    plinkos[b].display();
  }
}
