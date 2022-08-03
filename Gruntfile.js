const path 	= require('path');


/**
* ----------------------------------------
* @description grunt setup (main wrapper)
* ----------------------------------------
*/
module.exports = grunt => {
    'use strict';

	const projectConfig = {
		name    : 'doatkolom-theme', 			// should be the text domain of the project (todo: spilt it)
		srcDir  : './', 						// the source directory of the plugin
		distDir : `../dist/doatkolom-theme/`,
        version : '1.0.0'	// where to save the built file
	};
	
    
    grunt.initConfig({

		// clean dist directory file
		clean: {
			options: { force: true },
			dist: [
				projectConfig.distDir + '/**',
				projectConfig.distDir.replace( /\/$/, '' ) + '.zip',
			],
		},

		// Copying project files to ../dist/ directory
		copy: {
			dist: {
				files: [ {
					expand: true,
					src: [
						'' + projectConfig.srcDir + '**',
						'!' + projectConfig.srcDir + 'Gruntfile.js',
						'!' + projectConfig.srcDir + 'scripts/**',
						'!' + projectConfig.srcDir + 'package.json',
						'!' + projectConfig.srcDir + 'package-lock.json',
						'!' + projectConfig.srcDir + 'node_modules/**',
						'!' + projectConfig.srcDir + '**/dev-*/**',
						'!' + projectConfig.srcDir + '**/*-test/**',
						'!' + projectConfig.srcDir + '**/*-beta/**',
						'!' + projectConfig.srcDir + '**/scss/**',
						'!' + projectConfig.srcDir + '**/sass/**',
						'!' + projectConfig.srcDir + '**/src/**',
						'!' + projectConfig.srcDir + '**/.*',
						'!' + projectConfig.srcDir + '**/build/*.txt',
						'!' + projectConfig.srcDir + '**/*.map',
						'!' + projectConfig.srcDir + '**/*.config',
						'!' + projectConfig.srcDir + 'tsconfig.json',
						'!' + projectConfig.srcDir + 'build-package/**',
						'!' + projectConfig.srcDir + 'none',
						'!' + projectConfig.srcDir + 'Installable',
						'!' + projectConfig.srcDir + 'mix-manifest.json',
						'!' + projectConfig.srcDir + 'postcss.config.js',
						'!' + projectConfig.srcDir + 'README.md',
						'!' + projectConfig.srcDir + 'tailwind.config.js',
						'!' + projectConfig.srcDir + 'webpack.mix.js',
					],
					dest: projectConfig.distDir,
				} ],
			},
		},
		
		// Compress Build Files into ${project}.zip
		compress: {
			dist: {
				options: {
					force: true,
					mode: 'zip',
					archive: projectConfig.distDir.replace( projectConfig.name, '' ) + projectConfig.name + '-' + projectConfig.version + '.zip',
				},
				expand: true,
				cwd: projectConfig.distDir,
				src: [ '**' ],
				dest: '../' + projectConfig.name,
			},
		},

/**
* -------------------------------------
* @description print ASCII text 
* @see https://fsymbols.com/generators/carty/
* -------------------------------------
*/
		
screen: {
    begin: `
	DoatKolom Software
	# Project   : ${projectConfig.name}
	# Dist      : ${projectConfig.distDir}
	# Version   : ${projectConfig.version}`.cyan,
	textdomainchecking: `Checking textdomain [${projectConfig.name}]`.cyan,
	minifying:`Minifying js & css files.`.cyan,
	finish: `
╭─────────────────────────────────────────────────────────────────╮
│                                                                 │
│                      All tasks completed.                       │
│   Built files & Installable zip copied to the dist directory.   │
│                     ~ DoatKolom Software ~                      │
│                                                                 │
╰─────────────────────────────────────────────────────────────────╯
`.green

}

    });
    
    /**
    * ----------------------------------
    * @description Register grunt tasks 
    * ----------------------------------
    */
    require('load-grunt-tasks')(grunt);
    grunt.registerMultiTask( 'screen', function() { grunt.log.writeln( this.data ) });
	grunt.registerTask( 'build', ['screen:begin', 'clean', 'copy', 'compress',  'screen:finish'])
    
};