module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            light: {
                src: [
                    'less/src/variables-light.less',
                    'less/src/main.less',
                    'less/src/inputs.less',
                    'less/src/buttons.less',
                    'less/src/modal.less',
                    'less/src/tabs.less',
                    'less/src/colors-light.less',
                    'less/src/mixins.less',
                    'less/src/animations.less'
                ],
                dest: 'less/material.less',
                nonull: true // warn if a file is missing
            },
            dark: {
                src: [
                    'less/src/variables-dark.less',
                    'less/src/main.less',
                    'less/src/inputs.less',
                    'less/src/buttons.less',
                    'less/src/modal.less',
                    'less/src/tabs.less',
                    'less/src/colors-dark.less',
                    'less/src/mixins.less',
                    'less/src/animations.less'
                ],
                dest: 'less/material-dark.less',
                nonull: true
            }
        },
        less: {
            development: {
                options: {
                    compress: false, // whitespacing/minifying
                    optimization: 2, // tree node creating
                    strictMath: true // math in parenthesis
                },
                files: {
                    'css/material.css': 'less/material.less',
                    'css/material-dark.css': 'less/material-dark.less'
                }
            }
        },
        watch: {
            options: {
                livereload: 4231
            },
            styles: {
                files: ['less/**/*.less'],
                tasks: ['less']
            },
            scripts: {
                files: ['js/**/*.js']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat', 'less', 'watch']);
};
