const kDefaultRoutePath = '/0000/';

Object.entries({
	STREpisode: '.STREpisode',
	STREpisodeAll: '.STREpisodeAll',
	STREpisodeDate: '.STREpisodeDate',
	STREpisodeContent: '.STREpisodeContent',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STREpisode_Access', function () {

	before(function() {
		return browser.OLSKVisitPath(kDefaultRoutePath);
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
	
	it('shows STREpisodeContent', function() {
		browser.assert.elements(STREpisodeContent, 1);
	});

	it('shows STRTagCard', function () {
		browser.assert.elements('.STRTagCard', 1);
	});

	it('shows STRRelated', function () {
		browser.assert.elements('.STRRelated', 1);
	});

});
