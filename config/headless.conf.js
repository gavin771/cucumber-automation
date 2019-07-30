const defaultConfig = require('./default.conf').config;

const capabilities = [{
    browserName: 'chrome',
    name: 'local machine',
    chromeOptions: {
        args: ['--headless', '--disable-gpu', '--window-size=1280,800'],
        binary: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'
    },
    type: 'desktop'
}];

const localConfig = {
    capabilities,
    maxInstances: 3,
    logLevel: 'verbose',
};

const config = Object.assign({}, defaultConfig, localConfig);

module.exports = { config };