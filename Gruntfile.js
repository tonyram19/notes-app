module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
                src: ['app/public/js/**/*.js'],
                dest: 'app/build/js/scripts.js'
            },
            css: {
                src: ['app/public/css/**/*.css'],
                dest: 'app/build/css/styles.css'
            }
        },
        uglify: {
            js: {
                files: {
                    'app/build/js/scripts.js': ['app/build/js/scripts.js']
                }
            }

        },
        cssmin: {
            css: {
                files: {
                    'app/build/css/styles.css': ['app/build/css/styles.css']
                }
            }
        },
        watch: {
            js: {
                files: ['app/public/js/**/*.js'],
                tasks: ['concat:js', 'uglify:js']
            },
            css: {
                files: ['app/public/css/**/*.css'],
                tasks: ['concat:css', 'uglify:css']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['uglify', 'cssmin', 'watch']);
};
