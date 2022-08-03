const kDefaultRoutePath = '/';

Object.entries({
	STRFeatureList: '.STRFeatureList',
	STRFeatureListHeading: '.STRFeatureListHeading',
	STRFeatureListItem: '.STRFeatureListItem',
	STRFeatureListItemTitle: '.STRFeatureListItemTitle',
	STRFeatureListItemEmbed: '.STRFeatureListItemEmbed',
	STRFeatureListItemTag: '.STRFeatureListItemTag',
	STRFeatureListItemTagImage: '.STRFeatureListItemTagImage',
	STRFeatureListItemTagLink: '.STRFeatureListItemTagLink',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRFeatureListItem_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});

	it('shows STRFeatureList', function () {
		browser.assert.elements(STRFeatureList, 1);
	});

	it('shows STRFeatureListHeading', function () {
		browser.assert.elements(STRFeatureListHeading, 1);
	});
	
	it('shows STRFeatureListItem', function() {
		browser.assert.elements(STRFeatureListItem, 1);
	});

	it('shows STRFeatureListItemTitle', function () {
		browser.assert.elements(STRFeatureListItemTitle, 1);
	});
	
	it('shows STRFeatureListItemEmbed', function() {
		browser.assert.elements(STRFeatureListItemEmbed, 1);
	});

	it('shows STRFeatureListItemTag', function () {
		browser.assert.elements(STRFeatureListItemTag, 1);
	});

	it('shows STRFeatureListItemTagImage', function () {
		browser.assert.elements(STRFeatureListItemTagImage, 1);
	});
	
	it('shows STRFeatureListItemTagLink', function () {
		browser.assert.elements(STRFeatureListItemTagLink, 1);
	});
	
	it('shows STRPagination', function () {
		browser.assert.elements('.STRPagination', 1);
	});
	
});
