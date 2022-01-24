const kDefaultRoutePath = '/';

Object.entries({
	STRPreview: '.STRPreview',
	STRPreviewDate: '.STRPreviewDate',
	STRPreviewTitle: '.STRPreviewTitle',
	STRPreviewEmbed: '.STRPreviewEmbed',
	STRPreviewNotes: '.STRPreviewNotes',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRPreview_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STRPreview', function() {
		browser.assert.elements(STRPreview, 1);
	});
	
	it('shows STRPreviewDate', function() {
		browser.assert.elements(STRPreviewDate, 1);
	});
	
	it('shows STRPreviewTitle', function() {
		browser.assert.elements(STRPreviewTitle, 1);
	});
	
	it('shows STRPreviewEmbed', function() {
		browser.assert.elements(STRPreviewEmbed, 1);
	});
	
	it('shows STRPreviewNotes', function() {
		browser.assert.elements(STRPreviewNotes, 1);
	});
	
});
