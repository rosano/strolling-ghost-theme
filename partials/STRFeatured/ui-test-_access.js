const kDefaultRoutePath = '/';

Object.entries({
	STRFeatured: '.STRFeatured',
	STRFeaturedHeading: '.STRFeaturedHeading',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRFeatured_Access', function () {

	const postCount = 1;

	before(function() {
		return browser.OLSKVisitPath(kDefaultRoutePath);
	});

	it('shows STRFeatured', function () {
		browser.assert.elements(STRFeatured, 1);
	});

	it('shows STRFeaturedHeading', function () {
		browser.assert.elements(STRFeaturedHeading, 1);
	});
	
	it('shows STRPreview', function() {
		browser.assert.elements('.STRPreview', postCount);
	});

	it('shows STRPagination', function () {
		browser.assert.elements('.STRPagination', 1);
	});
	
});
