const kDefaultRoutePath = '/';

Object.entries({
	STRDefault: '.STRDefault',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('STRDefault_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STRDefault', function() {
		browser.assert.elements(STRDefault, 1);
	});
	
});
