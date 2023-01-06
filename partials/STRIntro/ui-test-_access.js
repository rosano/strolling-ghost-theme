const kDefaultRoutePath = '/';

Object.entries({
	STRIntro: '.STRIntro',
	STRIntroBlurb: '.STRIntroBlurb',
	STRIntroPlatforms: '.STRIntroPlatforms',
	STRIntroPlatformsSpotify: '.STRIntroPlatformsSpotify',
	STRIntroPlatformsYouTube: '.STRIntroPlatformsYouTube',
	STRIntroPlatformsInstagram: '.STRIntroPlatformsInstagram',
	STRIntroPlatformsPocketCasts: '.STRIntroPlatformsPocketCasts',
	STRIntroPlatformsApplePodcasts: '.STRIntroPlatformsApplePodcasts',
	STRIntroPlatformsMore: '.STRIntroPlatformsMore',
	STRIntroPlatformsExtra: '.STRIntroPlatformsExtra',
	STRIntroPlatformsExtraFacebook: '.STRIntroPlatformsExtraFacebook',
	STRIntroPlatformsExtraTelegram: '.STRIntroPlatformsExtraTelegram',
	STRIntroPlatformsExtraTwitter: '.STRIntroPlatformsExtraTwitter',
	STRIntroPlatformsExtraTikTok: '.STRIntroPlatformsExtraTikTok',
	STRIntroPlatformsExtraMastodon: '.STRIntroPlatformsExtraMastodon',
	STRIntroPlatformsExtraFeed: '.STRIntroPlatformsExtraFeed',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRIntro_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STRIntro', function() {
		browser.assert.elements(STRIntro, 1);
	});
	
	it('shows STRIntroBlurb', function() {
		browser.assert.elements(STRIntroBlurb, 1);
	});

	it('shows STRIntroPlatforms', function () {
		browser.assert.elements(STRIntroPlatforms, 1);
	});
	
	it('shows STRIntroPlatformsSpotify', function() {
		browser.assert.elements(STRIntroPlatformsSpotify, 1);
	});
	
	it('shows STRIntroPlatformsYouTube', function() {
		browser.assert.elements(STRIntroPlatformsYouTube, 1);
	});
	
	it('shows STRIntroPlatformsInstagram', function () {
		browser.assert.elements(STRIntroPlatformsInstagram, 1);
	});
	
	it('shows STRIntroPlatformsPocketCasts', function() {
		browser.assert.elements(STRIntroPlatformsPocketCasts, 1);
	});
	
	it('shows STRIntroPlatformsApplePodcasts', function() {
		browser.assert.elements(STRIntroPlatformsApplePodcasts, 1);
	});
	
	it('shows STRIntroPlatformsMore', function() {
		browser.assert.elements(STRIntroPlatformsMore, 1);
	});

	it('shows STRIntroPlatformsExtra', function () {
		browser.assert.elements(STRIntroPlatformsExtra, 1);
	});

	it('shows STRIntroPlatformsExtraFeed', function() {
		browser.assert.elements(STRIntroPlatformsExtraFeed, 1);
	});
	
	it('shows STRIntroPlatformsExtraFacebook', function () {
		browser.assert.elements(STRIntroPlatformsExtraFacebook, 1);
	});
	
	it('shows STRIntroPlatformsExtraTelegram', function () {
		browser.assert.elements(STRIntroPlatformsExtraTelegram, 1);
	});
	
	it('shows STRIntroPlatformsExtraTwitter', function () {
		browser.assert.elements(STRIntroPlatformsExtraTwitter, 1);
	});
	
	it('shows STRIntroPlatformsExtraTikTok', function () {
		browser.assert.elements(STRIntroPlatformsExtraTikTok, 1);
	});
	
	it('shows STRIntroPlatformsExtraMastodon', function () {
		browser.assert.elements(STRIntroPlatformsExtraMastodon, 1);
	});
	
	
});
