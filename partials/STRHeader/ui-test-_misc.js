const kDefaultRoutePath = '/';

describe('STRHeader_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRHeaderLink', function test_STRHeaderLink () {

		it('sets href', function () {
			browser.assert.attribute(STRHeaderLink, 'href', '/');
		});
	
	});

	describe('STRHeaderLinkImage', function test_STRHeaderLinkImage () {

		it('sets src', function () {
			browser.assert.attribute(STRHeaderLinkImage, 'src', 'https://static.rosano.ca/strolling/identity.svg');
		});
	
	});

	describe('STRHeaderLinkTitle', function test_STRHeaderLinkTitle () {

		it('sets text', function () {
			browser.assert.text(STRHeaderLinkTitle, 'Strolling');
		});
	
	});

});
