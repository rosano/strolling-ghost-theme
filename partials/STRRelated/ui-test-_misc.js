const kDefaultRoutePath = '/strcontent';

describe('STRRelated_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRRelatedHeading', function test_STRRelatedHeading () {

		it('sets text', function () {
			browser.assert.text(STRRelatedHeading, 'Related');
		});
	
	});

});
