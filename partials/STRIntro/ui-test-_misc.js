const kDefaultRoutePath = '/';

describe('STRIntro_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRIntro', function test_STRIntro () {

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

	describe('STRIntroPlatformsYouTube', function test_STRIntroPlatformsYouTube () {

		it('sets href', function () {
			browser.assert.attribute(STRIntroPlatformsYouTube, 'href', '/youtube');
		});

		it('sets text', function () {
			browser.assert.text(STRIntroPlatformsYouTube, 'YouTube');
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

	describe('STRIntroPlatformsMore', function test_STRIntroPlatformsMore () {

		it('sets text', function () {
			browser.assert.text(STRIntroPlatformsMore, 'More');
		});

		context('click', function () {
			
			before(function () {
				return browser.click(STRIntroPlatformsMore);
			});

			it('classes STRIntroPlatformsShowExtra', function () {
				browser.assert.hasClass(STRIntroPlatforms, 'STRIntroPlatformsShowExtra');
			});
		
		});
	
	});

	describe('STRIntroPlatformsExtraInstagram', function test_STRIntroPlatformsExtraInstagram () {

		it('sets href', function () {
			browser.assert.attribute(STRIntroPlatformsExtraInstagram, 'href', '/instagram');
		});

		it('sets text', function () {
			browser.assert.text(STRIntroPlatformsExtraInstagram, 'Instagram');
		});
	
	});
	
	describe('STRIntroPlatformsExtraFacebook', function test_STRIntroPlatformsExtraFacebook () {

		it('sets href', function () {
			browser.assert.attribute(STRIntroPlatformsExtraFacebook, 'href', '/facebook');
		});

		it('sets text', function () {
			browser.assert.text(STRIntroPlatformsExtraFacebook, 'Facebook');
		});
	
	});
	
	describe('STRIntroPlatformsExtraTwitter', function test_STRIntroPlatformsExtraTwitter () {

		it('sets href', function () {
			browser.assert.attribute(STRIntroPlatformsExtraTwitter, 'href', 'https://twitter.com/rosano');
		});

		it('sets text', function () {
			browser.assert.text(STRIntroPlatformsExtraTwitter, 'Twitter');
		});
	
	});
	
	describe('STRIntroPlatformsExtraTikTok', function test_STRIntroPlatformsExtraTikTok () {

		it('sets href', function () {
			browser.assert.attribute(STRIntroPlatformsExtraTikTok, 'href', '/tiktok');
		});

		it('sets text', function () {
			browser.assert.text(STRIntroPlatformsExtraTikTok, 'TikTok');
		});
	
	});
	
	describe('STRIntroPlatformsExtraMastodon', function test_STRIntroPlatformsExtraMastodon () {

		it('sets href', function () {
			browser.assert.attribute(STRIntroPlatformsExtraMastodon, 'href', 'https://merveilles.town/@rosano');
		});

		it('sets text', function () {
			browser.assert.text(STRIntroPlatformsExtraMastodon, 'Mastodon');
		});
	
	});
	

});
