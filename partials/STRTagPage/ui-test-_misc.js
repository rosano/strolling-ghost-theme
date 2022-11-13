const kDefaultRoutePath = '/tag/strtag/';

describe('STRTagPage_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRTagPageHeading', function test_STRTagPageHeading () {

		it('sets text', function () {
			browser.assert.text(STRTagPageHeading, 'STRTag');
		});
	
	});

});
