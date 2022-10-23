const kDefaultRoutePath = '/strcontent';

Object.entries({
	STRRelated: '.STRRelated',
	STRRelatedHeading: '.STRRelatedHeading',
	STRRelatedListItem: '.STRRelatedListItem',
	STRRelatedListItemLink: '.STRRelatedListItemLink',
	STRRelatedListItemLink_Example: '.STRRelatedListItem:nth-of-type(1) .STRRelatedListItemLink',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRRelated_Access', function () {

	const postCount = 2;

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STRRelated', function() {
		browser.assert.elements(STRRelated, 1);
	});
	
	it('shows STRRelatedHeading', function() {
		browser.assert.elements(STRRelatedHeading, 1);
	});
	
	it('shows STRRelatedListItem', function() {
		browser.assert.elements(STRRelatedListItem, postCount);
	});

	it('shows STRRelatedListItemLink', function () {
		browser.assert.elements(STRRelatedListItemLink, postCount);
	});

});
