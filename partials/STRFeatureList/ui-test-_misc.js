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
			browser.assert.attribute(STRFeatureListItemTitle_Example, 'href', '/0002/');
		});

		it('sets text', function () {
			browser.assert.text(STRFeatureListItemTitle_Example, 'STRMembersEpisodeTitleText');
		});
	
	});

	describe('STRFeatureListItemEmbed', function test_STRFeatureListItemEmbed () {

		it('sets src', function () {
			browser.assert.attribute(STRFeatureListItemEmbed_Example, 'src', 'https://go.rosano.ca/strolling-0002-video');
		});
	
	});

	describe('STRFeatureListItemTag', function test_STRFeatureListItemTag () {

		it('classes OLSKCommonCard', function () {
			browser.assert.hasClass(STRFeatureListItemTag_Example, 'OLSKCommonCard');
		});

	});

	describe('STRFeatureListItemTagImage', function test_STRFeatureListItemTagImage () {

		it('sets aria-hidden', function () {
			browser.assert.attribute(STRFeatureListItemTagImage, 'aria-hidden', 'true');
		});

		it('sets src', function () {
			browser.assert.attribute(STRFeatureListItemTagImage, 'src', /\/content\/images.*\/STRTagImage/);
		});

	});

	describe('STRFeatureListItemTagLink', function test_STRFeatureListItemTagLink () {

		it('sets href', function () {
			browser.assert.attribute(STRFeatureListItemTagLink_Example, 'href', /\/tag\/STRTag/i);
		});

		it('sets text', function () {
			browser.assert.text(STRFeatureListItemTagLink_Example, 'More from STRTag');
		});

	});

});
