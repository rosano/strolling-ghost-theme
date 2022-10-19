const kDefaultRoutePath = '/0000/';

Object.entries({
	STREpisode: '.STREpisode',
	STREpisodeAll: '.STREpisodeAll',
	STREpisodeDate: '.STREpisodeDate',
	STREpisodeTitle: '.STREpisodeTitle',
	STREpisodeContent: '.STREpisodeContent',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STREpisode_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STREpisode', function() {
		browser.assert.elements(STREpisode, 1);
	});
	
	it('shows STREpisodeAll', function() {
		browser.assert.elements(STREpisodeAll, 1);
	});

	it('shows STREpisodeDate', function () {
		browser.assert.elements(STREpisodeDate, 1);
	});
	
	it('shows STREpisodeTitle', function() {
		browser.assert.elements(STREpisodeTitle, 1);
	});
	
	it('shows STREpisodeContent', function() {
		browser.assert.elements(STREpisodeContent, 1);
	});

});
