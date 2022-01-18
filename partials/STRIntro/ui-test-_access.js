const kDefaultRoutePath = '/';

Object.entries({
	STRIntro: '.STRIntro',
	STRIntroBlurb: '.STRIntroBlurb',
	STRIntroPocketCasts: '.STRIntroPocketCasts',
	STRIntroSpotify: '.STRIntroSpotify',
	STRIntroFeed: '.STRIntroFeed',
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
	
	it('shows STRIntroPocketCasts', function() {
		browser.assert.elements(STRIntroPocketCasts, 1);
	});
	
	it('shows STRIntroSpotify', function() {
		browser.assert.elements(STRIntroSpotify, 1);
	});
	
	it('shows STRIntroFeed', function() {
		browser.assert.elements(STRIntroFeed, 1);
	});
	
});
