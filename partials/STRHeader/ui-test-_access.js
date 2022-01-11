const kDefaultRoutePath = '/';

Object.entries({
	STRHeader: '.STRHeader',
	STRHeaderLink: '.STRHeaderLink',
	STRHeaderLinkImage: '.STRHeaderLinkImage',
	STRHeaderLinkTitle: '.STRHeaderLinkTitle',
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
	
	it('shows STRHeaderLink', function() {
		browser.assert.elements(STRHeaderLink, 1);
	});
	
	it('shows STRHeaderLinkImage', function() {
		browser.assert.elements(STRHeaderLinkImage, 1);
	});
	
	it('shows STRHeaderLinkTitle', function() {
		browser.assert.elements(STRHeaderLinkTitle, 1);
	});

});
