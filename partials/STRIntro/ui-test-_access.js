const kDefaultRoutePath = '/';

Object.entries({
	STRIntro: '.STRIntro',
	STRIntroBlurb: '.STRIntroBlurb',
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
	
	it('shows STRIntroFeed', function() {
		browser.assert.elements(STRIntroFeed, 1);
	});
	
});
