const kDefaultRoutePath = '/STRPrompt';

Object.entries({
	STRPrompt: '.STRPrompt',
	STRPromptBlurb: '.STRPromptBlurb',
	STRPromptButton: '.STRPromptButton',
	STRPromptExistingBlurb: '.STRPromptExistingBlurb',
	STRPromptExistingLink: '.STRPromptExistingLink',
	STRPromptBackers: '.STRPromptBackers',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('STRPrompt_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STRPrompt', function() {
		browser.assert.elements(STRPrompt, 1);
	});
	
	it('shows STRPromptBlurb', function() {
		browser.assert.elements(STRPromptBlurb, 1);
	});

	it('shows STRPromptButton', function () {
		browser.assert.elements(STRPromptButton, 1);
	});
	
	it('shows STRPromptExistingBlurb', function() {
		browser.assert.elements(STRPromptExistingBlurb, 1);
	});
	
	it('shows STRPromptExistingLink', function() {
		browser.assert.elements(STRPromptExistingLink, 1);
	});
	
	it('shows STRPromptBackers', function() {
		browser.assert.elements(STRPromptBackers, 1);
	});
	
});
