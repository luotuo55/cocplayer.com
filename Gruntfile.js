module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        coffee: {
            compileWithMaps: {
                options: {
                    sourceMap: true
                },
                files: {
                    'cocplayer/routes/home.js': 'src/back/routes/home.coffee' // 1:1 compile
                }
            }
        }
    });

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-coffee');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['coffee']);

};