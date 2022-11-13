const kDefaultRoutePath = '/0000/';

Object.entries({
	STRGuest: '.STRGuest',
	STRGuestImage: '.STRGuestImage',
	STRGuestLink: '.STRGuestLink',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRGuest_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STRGuest', function () {
		browser.assert.elements(STRGuest, 1);
	});

	it('shows STRGuestImage', function () {
		browser.assert.elements(STRGuestImage, 1);
	});
	
	it('shows STRGuestLink', function () {
		browser.assert.elements(STRGuestLink, 1);
	});

});
