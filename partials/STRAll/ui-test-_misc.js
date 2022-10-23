const kDefaultRoutePath = '/all/';

describe('STRAll_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRAllHeading', function test_STRAllHeading () {

		it('sets text', function () {
			browser.assert.text(STRAllHeading, 'Episode index');
		});
	
	});

	describe('STRAllBlurb', function test_STRAllBlurb () {

		it('sets text', function () {
			browser.assert.text(STRAllBlurb, '⭐️ = members exclusive. 🔍 = uncut / extended version. 1️⃣ = single.');
		});
	
	});

	describe('STRAllListItemNumber', function test_STRAllListItemNumber () {

		it('sets text', function () {
			browser.assert.text(STRAllListItemNumber_Example, '0002');
		});
	
	});

	describe('STRAllListItemLink_Members', function test_STRAllListItemLink_Members () {

		it('sets href', function () {
			browser.assert.attribute(STRAllListItemLink_Members, 'href', '/0002/');
		});

		it('sets text', function () {
			browser.assert.text(STRAllListItemLink_Members, 'STRMembersEpisodeTitleText');
		});
	
	});

	describe('STRAllListItemLink_Public', function test_STRAllListItemLink_Public () {

		it('sets href', function () {
			browser.assert.attribute(STRAllListItemLink_Public, 'href', '/0000/');
		});

		it('sets text', function () {
			browser.assert.text(STRAllListItemLink_Public, 'STREpisodeTitleText');
		});
	
	});

	describe('STRAllListItemPaid_Members', function test_STRAllListItemPaid_Members () {

		it('sets aria-text', function () {
			browser.assert.attribute(STRAllListItemPaid_Members, 'aria-text', 'Members exclusive');
		});

		it('sets text', function () {
			browser.assert.text(STRAllListItemPaid_Members, '⭐️');
		});
	
	});

	describe('STRAllListItemPaid_Public', function test_STRAllListItemPaid_Public () {

		it('sets aria-text', function () {
			browser.assert.attribute(STRAllListItemPaid_Public, 'aria-text', '');
		});

		it('sets text', function () {
			browser.assert.text(STRAllListItemPaid_Public, '');
		});
	
	});

	describe('STRAllListItemSpotlight_Members', function test_STRAllListItemSpotlight_Members () {

		it('sets aria-text', function () {
			browser.assert.attribute(STRAllListItemSpotlight_Members, 'aria-text', 'Spotlight episode');
		});

		it('sets text', function () {
			browser.assert.text(STRAllListItemSpotlight_Members, '🔍');
		});
	
	});

	describe('STRAllListItemSpotlight_Public', function test_STRAllListItemSpotlight_Public () {

		it('sets aria-text', function () {
			browser.assert.attribute(STRAllListItemSpotlight_Public, 'aria-text', '');
		});

		it('sets text', function () {
			browser.assert.text(STRAllListItemSpotlight_Public, '');
		});
	
	});

	describe('STRAllListItemSingle', function test_STRAllListItemSingle () {

		it('sets aria-text', function () {
			browser.assert.attribute(STRAllListItemSingle_Example, 'aria-text', 'Single episode');
		});

		it('sets text', function () {
			browser.assert.text(STRAllListItemSingle_Example, '1️⃣');
		});
	
	});

});
