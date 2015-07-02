;(function() {
	document.addEventListener('DOMContentLoaded', function() {
		var yes = document.getElementById('yes');
		var no = document.getElementById('no');
		document.body.style.backgroundColor = randomColor();
		yes.style.backgroundColor = randomColor();
		no.style.backgroundColor = randomColor();
		yes.addEventListener('click', gtfo);
		no.addEventListener('click', induceHeadache);
	});
})();

function gtfo() {
	document.getElementById('epillepsy').className += ' hidden';
	document.getElementById('gtfo').className = '';
}

function induceHeadache() {
	document.getElementById('epillepsy').className += ' hidden';
	var headache = document.getElementById('headache');
	headache.className = '';
	setInterval(function() {
		headache.style.backgroundColor = randomColor();
	}, 100);
}

function randomColor() {
	var color = 'rgb('+(Math.floor(Math.random()*255))+','+(Math.floor(Math.random()*255))+','+(Math.floor(Math.random()*255))+')';
	console.log('color: '+color);
	return color;
}