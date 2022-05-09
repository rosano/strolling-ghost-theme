const kDefaultRoutePath = '/strcontent';

Object.entries({
	STRRelated: '.STRRelated',
	STRRelatedHeading: '.STRRelatedHeading',
	STRRelatedListItem: '.STRRelatedListItem',
	STRRelatedListItemLink: '.STRRelatedListItemLink',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRRelated_Access', function () {

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
		browser.assert.elements(STRRelatedListItem, 1);
	});

	it('shows STRRelatedListItemLink', function () {
		browser.assert.elements(STRRelatedListItemLink, 1);
	});

});
