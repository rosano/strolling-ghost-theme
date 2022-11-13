const kDefaultRoutePath = '/tag/strtag/';

Object.entries({
	STRTagPage: '.STRTagPage',
	STRTagPageHeading: '.STRTagPageHeading',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRTagPage_Access', function () {

	const postCount = 2;

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STRTagPage', function() {
		browser.assert.elements(STRTagPage, 1);
	});
	
	it('shows STRTagPageHeading', function() {
		browser.assert.elements(STRTagPageHeading, 1);
	});
	
	it('shows STRPreview', function() {
		browser.assert.elements('.STRPreview', postCount);
	});
	
});
