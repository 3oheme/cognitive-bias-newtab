var list = [
	{
		title: 'Anchoring',
		definition: 'Anchoring or focalism is a cognitive bias that describes the common human tendency to rely too heavily on the first piece of information offered (the "anchor") when making decisions.',
		example: 'The initial price offered for a used car sets the standard for the rest of the negotiations, so that prices lower than the initial price seem more reasonable even if they are still higher than what the car is really worth.',
		source: 'https://en.wikipedia.org/wiki/Anchoring'
	}
];

function random(elements) {
	return elements[Math.floor(Math.random()*elements.length)]; 
}

var cognitiveBias = random(list);

document.title = cognitiveBias.title;
document.getElementById("title").textContent = cognitiveBias.title;
document.getElementById("definition").textContent = cognitiveBias.definition;
document.getElementById("example").textContent = cognitiveBias.example;
document.getElementById("source").textContent = cognitiveBias.source;
document.getElementById("source").href = cognitiveBias.source;