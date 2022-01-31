const kDefaultRoutePath = '/';

Object.entries({
	STRBelow: '.STRBelow',

	STRBelowEdit: '.STRBelowEdit',

	STRBelowGhost: '.STRBelowGhost',
	STRBelowGhostLink: '.STRBelowGhostLink',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRBelow_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STRBelow', function() {
		browser.assert.elements(STRBelow, 1);
	});
	
	it('shows STRIntro', function() {
		browser.assert.elements('.STRIntro', 1);
	});
	
	it('shows ROCOGazette', function() {
		browser.assert.elements('.ROCOGazette', 1);
	});

	it('shows STRBelowEdit', function () {
		browser.assert.elements(STRBelowEdit, 1);
	});

	it('shows STRBelowGhost', function () {
		browser.assert.elements(STRBelowGhost, 1);
	});

	it('shows STRBelowGhostLink', function () {
		browser.assert.elements(STRBelowGhostLink, 1);
	});
	
	it('shows ROCORootLink', function() {
		browser.assert.elements('.ROCORootLink', 1);
	});

});
