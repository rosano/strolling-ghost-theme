const kDefaultRoutePath = '/';

Object.entries({
	STRRandom: '.STRRandom',
	STRRandomHeading: '.STRRandomHeading',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRRandom_Access', function () {

	before(function() {
		return browser.OLSKVisitPath(kDefaultRoutePath);
	});
	
	it('shows STRRandom', function() {
		browser.assert.elements(STRRandom, 1);
	});
	
	it('shows STRRandomHeading', function() {
		browser.assert.elements(STRRandomHeading, 1);
	});

	it.skip('shows OLSKTube', function () {
		browser.assert.elements(OLSKTube, 1);
	});
	
});
