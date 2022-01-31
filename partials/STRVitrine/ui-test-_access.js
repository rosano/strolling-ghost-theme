const kDefaultRoutePath = '/';

Object.entries({
	STRVitrine: '.STRVitrine',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRVitrine_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STRVitrine', function() {
		browser.assert.elements(STRVitrine, 1);
	});
	
	it('shows STRIntro', function() {
		browser.assert.elements('.STRIntro', 1);
	});

	it('shows STRAccountOut', function () {
		browser.assert.elements('.STRAccountOut', 1);
	});

	it('shows STRPreview', function () {
		browser.assert.elements('.STRPreview', 1);
	});

});
