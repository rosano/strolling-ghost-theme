const kDefaultRoutePath = '/';

describe('STRAccountOut_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRAccountOut', function test_STRAccountOut () {

		it('classes OLSKDecorModule', function () {
			browser.assert.hasClass(STRAccountOut, 'OLSKDecorModule');
		});

	});

	describe('STRAccountOutBlurb', function test_STRAccountOutBlurb () {

		it('sets text', function () {
			browser.assert.text(STRAccountOutBlurb, 'Already a member?');
		});

	});

	describe('STRAccountOutLink', function test_STRAccountOutLink () {

		it('classes OLSKDecorTappable', function () {
			browser.assert.hasClass(STRAccountOutLink, 'OLSKDecorTappable');
		});

		it('sets data-portal', function () {
			browser.assert.attribute(STRAccountOutLink, 'data-portal', 'signin');
		});

		it('sets text', function () {
			browser.assert.text(STRAccountOutLink, 'Sign in to access extended episodes.');
		});

	});

});
