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

});
