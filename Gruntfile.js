module.exports = function(grunt) {
    var lessFiles = {};
    // Take all less files in src/stylesheets/ and convert them into css
    lessFiles['public/stylesheets/all.css'] = 'src/stylesheets/*.less';
    var uglyCSS = {};
    // Turns all less files into minified css
    uglyCSS['public/stylesheets/all.min.css'] = 'src/stylesheets/*.less';
    var uglyFiles = {};
    // Uglify your compiled javascript
    uglyFiles['public/javascript/all.min.js'] = 'public/javascript/all.js';
    // Javascript files to compile
    var jsFiles = [
        'bower_components/jquery/dist/jquery.js', // demo purposes
        'bower_components/bootstrap/dist/js/bootstrap.js', // demo purposes
        'src/javascript/*.js'
    ];

    grunt.initConfig({
        // Compile less and uglify
        less: {
            compile: {
                files: lessFiles
            },
            minify: {
                options: {
                    compress: true
                },
                files: uglyCSS
            }
        },
        // Combine all css into "all.js"
        concat: {
            combine: {
                src: jsFiles,
                dest: 'public/javascript/all.js',
            }
        },
        // Minify JS
        uglify: {
            options: {
                mangle: false
            },
            minify: {
                files: uglyFiles
            }
        },
        // Watch for changes in less OR js
        watch: {
            js: {
                files: jsFiles,
                tasks: ['concat', 'uglify'], //tasks to run
                options: {
                    livereload: true //reloads the browser
                }
            },
            less: {
                files: ['src/stylesheets/*.less'], //watched files
                tasks: ['less'], //tasks to run
                options: {
                    livereload: true //reloads the browser
                }
            },
        }
    });

    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Task definition
    grunt.registerTask('default', // Define default task
        ['less:compile', 'concat', // Compile less, combine js
        'less:minify', 'uglify']); // Minify less/js
};