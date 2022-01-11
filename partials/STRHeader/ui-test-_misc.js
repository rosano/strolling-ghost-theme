const kDefaultRoutePath = '/';

describe('STRHeader_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRHeaderCrown', function test_STRHeaderCrown () {

		it('sets href', function () {
			browser.assert.attribute(STRHeaderCrown, 'href', '/');
		});

		it('classes OLSKCommonCard', function () {
			browser.assert.hasClass(STRHeaderCrown, 'OLSKCommonCard');
		});

		it('classes OLSKCommonCrownCard', function () {
			browser.assert.hasClass(STRHeaderCrown, 'OLSKCommonCrownCard');
		});
	
	});

	describe('STRHeaderCrownImage', function test_STRHeaderCrownImage () {

		it('sets src', function () {
			browser.assert.attribute(STRHeaderCrownImage, 'src', 'https://static.rosano.ca/strolling/identity.svg');
		});
	
	});

	describe('STRHeaderCrownTitle', function test_STRHeaderCrownTitle () {

		it('sets text', function () {
			browser.assert.text(STRHeaderCrownTitle, 'Strolling');
		});
	
	});

});
