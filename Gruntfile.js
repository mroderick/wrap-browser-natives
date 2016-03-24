'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        buster: {
            test: {
                config: 'test/buster.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-buster');
    grunt.registerTask('test', ['buster']);
    grunt.registerTask('default', 'test');
};
