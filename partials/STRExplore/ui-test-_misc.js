const kDefaultRoutePath = '/';

describe('STRExplore_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRExploreHeading', function test_STRExploreHeading () {

		it('sets text', function () {
			browser.assert.text(STRExploreHeading, 'Explore episodes');
		});
	
	});

	describe('STRExploreAll', function test_STRExploreAll () {

		it('sets text', function () {
			browser.assert.text(STRExploreAll, 'All');
		});

		it('sets href', function () {
			browser.assert.attribute(STRExploreAll, 'href', '/all/')
		});
	
	});

});
