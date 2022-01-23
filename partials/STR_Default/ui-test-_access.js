const kDefaultRoutePath = '/';

Object.entries({
	STR_Default: '.STR_Default',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STR_Default_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STR_Default', function() {
		browser.assert.elements(STR_Default, 1);
	});
	
});
