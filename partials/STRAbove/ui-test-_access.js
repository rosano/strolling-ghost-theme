const kDefaultRoutePath = '/';

Object.entries({
	STRAbove: '.STRAbove',
	STRAboveCrown: '.STRAboveCrown',
	STRAboveCrownImage: '.STRAboveCrownImage',
	STRAboveCrownTitle: '.STRAboveCrownTitle',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRAbove_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STRAbove', function() {
		browser.assert.elements(STRAbove, 1);
	});
	
	it('shows STRAboveCrown', function() {
		browser.assert.elements(STRAboveCrown, 1);
	});
	
	it('shows STRAboveCrownImage', function() {
		browser.assert.elements(STRAboveCrownImage, 1);
	});
	
	it('shows STRAboveCrownTitle', function() {
		browser.assert.elements(STRAboveCrownTitle, 1);
	});

});
