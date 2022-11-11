const kDefaultRoutePath = '/';

Object.entries({
	STRRandom: '.STRRandom',
	STRRandomHeading: '.STRRandomHeading',
	STRRandomEmbed: '.STRRandomEmbed',
	STRRandomButtonsPrevious: '.STRRandomButtonsPrevious',
	STRRandomButtonsNext: '.STRRandomButtonsNext',
	STRRandomBlurb: '.STRRandomBlurb',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRRandom_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STRRandom', function() {
		browser.assert.elements(STRRandom, 1);
	});
	
	it('shows STRRandomHeading', function() {
		browser.assert.elements(STRRandomHeading, 1);
	});
	
	it('shows STRRandomEmbed', function() {
		browser.assert.elements(STRRandomEmbed, 1);
	});

	it('shows STRRandomButtonsPrevious', function () {
		browser.assert.elements(STRRandomButtonsPrevious, 1);
	});

	it('shows STRRandomButtonsNext', function () {
		browser.assert.elements(STRRandomButtonsNext, 1);
	});
	
	it('shows STRRandomBlurb', function() {
		browser.assert.elements(STRRandomBlurb, 1);
	});

});
