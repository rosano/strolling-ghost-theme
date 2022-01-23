const kDefaultRoutePath = '/STRMembership';

describe('STRMembership_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRMembership', function test_STRMembership () {

		it('classes OLSKDecorModule', function () {
			browser.assert.hasClass(STRMembership, 'OLSKDecorModule');
		});

	});

	describe('STRMembershipBlurb', function test_STRMembershipBlurb () {

		it('sets text', function () {
			browser.assert.text(STRMembershipBlurb, 'Become a member to get full access');
		});
	
	});

	describe('STRMembershipButton', function test_STRMembershipButton () {

		it('classes OLSKDecorPress', function () {
			browser.assert.hasClass(STRMembershipButton, 'OLSKDecorPress');
		});

		it('classes OLSKDecorPressCall', function () {
			browser.assert.hasClass(STRMembershipButton, 'OLSKDecorPressCall');
		});

		it('classes OLSKDecorTappable', function () {
			browser.assert.hasClass(STRMembershipButton, 'OLSKDecorTappable');
		});

		it('sets data-portal', function () {
			browser.assert.attribute(STRMembershipButton, 'data-portal', 'signup');
		});

		it('sets text', function () {
			browser.assert.text(STRMembershipButton, 'Subscribe');
		});
	
	});

	describe('STRMembershipExistingBlurb', function test_STRMembershipExistingBlurb () {

		it('sets text', function () {
			browser.assert.text(STRMembershipExistingBlurb, 'Already a member?');
		});
	
	});

	describe('STRMembershipExistingLink', function test_STRMembershipExistingLink () {

		it('classes OLSKDecorTappable', function () {
			browser.assert.hasClass(STRMembershipExistingLink, 'OLSKDecorTappable');
		});

		it('sets data-portal', function () {
			browser.assert.attribute(STRMembershipExistingLink, 'data-portal', 'signin');
		});

		it('sets text', function () {
			browser.assert.text(STRMembershipExistingLink, 'Sign in');
		});
	
	});

	describe('STRMembershipBackers', function test_STRMembershipBackers () {

		it('sets text', function () {
			browser.assert.text(STRMembershipBackers, '(Open Collective Flare backers: your email works here)');
		});
	
	});

});
