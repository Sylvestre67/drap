module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "static/dist/css/main.min.css": "static/src/less/main.less" // destination file and source file
        }
      }
    },

	uglify: {
	  my_target: {
		files: {
		  "static/dist/js/dap.min.js": ["static/src/js/*.js"]
		}
	  }
  	},

    watch: {
      styles: {
        files: ['static/src/less/*.less','static/src/js/*.js','templates/*.html','templates/**/*.html','static/views/*.html','static/views/**/*.html'], // which files to watch
        tasks: ['less','uglify'],
        options: {
          nospawn: true,
		  livereload: true,
        }
      }
    }
  });

  grunt.registerTask('default', ['less','uglify','watch']);

};
