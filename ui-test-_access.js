const kDefaultRoute = '/';

Object.entries({
	STRVitrine: '.STRVitrine',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('STRVitrine_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoute);
	});
	
	it('shows STRVitrine', function() {
		browser.assert.elements(STRVitrine, 1);
	});

});
