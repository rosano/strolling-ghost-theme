const kDefaultRoutePath = '/';

describe('STRBelow_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRBelowEdit', function test_STRBelowEdit () {

		it('sets href', function () {
			browser.assert.attribute(STRBelowEdit, 'href', 'https://github.com/rosano/strolling-ghost-theme');
		});

		it('sets target', function () {
			browser.assert.attribute(STRBelowEdit, 'target', '_blank');
		});

		it('sets text', function () {
			browser.assert.text(STRBelowEdit, 'Edit this');
		});
	
	});

	describe('STRBelowGhost', function test_STRBelowGhost () {

		it('sets text', function () {
			browser.assert.text(STRBelowGhost, 'Powered by Ghost.');
		});
	
	});

	describe('STRBelowGhostLink', function test_STRBelowGhostLink () {

		it('sets href', function () {
			browser.assert.attribute(STRBelowGhostLink, 'href', 'https://ghost.org');
		});

		it('sets target', function () {
			browser.assert.attribute(STRBelowGhostLink, 'target', '_blank');
		});

		it('sets rel', function () {
			browser.assert.attribute(STRBelowGhostLink, 'rel', 'noopener noreferrer');
		});

		it('sets text', function () {
			browser.assert.text(STRBelowGhostLink, 'Ghost');
		});
	
	});

});
