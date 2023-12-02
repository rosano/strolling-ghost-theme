const kDefaultRoutePath = '/';

describe('STR_Default_Misc', function () {

	before(function () {
		return browser.OLSKVisitPath(kDefaultRoutePath);
	});

	describe('STR_Default', function test_STR_Default () {

		it('classes OLSKDecor', function () {
			browser.assert.hasClass(STR_Default, 'OLSKDecor');
		}); 

		it('classes OLSKDecorCapped', function () {
			browser.assert.hasClass(STR_Default, 'OLSKDecorCapped');
		});

		context('STR_DefaultTwitterPlayerCard', function () {
			
			before(function () {
				return browser.OLSKVisitPath('/0000/');
			});

			it.skip('sets meta[name="twitter:card"]', function () {
				browser.assert.attribute('meta[name="twitter:card"]', 'content', 'player');
			});

			it('sets meta[name="twitter:player"]', function () {
				browser.assert.attribute('meta[name="twitter:player"]', 'content', 'https://go.rosano.ca/strolling-0000-video');
			});

			it('sets meta[name="twitter:player:width"]', function () {
				browser.assert.attribute('meta[name="twitter:player:width"]', 'content', '500');
			});

			it('sets meta[name="twitter:player:height"]', function () {
				browser.assert.attribute('meta[name="twitter:player:height"]', 'content', '300');
			});

		});
	
	});

});
