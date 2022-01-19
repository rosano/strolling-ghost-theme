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

	describe('STRIntroPlatformsPocketCasts', function test_STRIntroPlatformsPocketCasts () {

		it('sets href', function () {
			browser.assert.attribute(STRIntroPlatformsPocketCasts, 'href', '/pcast');
		});

		it('sets text', function () {
			browser.assert.text(STRIntroPlatformsPocketCasts, 'Pocket Casts');
		});
	
	});

	describe('STRIntroPlatformsApplePodcasts', function test_STRIntroPlatformsApplePodcasts () {

		it('sets href', function () {
			browser.assert.attribute(STRIntroPlatformsApplePodcasts, 'href', '/apple');
		});

		it('sets text', function () {
			browser.assert.text(STRIntroPlatformsApplePodcasts, 'Apple Podcasts');
		});
	
	});

	describe('STRIntroPlatformsSpotify', function test_STRIntroPlatformsSpotify () {

		it('sets href', function () {
			browser.assert.attribute(STRIntroPlatformsSpotify, 'href', '/spotify');
		});

		it('sets text', function () {
			browser.assert.text(STRIntroPlatformsSpotify, 'Spotify');
		});
	
	});

	describe('STRIntroPlatformsFeed', function test_STRIntroPlatformsFeed () {

		it('sets href', function () {
			browser.assert.attribute(STRIntroPlatformsFeed, 'href', '/podcast.rss');
		});

		it('sets text', function () {
			browser.assert.text(STRIntroPlatformsFeed, 'RSS Feed');
		});
	
	});

});
