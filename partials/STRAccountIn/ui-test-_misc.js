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
			browser.assert.text(STRAccountInBlurb, 'Find extended versions on episode pages under "Members Corner".');
		});

	});

	describe('STRAccountInLink', function test_STRAccountInLink () {

		it('classes OLSKDecorTappable', function () {
			browser.assert.hasClass(STRAccountInLink, 'OLSKDecorTappable');
		});

		it('sets href', function () {
			browser.assert.attribute(STRAccountInLink, 'href', '#/portal');
		});

		it('sets text', function () {
			browser.assert.text(STRAccountInLink, 'Settings');
		});

	});

});
