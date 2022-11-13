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

});
