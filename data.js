var data = [
	{
		title: 'Anchoring',
		definition: 'Anchoring or focalism is a cognitive bias that describes the common human tendency to rely too heavily on the first piece of information offered (the "anchor") when making decisions.',
		example: 'The initial price offered for a used car sets the standard for the rest of the negotiations, so that prices lower than the initial price seem more reasonable even if they are still higher than what the car is really worth.',
		source: 'https://en.wikipedia.org/wiki/Anchoring'
	},
	{
		title: 'Bandwagon effect',
		definition: 'the tendency to do (or believe) things because many other people do (or believe) the same.',
		example: 'Ever',
		source: 'https://en.wikipedia.org/wiki/Bandwagon_effect'
	}
];

function random(elements) {
	return elements[Math.floor(Math.random()*elements.length)]; 
}