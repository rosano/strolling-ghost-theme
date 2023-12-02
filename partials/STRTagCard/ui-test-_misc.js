const kDefaultRoutePath = '/0000/';

describe('STRTagCard_Misc', function () {

	before(function () {
		return browser.OLSKVisitPath(kDefaultRoutePath);
	});

	describe('STRTagCard', function test_STRTagCard () {

		it('classes OLSKCommonCard', function () {
			browser.assert.hasClass(STRTagCard, 'OLSKCommonCard');
		});

	});

	describe('STRTagCardImage', function test_STRTagCardImage () {

		it('sets aria-hidden', function () {
			browser.assert.attribute(STRTagCardImage, 'aria-hidden', 'true');
		});

		it('sets src', function () {
			browser.assert.attribute(STRTagCardImage, 'src', /\/content\/images.*\/STRTagImage/);
		});

	});

	describe('STRTagCardLink', function test_STRTagCardLink () {

		it('sets href', function () {
			browser.assert.attribute(STRTagCardLink, 'href', /\/tag\/STRTag/i);
		});

		it('sets text', function () {
			browser.assert.text(STRTagCardLink, 'More from STRTag');
		});

	});

});
