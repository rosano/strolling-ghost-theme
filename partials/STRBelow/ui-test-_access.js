const kDefaultRoutePath = '/';

Object.entries({
	STRBelow: '.STRBelow',

	STRBelowManage: '.STRBelowManage',

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

	it('hides STRBelowManage', function () {
		browser.assert.elements(STRBelowManage, 0);
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

	context('paid', function () {
		
		before(function () {
			return browser.visit('/p/1318746a-c78b-454f-a5ac-b792ce4a185d/');
		});

		it('shows STRBelowManage', function () {
			browser.assert.elements(STRBelowManage, 1);
		});

	});

});
