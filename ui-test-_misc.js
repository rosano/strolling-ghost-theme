const kDefaultRoutePath = '/';

describe('STRDefault_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRDefault', function test_STRDefault () {

		it('classes OLSKDecor', function () {
			browser.assert.hasClass(STRDefault, 'OLSKDecor');
		}); 

		it('classes OLSKDecorCapped', function () {
			browser.assert.hasClass(STRDefault, 'OLSKDecorCapped');
		});
	
	});

});
