const kDefaultRoutePath = '/tag/strtag/';

Object.entries({
	STRIndex: '.STRIndex',
	STRIndexHeading: '.STRIndexHeading',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRIndex_Access', function () {

	const postCount = 2;

	before(function() {
		return browser.OLSKVisitPath(kDefaultRoutePath);
	});
	
	it('shows STRIndex', function() {
		browser.assert.elements(STRIndex, 1);
	});
	
	it('shows STRIndexHeading', function() {
		browser.assert.elements(STRIndexHeading, 1);
	});
	
	it('shows STRPreview', function() {
		browser.assert.elements('.STRPreview', postCount);
	});
	
});
