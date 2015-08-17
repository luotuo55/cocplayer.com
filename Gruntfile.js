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

    // ���ذ��� "uglify" ����Ĳ����
    grunt.loadNpmTasks('grunt-contrib-coffee');

    // Ĭ�ϱ�ִ�е������б�
    grunt.registerTask('default', ['coffee']);

};