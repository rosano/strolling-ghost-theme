const kDefaultRoutePath = '/STRMembership';

Object.entries({
	STRMembership: '.STRMembership',
	STRMembershipBlurb: '.STRMembershipBlurb',
	STRMembershipButton: '.STRMembershipButton',
	STRMembershipExistingBlurb: '.STRMembershipExistingBlurb',
	STRMembershipExistingLink: '.STRMembershipExistingLink',
	STRMembershipBackers: '.STRMembershipBackers',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRMembership_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STRMembership', function() {
		browser.assert.elements(STRMembership, 1);
	});
	
	it('shows STRMembershipBlurb', function() {
		browser.assert.elements(STRMembershipBlurb, 1);
	});

	it('shows STRMembershipButton', function () {
		browser.assert.elements(STRMembershipButton, 1);
	});
	
	it('shows STRMembershipExistingBlurb', function() {
		browser.assert.elements(STRMembershipExistingBlurb, 1);
	});
	
	it('shows STRMembershipExistingLink', function() {
		browser.assert.elements(STRMembershipExistingLink, 1);
	});
	
	it('shows STRMembershipBackers', function() {
		browser.assert.elements(STRMembershipBackers, 1);
	});
	
});
