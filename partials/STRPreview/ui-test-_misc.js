const kDefaultRoutePath = '/';

describe('STRPreview_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRPreviewNumber', function test_STRPreviewNumber () {

		it('sets text', function () {
			browser.assert.text(STRPreviewNumber, '0000');
		});
	
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

	describe('STRPreviewExcerpt', function test_STRPreviewExcerpt () {

		it('sets text', function () {
			browser.assert.text(STRPreviewExcerpt, 'STREpisodeContentText');
		});
	
	});

	describe('STRPreviewNotes', function test_STRPreviewNotes () {

		it('sets href', function () {
			browser.assert.attribute(STRPreviewNotes, 'href', '/0000/');
		});

		it('sets text', function () {
			browser.assert.text(STRPreviewNotes, '→ Episode notes');
		});
	
	});

});
