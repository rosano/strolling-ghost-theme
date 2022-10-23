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

	describe('STRPreviewTitle', function test_STRPreviewTitle () {

		it('sets href', function () {
			browser.assert.attribute(STRPreviewTitle_Example, 'href', '/0002/');
		});

		it('sets text', function () {
			browser.assert.text(STRPreviewTitle_Example, 'STRMembersEpisodeTitleText');
		});
	
	});

	describe('STRPreviewEmbed', function test_STRPreviewEmbed () {

		it('sets src', function () {
			browser.assert.attribute(STRPreviewEmbed_Example, 'src', 'https://go.rosano.ca/strolling-0002-video');
		});
	
	});

	describe('STRPreviewNotes', function test_STRPreviewNotes () {

		it('sets href', function () {
			browser.assert.attribute(STRPreviewNotes_Example, 'href', '/0002/');
		});

		it('sets text', function () {
			browser.assert.text(STRPreviewNotes_Example, '→ 0002 episode notes');
		});
	
	});

});
