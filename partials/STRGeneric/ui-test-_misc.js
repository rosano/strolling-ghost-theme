const kDefaultRoutePath = '/strgeneric/';

describe('STRGeneric_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRGenericTitle', function test_STRGenericTitle () {

		it('sets href', function () {
			browser.assert.attribute(STRGenericTitle, 'href', '/strgeneric/');
		});

		it('sets text', function () {
			browser.assert.text(STRGenericTitle, 'STRGenericTitleText');
		});
	
	});

	describe('STRGenericContent', function test_STRGenericContent () {

		it('sets text', function () {
			browser.assert.text(STRGenericContent, 'STRGenericContentText');
		});
	
	});

});
