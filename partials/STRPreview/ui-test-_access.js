const kDefaultRoutePath = '/tag/strtag/';

Object.entries({
	STRPreview: '.STRPreview',
	STRPreviewDate: '.STRPreviewDate',
	STRPreviewDate_Example: '.STRPreview:nth-of-type(3) .STRPreviewDate',
	STRPreviewTitle: '.STRPreviewTitle',
	STRPreviewTitle_Example: '.STRPreview:nth-of-type(3) .STRPreviewTitle',
	STRPreviewEmbed: '.STRPreviewEmbed',
	STRPreviewEmbed_Example: '.STRPreview:nth-of-type(3) .STRPreviewEmbed',
	STRPreviewNotes: '.STRPreviewNotes',
	STRPreviewNotes_Example: '.STRPreview:nth-of-type(3) .STRPreviewNotes',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRPreview_Access', function () {

	const postCount = 2;

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STRPreview', function() {
		browser.assert.elements(STRPreview, 2);
	});
	
	it('shows STRPreviewDate', function() {
		browser.assert.elements(STRPreviewDate, 2);
	});
	
	it('shows STRPreviewTitle', function() {
		browser.assert.elements(STRPreviewTitle, 2);
	});
	
	it('shows STRPreviewEmbed', function() {
		browser.assert.elements(STRPreviewEmbed, 2);
	});
	
	it('shows STRPreviewNotes', function() {
		browser.assert.elements(STRPreviewNotes, 2);
	});

	it('shows STRPagination', function () {
		browser.assert.elements('.STRPagination', 1);
	});
	
});
