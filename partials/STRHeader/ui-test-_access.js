const kDefaultRoutePath = '/';

Object.entries({
	STRHeader: '.STRHeader',
	STRHeaderCrown: '.STRHeaderCrown',
	STRHeaderCrownImage: '.STRHeaderCrownImage',
	STRHeaderCrownTitle: '.STRHeaderCrownTitle',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('STRHeader_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STRHeader', function() {
		browser.assert.elements(STRHeader, 1);
	});
	
	it('shows STRHeaderCrown', function() {
		browser.assert.elements(STRHeaderCrown, 1);
	});
	
	it('shows STRHeaderCrownImage', function() {
		browser.assert.elements(STRHeaderCrownImage, 1);
	});
	
	it('shows STRHeaderCrownTitle', function() {
		browser.assert.elements(STRHeaderCrownTitle, 1);
	});

});
