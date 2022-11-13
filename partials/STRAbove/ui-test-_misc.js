const kDefaultRoutePath = '/';

describe('STRAbove_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRAboveCrown', function test_STRAboveCrown () {

		it('sets href', function () {
			browser.assert.attribute(STRAboveCrown, 'href', '/');
		});

		it('classes OLSKCommonCard', function () {
			browser.assert.hasClass(STRAboveCrown, 'OLSKCommonCard');
		});

		it('classes OLSKCommonCrownCard', function () {
			browser.assert.hasClass(STRAboveCrown, 'OLSKCommonCrownCard');
		});
	
	});

	describe('STRAboveCrownImage', function test_STRAboveCrownImage () {

		it('sets src', function () {
			browser.assert.attribute(STRAboveCrownImage, 'src', 'https://static.rosano.ca/strolling/identity.svg');
		});
	
	});

	describe('STRAboveCrownTitle', function test_STRAboveCrownTitle () {

		it('sets text', function () {
			browser.assert.text(STRAboveCrownTitle, 'STRTitleText');
		});
	
	});

	describe('STRAboveSearch', function test_STRAboveSearch () {

		it('sets attribute', function () {
			browser.assert.attribute(STRAboveSearch, 'data-ghost-search', '');
		});

		it('sets text', function () {
			browser.assert.text(STRAboveSearch, 'Search episodes');
		});
	
	});

});
