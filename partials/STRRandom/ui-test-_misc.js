const kDefaultRoutePath = '/';

describe('STRRandom_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRRandomHeading', function test_STRRandomHeading () {

		it('sets text', function () {
			browser.assert.text(STRRandomHeading, 'Watch snippets at random 📺');
		});
	
	});

	describe('STRRandomEmbed', function test_STRRandomEmbed () {

		it('sets src', function () {
			browser.assert.attribute(STRRandomEmbed, 'src', 'https://www.youtube-nocookie.com/embed/videoseries?rel=0&enablejsapi=1&list=PL6v1zwoKiosMCiOTjwHG63nwuSAP_clUI');
		});

	});

});
