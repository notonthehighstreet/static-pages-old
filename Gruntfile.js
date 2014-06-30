module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        stylus: {
            compile: {
                files: [{
                    expand: true,
                    cwd: 'public/',
                    src: ['**/*.styl'],
                    dest: 'build/',
                    ext: '.css',
                }]
            }
        },
        less: {
            compile: {
                files: [{
                    expand: true,
                    cwd: 'public/',
                    src: ['**/*.less'],
                    dest: 'build/',
                    ext: '.css',
                }]
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'public/static-pages-assets/images/',
                src: '**',
                dest: 'build/static-pages-assets/images/'
            },
        },
        requirejs: {
            compile: {
                options: {
                    appDir: 'public/static-pages-assets/scripts/',
                    baseUrl: "./",
                    dir: 'build/static-pages-assets/scripts',
                    skipDirOptimize: true,
                    modules: [
                        { name: 'test' }
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['stylus', 'less', 'requirejs', 'copy']);

};
