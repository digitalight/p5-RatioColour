// sketch.js
let c = 0;
let m = 0;
let y = 0;

function setup() {
  var canvas = createCanvas(540,360);
  canvas.parent('mixedpaint')
  background(255);

 
}

function higher(a,b,c) {
	let av = (a+b+c)/3;
	if (a > av) {
		return a;
	}
	if (b > av) {
		return b;
	}
	if (c > av) {
		return c;
	}
}

function ratio(r1,r2,r3){
	let h=higher(r1,r2,r3);
	i = 255/h;

	let f1 = r1*i;
	let f2 = r2*i; 
	let f3 = r3*i;
	return int([f1,f2,f3]);

}

function cmy(c,m,y) {
	r=255-c;
	g=255-m;
	b=255-y;
	return [r,g,b];
}

function draw () {
background(255);
noStroke();
let cyan = document.getElementById("cyan");
let magenta = document.getElementById("magenta");
let yellow = document.getElementById("yellow");
let cval = document.getElementById("cval");
let mval = document.getElementById("mval");
let yval = document.getElementById("yval");
s1 = int(cyan.value);
s2 = int(magenta.value);
s3 = int(yellow.value);
cval.innerHTML = s1;
mval.innerHTML = s2;
yval.innerHTML = s3;


o = ratio(s1,s2,s3);
if (s1 == s2 && s1 == s3 && s2 == s3 && s1 > 0) { //to fix bug
	fill(0);
} else {
fill (cmy(o[0],o[1],o[2])); }
rect(0,0,width,height-60);
t = s1+":"+s2+":"+s3;
fill(0);
textSize(32);
console.log(o);
text ("Ratio " + t, 200,310,200,100);
}