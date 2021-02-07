const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var bg;
var hero, heroImg;
var sling;
var monster;
var blocks;

function preload() {
//preload the images here
bg = loadImage("Bg.png");

}

function setup() {
  createCanvas(1400,750);

    engine = Engine.create();
    world = engine.world;

    hero = new Hero(200,400,50,50);
    

}

function draw() {
  background(bg);
  Engine.update(engine); 

  hero.display();

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}