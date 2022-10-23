const kDefaultRoutePath = '/';

Object.entries({
	STRFeatureList: '.STRFeatureList',
	STRFeatureListHeading: '.STRFeatureListHeading',
	STRFeatureListItem: '.STRFeatureListItem',
	STRFeatureListItemTitle: '.STRFeatureListItemTitle',
	STRFeatureListItemTitle_Example: '.STRFeatureListItem:nth-of-type(1) .STRFeatureListItemTitle',
	STRFeatureListItemEmbed: '.STRFeatureListItemEmbed',
	STRFeatureListItemEmbed_Example: '.STRFeatureListItem:nth-of-type(1) .STRFeatureListItemEmbed',
	STRFeatureListItemTag: '.STRFeatureListItemTag',
	STRFeatureListItemTag_Example: '.STRFeatureListItem:nth-of-type(1) .STRFeatureListItemTag',
	STRFeatureListItemTagImage: '.STRFeatureListItemTagImage',
	STRFeatureListItemTagLink: '.STRFeatureListItemTagLink',
	STRFeatureListItemTagLink_Example: '.STRFeatureListItem:nth-of-type(1) .STRFeatureListItemTagLink',
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
	
	it('shows STRFeatureListItem', function() {
		browser.assert.elements(STRFeatureListItem, postCount);
	});

	it('shows STRFeatureListItemTitle', function () {
		browser.assert.elements(STRFeatureListItemTitle, postCount);
	});
	
	it('shows STRFeatureListItemEmbed', function() {
		browser.assert.elements(STRFeatureListItemEmbed, postCount);
	});

	it('shows STRFeatureListItemTag', function () {
		browser.assert.elements(STRFeatureListItemTag, postCount);
	});

	it('shows STRFeatureListItemTagImage', function () {
		browser.assert.elements(STRFeatureListItemTagImage, postCount);
	});
	
	it('shows STRFeatureListItemTagLink', function () {
		browser.assert.elements(STRFeatureListItemTagLink, postCount);
	});
	
	it('shows STRPagination', function () {
		browser.assert.elements('.STRPagination', 1);
	});
	
});
