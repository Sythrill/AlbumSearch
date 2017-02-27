module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: ['**/*.sass'],
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'css/style.css':'sass/style.sass'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync', 'watch','sass']);
};