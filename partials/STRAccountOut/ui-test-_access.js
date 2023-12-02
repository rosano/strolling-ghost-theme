const kDefaultRoutePath = '/';

Object.entries({
	STRAccountOut: '.STRAccountOut',
	STRAccountOutBlurb: '.STRAccountOutBlurb',
	STRAccountOutLink: '.STRAccountOutLink',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRAccountOut_Access', function () {

	before(function() {
		return browser.OLSKVisitPath(kDefaultRoutePath);
	});
	
	it('shows STRAccountOut', function() {
		browser.assert.elements(STRAccountOut, 1);
	});

	it('shows STRAccountOutBlurb', function () {
		browser.assert.elements(STRAccountOutBlurb, 1);
	});
	
	it('shows STRAccountOutLink', function() {
		browser.assert.elements(STRAccountOutLink, 1);
	});
	
});
