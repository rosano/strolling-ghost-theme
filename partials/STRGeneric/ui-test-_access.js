const kDefaultRoutePath = '/strgeneric/';

Object.entries({
	STRGeneric: '.STRGeneric',
	STRGenericTitle: '.STRGenericTitle',
	STRGenericContent: '.STRGenericContent',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRGeneric_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STRGeneric', function() {
		browser.assert.elements(STRGeneric, 1);
	});
	
	it('shows STRGenericTitle', function() {
		browser.assert.elements(STRGenericTitle, 1);
	});
	
	it('shows STRGenericContent', function() {
		browser.assert.elements(STRGenericContent, 1);
	});
	
});
