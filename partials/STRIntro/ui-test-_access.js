const kDefaultRoutePath = '/';

Object.entries({
	STRIntro: '.STRIntro',
	STRIntroBlurb: '.STRIntroBlurb',
	STRIntroPlatforms: '.STRIntroPlatforms',
	STRIntroPlatformsPocketCasts: '.STRIntroPlatformsPocketCasts',
	STRIntroPlatformsApplePodcasts: '.STRIntroPlatformsApplePodcasts',
	STRIntroPlatformsSpotify: '.STRIntroPlatformsSpotify',
	STRIntroPlatformsFeed: '.STRIntroPlatformsFeed',
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
	
	it('shows STRIntroPlatformsPocketCasts', function() {
		browser.assert.elements(STRIntroPlatformsPocketCasts, 1);
	});
	
	it('shows STRIntroPlatformsApplePodcasts', function() {
		browser.assert.elements(STRIntroPlatformsApplePodcasts, 1);
	});
	
	it('shows STRIntroPlatformsSpotify', function() {
		browser.assert.elements(STRIntroPlatformsSpotify, 1);
	});
	
	it('shows STRIntroPlatformsFeed', function() {
		browser.assert.elements(STRIntroPlatformsFeed, 1);
	});
	
});
