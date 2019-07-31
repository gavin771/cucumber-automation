import { Given } from 'cucumber'

Given('Given a web browser is at the Google home page', () => {
    browser.url(browser.config.baseUrl);
})