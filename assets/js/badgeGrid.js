function getRandomSize(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

var x = document.getElementsByClassName("badgeToDecorate");
// var bgColors = ['bg-primary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-dark'];
var bgColors = ['bg-info', 'bg-success', 'bg-primary', 'bg-danger', 'bg-warning', 'bg-dark'];
var sizes = [22, 26, 30];
var i;
for (i = 0; i < x.length; i++) {
	x[i].style.fontSize = '22px';
	x[i].className += ' bg-dark';
	// x[i].style.fontSize = sizes[getRandomSize(0, sizes.length-1)]+'px';
	// x[i].className += ' ' +bgColors[i%bgColors.length];
}
