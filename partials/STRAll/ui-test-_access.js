const kDefaultRoutePath = '/all/';

Object.entries({
	STRAll: '.STRAll',
	STRAllHeading: '.STRAllHeading',
	STRAllList: '.STRAllList',
	STRAllListItem: '.STRAllListItem',
	STRAllListItemNumber: '.STRAllListItemNumber',
	STRAllListItemNumber_Example: 'tr:nth-of-type(1) .STRAllListItemNumber',
	STRAllListItemLink: '.STRAllListItemLink',
	STRAllListItemLink_Members: 'tr:nth-of-type(1) .STRAllListItemLink',
	STRAllListItemLink_Public: 'tr:nth-of-type(2) .STRAllListItemLink',
	STRAllListItemPaid: '.STRAllListItemPaid',
	STRAllListItemPaid_Members: 'tr:nth-of-type(1) .STRAllListItemPaid',
	STRAllListItemPaid_Public: 'tr:nth-of-type(2) .STRAllListItemPaid',
	STRAllListItemSpotlight: '.STRAllListItemSpotlight',
	STRAllListItemSpotlight_Members: 'tr:nth-of-type(1) .STRAllListItemSpotlight',
	STRAllListItemSpotlight_Public: 'tr:nth-of-type(2) .STRAllListItemSpotlight',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRAllListItem_Access', function () {

	const postCount = 2;

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});

	it('shows STRAll', function () {
		browser.assert.elements(STRAll, 1);
	});

	it('shows STRAllHeading', function () {
		browser.assert.elements(STRAllHeading, 1);
	});

	it('shows STRAllList', function () {
		browser.assert.elements(STRAllList, 1);
	});
	
	it('shows STRAllListItem', function() {
		browser.assert.elements(STRAllListItem, postCount);
	});

	it('shows STRAllListItemNumber', function () {
		browser.assert.elements(STRAllListItemNumber, postCount);
	});

	it('shows STRAllListItemNumber_Example', function () {
		browser.assert.elements(STRAllListItemNumber_Example, 1);
	});

	it('shows STRAllListItemLink', function () {
		browser.assert.elements(STRAllListItemLink, postCount);
	});

	it('shows STRAllListItemLink_Members', function () {
		browser.assert.elements(STRAllListItemLink_Members, 1);
	});

	it('shows STRAllListItemLink_Public', function () {
		browser.assert.elements(STRAllListItemLink_Public, 1);
	});

	it('shows STRAllListItemPaid', function () {
		browser.assert.elements(STRAllListItemPaid, postCount);
	});

	it('shows STRAllListItemPaid_Members', function () {
		browser.assert.elements(STRAllListItemPaid_Members, 1);
	});

	it('shows STRAllListItemPaid_Public', function () {
		browser.assert.elements(STRAllListItemPaid_Public, 1);
	});

	it('shows STRAllListItemSpotlight', function () {
		browser.assert.elements(STRAllListItemSpotlight, postCount);
	});

	it('shows STRAllListItemSpotlight_Members', function () {
		browser.assert.elements(STRAllListItemSpotlight_Members, 1);
	});

	it('shows STRAllListItemSpotlight_Public', function () {
		browser.assert.elements(STRAllListItemSpotlight_Public, 1);
	});

});
