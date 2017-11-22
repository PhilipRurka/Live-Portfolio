'use strict';
module.exports = function(grunt) {
  /**
   * Need to concatenate all the js
   */

  /******************************/
  /********** NPM TASK **********/
  /******************************/
  // Task for JS
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Tasks for SCSS
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');

  // Tasks for PUG
  grunt.loadNpmTasks('grunt-contrib-pug');


  // Old code which is still awesome
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');



  /************************************/
  /********** CONFIGURATIONS **********/
  /************************************/
  grunt.initConfig({
    // Concatenated all the JS files into one
    concat: {
      js: {
        src: [
          'app/client/javascripts/vendors/angular.js',
          'app/client/javascripts/vendors/angulartics.js',
          'app/client/javascripts/vendors/jquery.js',          
          'app/client/javascripts/vendors/*.js',
          'app/client/javascripts/app.js',
          'app/client/javascripts/**/*.js',
        ],
        dest: 'resources/main.js' // Use this file for local development
      }
    },
    // Add [] annotations to all the concatenated angular code
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      app: {
        files: {
          'resources/main.js': ['resources/main.js']
        }
      }
    },
    // Transpiles code to ES5
    babel: {
      options: {
        presets: ['es2015'],
        compact: false
      },
      dist: {
        files: {
          'resources/main.js': 'resources/main.js'
        }
      }
    },
    // Minified the Annotated js code
    uglify: {
      js: {
        src: ['resources/main.js'],
        dest: 'resources/main.js'
      }
    },
    // Compile SASS
    sass: {
      options: {
        noCache: true,
        sourcemap: 'none'
      },
      dev: {
        options: {
          lineNumbers: true,
          style: 'expanded'
        },
        files: {
          './resources/main.css': './app/client/stylesheets/main.scss'
        }
      },
      prod: {
        options: {
          style: 'compressed'
        },
        files: {
          './resources/main.css': './app/client/stylesheets/main.scss'
        }
      }
    },
    // Autoprefixer for CSS
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: ['last 5 version']})
        ]
      },
      dist: { // Default env
        src: 'resources/main.css'
      }
    },
    // Compiles Pug
    pug: {
      dev: {
        options: {
          pretty: true
        },
        files: [{
          cwd: 'app/client/views',
          src: '**/*.pug',
          dest: 'resources',
          expand: true,
          ext: '.html'
        }]
      },
      prod: {
        options: {
          pretty: false
        },
        files: [{
          cwd: './app/client/views',
          src: '**/*.pug',
          dest: './resources',
          expand: true,
          ext: '.html'
        }]
      }
    },
    watch: { // Grunt Watcher that executes tasks when certail file types change
      js: {
        files: ['app/client/javascripts/**/*.js'],
        tasks: ['concatJS'],
        options: {
          spawns: false
        }
      },
      scss: {
        files: ['app/client/stylesheets/**/*.scss'],
        tasks: ['compileSCSS'],
        options: {
          spawns: false
        }
      },
      pug: {
        files: ['app/client/views/**/*.pug'],
        tasks: ['compilePUG'],
        options: {
          spawns: false
        }
      }
    },
    // Start the dev env with nodemon
    nodemon: {
      dev: {
        script: 'app.js',
        options: {
          env: {
            PORT: 9000
          },
          cwd: __dirname,
          watch: ['app/server/**/*.js', 'app.js'],
          callback: function (nodemon) {
            // Not sure what this does
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });

            // Fixes the Bunyan outputs
            var bunyan;
            nodemon.on('readable', function () {
              bunyan = grunt.util.spawn({
                cmd: './node_modules/bunyan/bin/bunyan',
                args: ['--output', 'short', '--color']
              }, function() {});

              bunyan.stdout.pipe(process.stdout);
              bunyan.stderr.pipe(process.stderr);

              this.stdout.pipe(bunyan.stdin);
              this.stderr.pipe(bunyan.stdin);
            });

            // Opens browser on initial server start
            nodemon.on('config:update', function () {
              // Delay before server listens on port
              setTimeout(function() {
                require('open')('http://localhost:9000');
              }, 1000);
            });
          }
        }
      }
    },
    concurrent: { // Run tasks concurently for dev
      compilation: ['concatJS', 'compileSCSS', 'compilePUG'],
      run: {
        tasks: ['watch', 'nodemon'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });


  /*****************************/
  /********** DEFAULT **********/
  /*****************************/
  // JS Tasks
  grunt.registerTask('minifyJS', ['concat', 'ngAnnotate', 'babel', 'uglify']);
  grunt.registerTask('concatJS', ['concat', 'ngAnnotate', 'babel']);

  // SCSS Task
  grunt.registerTask('minifySCSS',  ['sass:prod', 'postcss']);
  grunt.registerTask('compileSCSS', ['sass:dev', 'postcss']);

  // PUG Tasks
  grunt.registerTask('minifyPUG',   ['pug:prod']);
  grunt.registerTask('compilePUG',  ['pug:dev']);

  // Grunt Tasks
  grunt.registerTask('prod',  ['minifyJS', 'minifySCSS', 'minifyPUG']);
  grunt.registerTask('dev',   ['concurrent:compilation', 'concurrent:run']);
};
