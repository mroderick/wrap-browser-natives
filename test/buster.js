'use strict';

exports.browser = {
    rootPath: '../',

    environment: 'browser',

    sources: [
        'lib/wrapple.umd.js'
    ],

    tests: [
        'test/test-*.js'
    ],

    extensions: [
        require('buster-istanbul')
    ],

    'buster-istanbul': {
        outputDirectory: 'coverage',
        format: 'lcov'
    }
};
