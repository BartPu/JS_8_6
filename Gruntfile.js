module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
    });
    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-browser-sync')
    // Default task(s).

    grunt.registerTask('default', ['browserSync']);
};