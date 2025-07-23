const kDefaultRoutePath = '/guests/';

Object.entries({
	STRGuest: '.STRGuest',
	STRGuestHeading: '.STRGuestHeading',
	STRGuestLink: '.STRGuestLink',
	STRGuestLink_Example: '.STRGuestLink:nth-of-type(1)',
	STRGuestLinkName: '.STRGuestLinkName',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRGuest_Access', function () {

	const postCount = 1;

	before(function() {
		return browser.OLSKVisitPath(kDefaultRoutePath);
	});
	
	it('shows STRGuest', function() {
		browser.assert.elements(STRGuest, postCount);
	});
	
	it('shows STRGuestHeading', function () {
		browser.assert.elements(STRGuestHeading, 1);
	});

	it('shows STRGuestLink', function () {
		browser.assert.elements(STRGuestLink, postCount);
	});

	it('shows STRGuestLinkName', function () {
		browser.assert.elements(STRGuestLinkName, 1);
	});

	it('hides moos', function () {
		browser.assert.elements('.STRGuestLink[href="/tag/moos/"]', 0);
	});

	it('hides capoeira', function () {
		browser.assert.elements('.STRGuestLink[href="/tag/capoeira/"]', 0);
	});

	it('hides money', function () {
		browser.assert.elements('.STRGuestLink[href="/tag/money/"]', 0);
	});

	it('hides meta', function () {
		browser.assert.elements('.STRGuestLink[href="/tag/meta/"]', 0);
	});
	
});
