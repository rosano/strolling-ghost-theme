const kDefaultRoutePath = '/';

describe('STRPreview_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRPreviewDate', function test_STRPreviewDate () {

		it('sets datetime', function () {
			browser.assert.attribute(STRPreviewDate, 'datetime', '2022-01-18');
		});

		it('sets text', function () {
			browser.assert.text(STRPreviewDate, 'January 18th, 2022');
		});
	
	});

	describe('STRPreviewTitle', function test_STRPreviewTitle () {

		it('sets href', function () {
			browser.assert.attribute(STRPreviewTitle, 'href', '/0000/');
		});

		it('sets text', function () {
			browser.assert.text(STRPreviewTitle, 'STREpisodeTitleText');
		});
	
	});

	describe('STRPreviewEmbed', function test_STRPreviewEmbed () {

		it('sets src', function () {
			browser.assert.attribute(STRPreviewEmbed, 'src', 'https://go.rosano.ca/strolling-0000-video');
		});
	
	});

	describe('STRPreviewNotes', function test_STRPreviewNotes () {

		it('sets href', function () {
			browser.assert.attribute(STRPreviewNotes, 'href', '/0000/');
		});

		it('sets text', function () {
			browser.assert.text(STRPreviewNotes, '→ 0000 episode notes');
		});
	
	});

});
