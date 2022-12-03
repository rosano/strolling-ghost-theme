const kDefaultRoutePath = '/straccountin/';

describe('STRAccountIn_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRAccountIn', function test_STRAccountIn () {

		it('classes STRAccountModule', function () {
			browser.assert.hasClass(STRAccountIn, 'STRAccountModule');
		});

		it('classes OLSKDecorModule', function () {
			browser.assert.hasClass(STRAccountIn, 'OLSKDecorModule');
		});

	});

	describe('STRAccountInBlurb', function test_STRAccountInBlurb () {

		it('sets text', function () {
			browser.assert.text(STRAccountInBlurb, 'Find extended versions by clicking on the episode you\'d like to play and scrolling down to "Members Corner".');
		});

	});

	describe('STRAccountDetailsLink', function test_STRAccountDetailsLink () {

		it('classes OLSKDecorTappable', function () {
			browser.assert.hasClass(STRAccountDetailsLink, 'OLSKDecorTappable');
		});

		it('sets href', function () {
			browser.assert.attribute(STRAccountDetailsLink, 'href', '#/portal');
		});

		it('sets text', function () {
			browser.assert.text(STRAccountDetailsLink, 'Your Profile Settings');
		});

	});

});
