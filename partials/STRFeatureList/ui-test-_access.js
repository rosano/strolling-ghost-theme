const kDefaultRoutePath = '/';

Object.entries({
	STRFeatureList: '.STRFeatureList',
	STRFeatureListHeading: '.STRFeatureListHeading',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRFeatureListItem_Access', function () {

	const postCount = 2;

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});

	it('shows STRFeatureList', function () {
		browser.assert.elements(STRFeatureList, 1);
	});

	it('shows STRFeatureListHeading', function () {
		browser.assert.elements(STRFeatureListHeading, 1);
	});
	
	it('shows STRPreview', function() {
		browser.assert.elements('.STRPreview', postCount);
	});

	it('shows STRPagination', function () {
		browser.assert.elements('.STRPagination', 1);
	});
	
});
