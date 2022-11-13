const kDefaultRoutePath = '/0000/';

describe('STRGuest_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRGuest', function test_STRGuest () {

		it('classes OLSKCommonCard', function () {
			browser.assert.hasClass(STRGuest, 'OLSKCommonCard');
		});

	});

	describe('STRGuestImage', function test_STRGuestImage () {

		it('sets aria-hidden', function () {
			browser.assert.attribute(STRGuestImage, 'aria-hidden', 'true');
		});

		it('sets src', function () {
			browser.assert.attribute(STRGuestImage, 'src', /\/content\/images.*\/STRTagImage/);
		});

	});

	describe('STRGuestLink', function test_STRGuestLink () {

		it('sets href', function () {
			browser.assert.attribute(STRGuestLink, 'href', /\/tag\/STRTag/i);
		});

		it('sets text', function () {
			browser.assert.text(STRGuestLink, 'More from STRTag');
		});

	});

});
