const kDefaultRoutePath = '/';

Object.entries({
	STRExplore: '.STRExplore',
	STRExploreHeading: '.STRExploreHeading',
	STRExploreAll: '.STRExploreAll',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRExplore_Access', function () {

	const postCount = 2;

	before(function() {
		return browser.visit(kDefaultRoutePath);
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
	
});
