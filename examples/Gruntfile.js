module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                boss: true,
                browser: true,
                curly: true,
                eqeqeq: true,
                eqnull: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                node : true,
                sub: true,
                undef: true,
                unused: true,

                globals: {
                    XMLHttpRequest: true,
                    define: true,
                    describe: true,
									  beforeEach: true,
                    expect: true,
                    it: true,
                    require: true,
                }
            },
            all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
        },
        uglify: {
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          build: {
            src: 'app.js',
            dest: 'dist/<%= pkg.name %>.min.js'
          }
        },
        requirejs: {
          compile: {
              options: {
                  baseUrl: './',
                  name: 'app', 
								  paths: {
										"Vue": "node_modules/vue/dist/vue",
										"vue_": "node_modules/require-vuejs/dist/require-vuejs",
										"vue": "empty:"
									},
                  include: [ ],
                  out: './dist/<%= pkg.name %>.min.js'
              }
          }, // compile
          dese: {
              options: {
                  baseUrl: './',
                  name: 'app', 
								  paths: {
										"Vue": "node_modules/vue/dist/vue",
										"vue_": "node_modules/require-vuejs/dist/require-vuejs",
										"vue": "empry:"
									},
                  include: [ ],
                  optimize: "none",
                  out: './dist/<%= pkg.name %>.js'
              }
          } // dese
        } // requirejs
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'uglify']);
};