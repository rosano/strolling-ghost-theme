const kDefaultRoutePath = '/0000/';

Object.entries({
	STRTagCard: '.STRTagCard',
	STRTagCardImage: '.STRTagCardImage',
	STRTagCardLink: '.STRTagCardLink',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRTagCard_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STRTagCard', function () {
		browser.assert.elements(STRTagCard, 1);
	});

	it('shows STRTagCardImage', function () {
		browser.assert.elements(STRTagCardImage, 1);
	});
	
	it('shows STRTagCardLink', function () {
		browser.assert.elements(STRTagCardLink, 1);
	});

});
