const kDefaultRoutePath = '/straccountin/';

Object.entries({
	STRAccountIn: '.STRAccountIn',
	STRAccountInBlurb: '.STRAccountInBlurb',
	STRAccountDetails: '.STRAccountDetails',
	STRAccountDetailsLink: '.STRAccountDetailsLink',
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

	it('shows STRAccountDetails', function () {
		browser.assert.elements(STRAccountDetails, 1);
	});
	
	it('shows STRAccountDetailsLink', function() {
		browser.assert.elements(STRAccountDetailsLink, 1);
	});
	
});
