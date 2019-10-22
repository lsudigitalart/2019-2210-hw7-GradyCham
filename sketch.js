var winter;
var time;
var loadTime;
var playTime;
var amp;
var level;
var grad;
var lerping;
var fft;
var wind = 0;
var y = 20;
var secondY = -340;
var thirdY = -640;
function preload (){
	//redbone = loadSound("AllSpice.mp3", playtheSound);
}
function playtheSound(){
	createCanvas(800,800);
	if (winter.isLoaded()){
		loadTime = millis();
	    winter.play();
	    print(loadTime);
	}
	//loadTime = millis();
	//redbone.play();
	//print(loadTime);
	amp = new p5.Amplitude();
	fft = new p5.FFT();
}
function setup(){
	//redbone.play();
	winter = loadSound("HipShop.mp3", playtheSound);
	snowflake = new Snowflake(0, y);
	snowflake2 = new Snowflake(100, y);
	snowflake3 = new Snowflake(200, y);
	snowflake4 = new Snowflake(300, y);
	snowflake5 = new Snowflake(400, y);
	snowflake6 = new Snowflake(500, y);
	snowflake7 = new Snowflake(600, y);
	snowflake8 = new Snowflake(700, y);
	snowflake9 = new Snowflake(800, y);
	snowflake10 = new Snowflake(900, y);
	snowflake11 = new Snowflake(1000, y);
	snowflake12 = new Snowflake(1100, y);
	nsnowflake = new Snowflake(0, secondY);
	nsnowflake2 = new Snowflake(100, secondY);
	nsnowflake3 = new Snowflake(200, secondY);
	nsnowflake4 = new Snowflake(300, secondY);
	nsnowflake5 = new Snowflake(400, secondY);
	nsnowflake6 = new Snowflake(500, secondY);
	nsnowflake7 = new Snowflake(600, secondY);
	nsnowflake8 = new Snowflake(700, secondY);
	nsnowflake9 = new Snowflake(800, secondY);
	nsnowflake10 = new Snowflake(900, secondY);
	nsnowflake11 = new Snowflake(1000, secondY);
	nsnowflake12 = new Snowflake(1100, secondY);
	tsnowflake = new Snowflake(0, thirdY);
	tsnowflake2 = new Snowflake(100, thirdY);
	tsnowflake3 = new Snowflake(200, thirdY);
	tsnowflake4 = new Snowflake(300, thirdY);
	tsnowflake5 = new Snowflake(400, thirdY);
	tsnowflake6 = new Snowflake(500, thirdY);
	tsnowflake7 = new Snowflake(600, thirdY);
	tsnowflake8 = new Snowflake(700, thirdY);
	tsnowflake9 = new Snowflake(800, thirdY);
	tsnowflake10 = new Snowflake(900, thirdY);
	tsnowflake11 = new Snowflake(1000, thirdY);
	tsnowflake12 = new Snowflake(1100, thirdY);
	
	print (snowflake.x, snowflake.y);
}

class Snowflake{
	constructor(tempX, tempY){
		this.x = tempX;
		this.y = tempY;
	}
	make (){
		stroke(0);
		strokeWeight(2);
		fill(255);
		circle (this.x, this.y - 30, 20);
		circle (this.x - 20, this.y - 20, 20);
		circle (this.x - 30, this.y, 20);
		circle (this.x + 20, this.y - 20, 20);
		circle (this.x - 20, this.y + 20, 20);
		circle (this.x, this.y, 30); //center
		circle (this.x, this.y + 30, 20);
		circle (this.x + 20, this.y + 20, 20);
		circle (this.x + 30, this.y, 20);
	}
	move(){
		this.x = this.x + wind;
		this.y = this.y + 1;
	}
}



function draw (){
	playTime = millis() - loadTime;
	
	//print (playTime);

	
	print(level);
	
	background(0);
	
	noStroke();
	fill(255);
	rect (0, 650, 800, 150);
	stroke(0);
	
	circle (400,600, 400);
	circle (400, 375, 300);
	circle (400, 200, 200);
	strokeWeight(10);
	stroke(255);
	line (500, 300, 650, 400);
	line (650, 400, 700, 500);
	line (700, 500, 680, 515);
	line (700, 500, 700, 545);
	line (700, 500, 720, 545);
	line (700, 500, 745, 540);
	//right hand
	line (300, 300, 150, 400);
	line (150, 400, 100, 500);
	line (100, 500, 120, 515);
	line (100, 500, 100, 545);
	line (100, 500, 80, 545);
	line (100, 500, 55, 540);
	noStroke();
	stroke(0);
	fill(0);
	
	circle (365, 185, 20);
	circle (435, 185, 20);
	circle (400, 255, 10);
	circle (367, 247, 10);
	circle (340, 230, 10);
	circle (433, 247, 10);
	circle(460, 230, 10);
	circle (400, 325, 20);
	circle (400, 395, 20);
	circle (400, 465, 20);
	
	snowflake.make();
	snowflake.move();
	snowflake2.make();
	snowflake2.move();
	snowflake3.make();
	snowflake3.move();
	snowflake4.make();
	snowflake4.move();
	snowflake5.make();
	snowflake5.move();
	snowflake6.make();
	snowflake6.move();
	snowflake7.make();
	snowflake7.move();
	snowflake8.make();
	snowflake8.move();
	snowflake9.make();
	snowflake9.move();
	snowflake10.make();
	snowflake10.move();
	snowflake11.make();
	snowflake11.move();
	snowflake12.make();
	snowflake12.move();
	print (snowflake.y);
	if (snowflake.y > 840){
		snowflake.y = 0;
		snowflake2.y = 0;
		snowflake3.y = 0;
		snowflake4.y = 0;
		snowflake5.y = 0;
		snowflake6.y = 0;
		snowflake7.y = 0;
		snowflake8.y = 0;
		snowflake9.y = 0;
		snowflake10.y = 0;
		snowflake11.y = 0;
		snowflake12.y = 0;
	}
	if (snowflake.y >= 0 && snowflake.y <= 280){
		wind = 0;
	}
	if (snowflake.y > 280 && snowflake.y < 560){
		wind = -1;
	}
	if (snowflake.y >= 560 && snowflake.y <= 840){
		wind = 1;
	}
	nsnowflake.make();
	nsnowflake.move();
	nsnowflake2.make();
	nsnowflake2.move();
	nsnowflake3.make();
	nsnowflake3.move();
	nsnowflake4.make();
	nsnowflake4.move();
	nsnowflake5.make();
	nsnowflake5.move();
	nsnowflake6.make();
	nsnowflake6.move();
	nsnowflake7.make();
	nsnowflake7.move();
	nsnowflake8.make();
	nsnowflake8.move();
	nsnowflake9.make();
	nsnowflake9.move();	
	nsnowflake10.make();
	nsnowflake10.move();
	nsnowflake11.make();
	nsnowflake11.move();
	nsnowflake12.make();
	nsnowflake12.move();
	print (nsnowflake.y);
	if (nsnowflake.y > 840){
		nsnowflake.y = 0;
		nsnowflake2.y = 0;
		nsnowflake3.y = 0;
		nsnowflake4.y = 0;
		nsnowflake5.y = 0;
		nsnowflake6.y = 0;
		nsnowflake7.y = 0;
		nsnowflake8.y = 0;
		nsnowflake9.y = 0;
		nsnowflake10.y = 0;
		nsnowflake11.y = 0;
		nsnowflake12.y = 0;
		
	}
	tsnowflake.make();
	tsnowflake.move();
	tsnowflake2.make();
	tsnowflake2.move();
	tsnowflake3.make();
	tsnowflake3.move();
	tsnowflake4.make();
	tsnowflake4.move();
	tsnowflake5.make();
	tsnowflake5.move();
	tsnowflake6.make();
	tsnowflake6.move();
	tsnowflake7.make();
	tsnowflake7.move();
	tsnowflake8.make();
	tsnowflake8.move();
	tsnowflake9.make();
	tsnowflake9.move();
	tsnowflake10.make();
	tsnowflake10.move();
	tsnowflake11.make();
	tsnowflake11.move();
	tsnowflake12.make();
	tsnowflake12.move();
	print (tsnowflake.y);
	if (tsnowflake.y > 840){
		tsnowflake.y = 0;
		tsnowflake2.y = 0;
		tsnowflake3.y = 0;
		tsnowflake4.y = 0;
		tsnowflake5.y = 0;
		tsnowflake6.y = 0;
		tsnowflake7.y = 0;
		tsnowflake8.y = 0;
		tsnowflake9.y = 0;
		tsnowflake10.y = 0;
		tsnowflake11.y = 0;
		tsnowflake12.y = 0;
	}
	
	if (playTime > 30000){
		winter.stop();
		fill ("blue");
		rect (0,0,800,800);
		fill (191, 112, 6);
		rect (0, 650, 800, 150);
		fill ("yellow");
		circle (600, 100, 200);
		fill (173, 216, 230);
		ellipse (400, 700, 400, 35);
		
	}

}