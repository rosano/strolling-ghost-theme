const kDefaultRoutePath = '/tag/strtag/';

describe('STRPreview_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRPreviewLinkBarDate', function test_STRPreviewLinkBarDate () {

		it('sets datetime', function () {
			browser.assert.attribute(STRPreviewLinkBarDate_Example, 'datetime', '2022-10-19');
		});

		it('sets text', function () {
			browser.assert.text(STRPreviewLinkBarDate_Example, 'October 19th, 2022');
		});
	
	});

	describe('STRPreviewLink', function test_STRPreviewLink () {

		it('sets data-number', function () {
			browser.assert.attribute(STRPreviewLink_Example, 'data-number', '0002');
		});

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

	describe('STRPreviewLinkBarPaid', function test_STRPreviewLinkBarPaid () {

		it('sets text', function () {
			browser.assert.text(STRPreviewLinkBarPaid, '★ members exclusive');
		});
	
	});

});
