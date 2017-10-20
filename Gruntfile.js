module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
          files: ['Gruntfile.js', 'src/components/About.js', 'src/components/Image.js', 'src/components/Jumbotron.js', 'src/components/MenuBars.js', 'src/components/MobileNavbar.js', 'src/components/NavbarMain.js', 'src/components/Project.js', 'src/components/Projects.js', 'src/components/WebNavbar.js'],
          options: {
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
    
      grunt.loadNpmTasks('grunt-contrib-jshint');
      grunt.loadNpmTasks('grunt-contrib-watch');
    
      grunt.registerTask('default', ['jshint']);
    
};