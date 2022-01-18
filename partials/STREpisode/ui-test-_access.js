const kDefaultRoutePath = '/0000/';

Object.entries({
	STREpisode: '.STREpisode',
	STREpisodeAll: '.STREpisodeAll',
	STREpisodeMeta: '.STREpisodeMeta',
	STREpisodeMetaNumber: '.STREpisodeMetaNumber',
	STREpisodeMetaDate: '.STREpisodeMetaDate',
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

	it('shows STREpisodeMeta', function () {
		browser.assert.elements(STREpisodeMeta, 1);
	});
	
	it('shows STREpisodeMetaNumber', function() {
		browser.assert.elements(STREpisodeMetaNumber, 1);
	});
	
	it('shows STREpisodeMetaDate', function() {
		browser.assert.elements(STREpisodeMetaDate, 1);
	});
	
	it('shows STREpisodeTitle', function() {
		browser.assert.elements(STREpisodeTitle, 1);
	});
	
	it('shows STREpisodeContent', function() {
		browser.assert.elements(STREpisodeContent, 1);
	});
	
	it('shows STRIntro', function() {
		browser.assert.elements('.STRIntro', 1);
	});
	
});
