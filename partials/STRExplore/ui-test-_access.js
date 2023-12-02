const kDefaultRoutePath = '/';

Object.entries({
	STRExplore: '.STRExplore',
	STRExploreHeading: '.STRExploreHeading',
	STRExploreAll: '.STRExploreAll',
	STRExploreSpotlight: '.STRExploreSpotlight',
	STRExploreGuests: '.STRExploreGuests',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRExplore_Access', function () {

	const postCount = 2;

	before(function() {
		return browser.OLSKVisitPath(kDefaultRoutePath);
	});

	it('shows STRExplore', function () {
		browser.assert.elements(STRExplore, 1);
	});

	it('shows STRExploreHeading', function () {
		browser.assert.elements(STRExploreHeading, 1);
	});

	it('shows STRExploreAll', function () {
		browser.assert.elements(STRExploreAll, 1);
	});

	it('shows STRExploreSpotlight', function () {
		browser.assert.elements(STRExploreSpotlight, 1);
	});

	it('shows STRExploreGuests', function () {
		browser.assert.elements(STRExploreGuests, 1);
	});
	
});
