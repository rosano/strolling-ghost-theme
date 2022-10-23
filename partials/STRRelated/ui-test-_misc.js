const kDefaultRoutePath = '/strcontent';

describe('STRRelated_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRRelatedHeading', function test_STRRelatedHeading () {

		it('sets text', function () {
			browser.assert.text(STRRelatedHeading, 'Related');
		});
	
	});

	describe('STRRelatedListItemLink', function test_STRRelatedListItemLink () {

		it('sets href', function () {
			browser.assert.attribute(STRRelatedListItemLink_Example, 'href', '/0002/');
		});

		it('sets text', function () {
			browser.assert.text(STRRelatedListItemLink_Example, 'STRMembersEpisodeTitleText');
		});
	
	});

});
