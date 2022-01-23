const kDefaultRoutePath = '/';

describe('STR_Default_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STR_Default', function test_STR_Default () {

		it('classes OLSKDecor', function () {
			browser.assert.hasClass(STR_Default, 'OLSKDecor');
		}); 

		it('classes OLSKDecorCapped', function () {
			browser.assert.hasClass(STR_Default, 'OLSKDecorCapped');
		});
	
	});

});
