const kDefaultRoutePath = '/guests/';

describe('STRGuest_Misc', function () {

	before(function () {
		return browser.OLSKVisitPath(kDefaultRoutePath);
	});

	describe('STRGuestHeading', function test_STRGuestHeading () {

		it('sets text', function () {
			browser.assert.text(STRGuestHeading, 'Guests');
		});
	
	});

	describe('STRGuestLink', function test_STRGuestLink () {

		it('sets aria-text', function () {
			browser.assert.attribute(STRGuestLink_Example, 'aria-text', 'STRTag');
		});
	
		it('sets style', function () {
			browser.assert.attribute(STRGuestLink_Example, 'style', /\/content\/images.*\/STRTagImage/);
		});

		it('sets href', function () {
			browser.assert.attribute(STRGuestLink_Example, 'href', '/tag/strtag/');
		});

	});

	describe('STRGuestLinkName', function test_STRGuestLinkName () {

		it('sets text', function () {
			browser.assert.text(STRGuestLink, 'STRTag');
		});
	
	});

});
