module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
          files: {
            'dest/output.min.js': ['Gruntfile.js', 'src/components/About.js', 'src/components/Image.js', 'src/components/Jumbotron.js', 'src/components/MenuBars.js', 'src/components/MobileNavbar.js', 'src/components/NavbarMain.js', 'src/components/Project.js', 'src/components/Projects.js', 'src/components/WebNavbar.js']
          },
          options: {
            mangle: false,
            drop_console: true,
            beautify: true,
            globals: {
              jQuery: true
            }
          }
        },
        watch: {
          files: ['<%= jshint.files %>'],
          tasks: ['jshint']
        }
      });
    
      grunt.loadNpmTasks('grunt-contrib-uglify');

      grunt.registerTask('default', ['jshint']);
    
};