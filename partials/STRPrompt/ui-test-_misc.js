const kDefaultRoutePath = '/STRPrompt';

describe('STRPrompt_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRPrompt', function test_STRPrompt () {

		it('classes OLSKDecorModule', function () {
			browser.assert.hasClass(STRPrompt, 'OLSKDecorModule');
		});

	});

	describe('STRPromptBlurb', function test_STRPromptBlurb () {

		it('sets text', function () {
			browser.assert.text(STRPromptBlurb, 'Become a member to hear full episodes');
		});
	
	});

	describe('STRPromptButton', function test_STRPromptButton () {

		it('classes OLSKDecorPress', function () {
			browser.assert.hasClass(STRPromptButton, 'OLSKDecorPress');
		});

		it('classes OLSKDecorPressCall', function () {
			browser.assert.hasClass(STRPromptButton, 'OLSKDecorPressCall');
		});

		it('classes OLSKDecorTappable', function () {
			browser.assert.hasClass(STRPromptButton, 'OLSKDecorTappable');
		});

		it('sets data-portal', function () {
			browser.assert.attribute(STRPromptButton, 'data-portal', 'signup');
		});

		it('sets text', function () {
			browser.assert.text(STRPromptButton, 'Subscribe');
		});
	
	});

	describe('STRPromptExistingBlurb', function test_STRPromptExistingBlurb () {

		it('sets text', function () {
			browser.assert.text(STRPromptExistingBlurb, 'Already a member?');
		});
	
	});

	describe('STRPromptExistingLink', function test_STRPromptExistingLink () {

		it('classes OLSKDecorTappable', function () {
			browser.assert.hasClass(STRPromptExistingLink, 'OLSKDecorTappable');
		});

		it('sets data-portal', function () {
			browser.assert.attribute(STRPromptExistingLink, 'data-portal', 'signin');
		});

		it('sets text', function () {
			browser.assert.text(STRPromptExistingLink, 'Sign in');
		});
	
	});

});
