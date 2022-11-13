const kDefaultRoutePath = '/strcontent';

Object.entries({
	STRRelated: '.STRRelated',
	STRRelatedHeading: '.STRRelatedHeading',
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
	
	it('shows STRPreview', function() {
		browser.assert.elements('.STRPreview', postCount);
	});

});
