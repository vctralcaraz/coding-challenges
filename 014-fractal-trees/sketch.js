let angle
let slider
function setup() {
	createCanvas(400, 400);
	slider = createSlider(0, PI, PI / 4, 0.01)
}

function draw() {
	background(51)
	angle = slider.value()
	stroke(255)
	translate(200, height)
	branch(100)
}

function branch(len) {
	if(len > 1) {
		strokeWeight(len * .05)
		line(0, 0, 0, -len)
		translate(0, -len)
		push()
		rotate(angle * .5)
		branch(len * .67)
		pop()
		push()
		rotate(-angle)
		branch(len * .67)
		pop()
	}
	// line(0, 0, 0, -len * .67)
}