const kDefaultRoutePath = '/';

Object.entries({
	STRAbove: '.STRAbove',
	STRAboveCrown: '.STRAboveCrown',
	STRAboveCrownImage: '.STRAboveCrownImage',
	STRAboveCrownTitle: '.STRAboveCrownTitle',
	STRAboveSearch: '.STRAboveSearch',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRAbove_Access', function () {

	before(function() {
		return browser.OLSKVisitPath(kDefaultRoutePath);
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

	it('shows STRAboveSearch', function () {
		browser.assert.elements(STRAboveSearch, 1);
	});

});
