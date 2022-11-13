const kDefaultRoutePath = '/tag/strtag/';

Object.entries({
	STRPreview: '.STRPreview',
	STRPreviewDate: '.STRPreviewDate',
	STRPreviewDate_Example: '.STRPreview:nth-of-type(1) .STRPreviewDate',
	STRPreviewLink: '.STRPreviewLink',
	STRPreviewLink_Example: '.STRPreview:nth-of-type(1) .STRPreviewLink',
	STRPreviewLinkPaid: '.STRPreviewLinkPaid',
	STRPreviewLink_Example: '.STRPreview:nth-of-type(1) .STRPreviewLink',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRPreview_Access', function () {

	const postCount = 2;

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STRPreview', function() {
		browser.assert.elements(STRPreview, postCount);
	});
	
	it('shows STRPreviewDate', function() {
		browser.assert.elements(STRPreviewDate, postCount);
	});
	
	it('shows STRPreviewLink', function() {
		browser.assert.elements(STRPreviewLink, postCount);
	});
	
	it('hides STRPreviewLinkPaid', function() {
		browser.assert.elements('.STRPreview:nth-of-type(2) .STRPreviewLink .STRPreviewLinkPaid', 0);
	});
	
	it('shows STRPagination', function () {
		browser.assert.elements('.STRPagination', 1);
	});

	context('paid', function () {

		it('shows STRPreviewLinkPaid', function () {
			browser.assert.elements(STRPreviewLinkPaid, 1);
		});	
	
	});
	
});
