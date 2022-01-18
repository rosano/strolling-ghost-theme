const kDefaultRoutePath = '/';

describe('STRIntro_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRIntro', function test_STRIntro () {

		it('classes OLSKLanding', function () {
			browser.assert.hasClass(STRIntro, 'OLSKLanding');
		});

		it('classes OLSKCommonCard', function () {
			browser.assert.hasClass(STRIntro, 'OLSKCommonCard');
		});
	
	});

	describe('STRIntroBlurb', function test_STRIntroBlurb () {

		it('sets text', function () {
			browser.assert.text(STRIntroBlurb, 'STRDescriptionText');
		});
	
	});

	describe('STRIntroFeed', function test_STRIntroFeed () {

		it('sets href', function () {
			browser.assert.attribute(STRIntroFeed, 'href', '/podcast.rss');
		});

		it('sets text', function () {
			browser.assert.text(STRIntroFeed, 'RSS Feed');
		});
	
	});

});
