const kDefaultRoutePath = '/';

describe('STRRandom_Misc', function () {

	before(function () {
		return browser.OLSKVisitPath(kDefaultRoutePath);
	});

	describe('STRRandomHeading', function test_STRRandomHeading () {

		it('sets text', function () {
			browser.assert.text(STRRandomHeading, 'have a quick taste 📺👁👂🏼');
		});
	
	});

});
