const kDefaultRoutePath = '/';

Object.entries({
	STRVitrine: '.STRVitrine',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRVitrine_Access', function () {

	before(function() {
		return browser.OLSKVisitPath(kDefaultRoutePath);
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

	it('shows STRRandom', function () {
		browser.assert.elements('.STRRandom', 1);
	});

	it('shows STRExplore', function () {
		browser.assert.elements('.STRExplore', 1);
	});

	it('shows STRFeatured', function () {
		browser.assert.elements('.STRFeatured', 1);
	});

});
