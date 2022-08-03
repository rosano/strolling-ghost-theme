const kDefaultRoutePath = '/';

describe('STRFeatureList_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRFeatureListHeading', function test_STRFeatureListHeading () {

		it('sets text', function () {
			browser.assert.text(STRFeatureListHeading, 'Featured content');
		});
	
	});

	describe('STRFeatureListItemTitle', function test_STRFeatureListItemTitle () {

		it('sets href', function () {
			browser.assert.attribute(STRFeatureListItemTitle, 'href', '/0000/');
		});

		it('sets text', function () {
			browser.assert.text(STRFeatureListItemTitle, 'STREpisodeTitleText');
		});
	
	});

	describe('STRFeatureListItemEmbed', function test_STRFeatureListItemEmbed () {

		it('sets src', function () {
			browser.assert.attribute(STRFeatureListItemEmbed, 'src', 'https://go.rosano.ca/strolling-0000-video');
		});
	
	});

	describe('STRFeatureListItemTag', function test_STRFeatureListItemTag () {

		it('classes OLSKCommonCard', function () {
			browser.assert.hasClass(STRFeatureListItemTag, 'OLSKCommonCard');
		});

	});

	describe('STRFeatureListItemTagImage', function test_STRFeatureListItemTagImage () {

		it('sets src', function () {
			browser.assert.attribute(STRFeatureListItemTagImage, 'src', /\/content\/images.*\/STRTagImage/);
		});

		it('sets aria-hidden', function () {
			browser.assert.attribute(STRFeatureListItemTagImage, 'aria-hidden', 'true');
		});

	});

	describe('STRFeatureListItemTagLink', function test_STRFeatureListItemTagLink () {

		it('sets href', function () {
			browser.assert.attribute(STRFeatureListItemTagLink, 'href', /\/tag\/STRTag/i);
		});

		it('sets text', function () {
			browser.assert.text(STRFeatureListItemTagLink, 'More from STRTag');
		});

	});

});
