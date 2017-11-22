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
        src: ['app/client/javascripts.js'],
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
          cwd: 'app/client',
          src: 'index.pug',
          dest: 'resources',
          expand: true,
          ext: '.html'
        }]
      },
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
        files: ['app/client/index.pug'],
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
  grunt.registerTask('concatJS', ['concat', 'ngAnnotate', 'babel']);

  // SCSS Task
  grunt.registerTask('compileSCSS', ['sass:dev', 'postcss']);

  // PUG Tasks
  grunt.registerTask('compilePUG',  ['pug:dev']);

  // Grunt Tasks
  grunt.registerTask('dev',   ['concurrent:compilation', 'concurrent:run']);
};

// TODO: remove dev