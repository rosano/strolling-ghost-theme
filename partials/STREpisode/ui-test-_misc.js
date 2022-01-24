const kDefaultRoutePath = '/0000/';

describe('STREpisode_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STREpisodeAll', function test_STREpisodeAll () {

		it('sets href', function () {
			browser.assert.attribute(STREpisodeAll, 'href', '/');
		});

		it('sets text', function () {
			browser.assert.text(STREpisodeAll, '← All episodes');
		});
	
	});

	describe('STREpisodeDate', function test_STREpisodeDate () {

		it('sets datetime', function () {
			browser.assert.attribute(STREpisodeDate, 'datetime', '2022-01-18');
		});

		it('sets text', function () {
			browser.assert.text(STREpisodeDate, 'January 18th, 2022');
		});
	
	});

	describe('STREpisodeTitle', function test_STREpisodeTitle () {

		it('sets href', function () {
			browser.assert.attribute(STREpisodeTitle, 'href', '/0000/');
		});

		it('sets text', function () {
			browser.assert.text(STREpisodeTitle, 'STREpisodeTitleText');
		});
	
	});

	describe('STREpisodeContent', function test_STREpisodeContent () {

		it('sets text', function () {
			browser.assert.text(STREpisodeContent, 'STREpisodeContentText');
		});
	
	});

	describe('STREpisodeDiscussionHeading', function test_STREpisodeDiscussionHeading () {

		it('sets text', function () {
			browser.assert.text(STREpisodeDiscussionHeading, 'Discussion');
		});
	
	});

});
