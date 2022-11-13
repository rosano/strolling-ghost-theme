const kDefaultRoutePath = '/tag/strtag/';

describe('STRPreview_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRPreviewDate', function test_STRPreviewDate () {

		it('sets datetime', function () {
			browser.assert.attribute(STRPreviewDate_Example, 'datetime', '2022-10-19');
		});

		it('sets text', function () {
			browser.assert.text(STRPreviewDate_Example, 'October 19th, 2022');
		});
	
	});

	describe('STRPreviewLink', function test_STRPreviewLink () {

		it('sets aria-text', function () {
			browser.assert.attribute(STRPreviewLink_Example, 'aria-text', 'STRMembersEpisodeTitleText');
		});
	
		it('sets style', function () {
			browser.assert.attribute(STRPreviewLink_Example, 'style', /\/content\/images.*\/STRFeatureImage/);
		});

		it('sets href', function () {
			browser.assert.attribute(STRPreviewLink_Example, 'href', '/0002/');
		});

	});

	describe('STRPreviewLinkPaid', function test_STRPreviewLinkPaid () {

		it('sets text', function () {
			browser.assert.text(STRPreviewLinkPaid, '★ members exclusive');
		});
	
	});

});
