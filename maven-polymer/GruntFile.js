module.exports = function (grunt) {

    // tell grunt to load jshint task plugin.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-vulcanize');

    // configure tasks
    grunt.initConfig({
        jshint: {
            files: [
                'GruntFile.js',
                'src/main/webapp/scripts/*.js',
                'src/test/javascript/*.js'
            ],
            options: {
                ignores: [
                    'src/main/webapp/bower_components/*.js'
                ]
            }
        },
        vulcanize: {
            options: {
                csp: true,
                excludes: {
                    imports: [
                        "polymer.html"
                    ]
                }
            },
            files: {
                'build-csp.html': 'index.html'
            }}
        // more plugin configs go here.
    });
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('default', ['vulcanize']);

};

