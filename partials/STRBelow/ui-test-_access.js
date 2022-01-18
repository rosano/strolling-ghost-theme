const kDefaultRoutePath = '/';

Object.entries({
	STRBelow: '.STRBelow',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('STRBelow_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STRBelow', function() {
		browser.assert.elements(STRBelow, 1);
	});
	
	it('shows ROCOGazette', function() {
		browser.assert.elements('.ROCOGazette', 1);
	});

});
