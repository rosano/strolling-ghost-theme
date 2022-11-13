const kDefaultRoutePath = '/';

describe('STRRandom_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRRandomHeading', function test_STRRandomHeading () {

		it('sets text', function () {
			browser.assert.text(STRRandomHeading, 'have a quick taste 📺👁👂🏼');
		});
	
	});

	describe('STRRandomEmbed', function test_STRRandomEmbed () {

		it('sets src', function () {
			browser.assert.attribute(STRRandomEmbed, 'src', 'https://www.youtube-nocookie.com/embed/videoseries?rel=0&enablejsapi=1&list=PL6v1zwoKiosMCiOTjwHG63nwuSAP_clUI');
		});

	});

	describe('STRRandomButtonsPrevious', function test_STRRandomButtonsPrevious () {

		it('classes OLSKDecorPressCall', function () {
			browser.assert.hasClass(STRRandomButtonsPrevious, 'OLSKDecorPressCall');
		});

		it('sets text', function () {
			browser.assert.text(STRRandomButtonsPrevious, 'previous');
		});
	
	});

	describe('STRRandomButtonsNext', function test_STRRandomButtonsNext () {

		it('classes OLSKDecorPressCall', function () {
			browser.assert.hasClass(STRRandomButtonsNext, 'OLSKDecorPressCall');
		});

		it('sets text', function () {
			browser.assert.text(STRRandomButtonsNext, 'new snippet');
		});
	
	});

	describe('STRRandomBlurb', function test_STRRandomBlurb () {

		it('sets text', function () {
			browser.assert.text(STRRandomBlurb, '(these snippets are selected at random)');
		});
	
	});

});
