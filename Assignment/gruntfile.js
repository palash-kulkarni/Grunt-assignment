module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      css: {
        src: ['css/*.css'],
        dest: 'tmp/all.css'
      },
      js: {
        src: ['javascript/*.js'],
        dest: 'tmp/all.js'
      }
    },
    uglify: {
      dist: {
        files: {
         'src/all.min.js': ['tmp/all.js']
        }
      }
    },
    inline: {
      dist:{
        src: ['main.html'],
        dest: ['build/final.html']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-inline');

  grunt.registerTask('default', ['concat','uglify','inline']);
};