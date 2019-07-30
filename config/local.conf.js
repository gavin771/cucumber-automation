const defaultConfig = require('./default.conf').config;

const capabilities = [{
    browserName: 'chrome',
    name: 'local machine',
    type: 'desktop'
},
{
    browserName: 'chrome',
    name: 'local machine',
    type: 'mobile'
}];

const localConfig = {
    capabilities,
    maxInstances: 3,
    logLevel: 'verbose',
};

const config = Object.assign({}, defaultConfig, localConfig);

module.exports = { config };