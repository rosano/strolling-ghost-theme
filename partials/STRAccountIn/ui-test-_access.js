const kDefaultRoutePath = '/straccountin/';

Object.entries({
	STRAccountIn: '.STRAccountIn',
	STRAccountInBlurb: '.STRAccountInBlurb',
	STRAccountInLink: '.STRAccountInLink',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRAccountIn_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STRAccountIn', function() {
		browser.assert.elements(STRAccountIn, 1);
	});

	it('shows STRAccountInBlurb', function () {
		browser.assert.elements(STRAccountInBlurb, 1);
	});
	
	it('shows STRAccountInLink', function() {
		browser.assert.elements(STRAccountInLink, 1);
	});
	
});
