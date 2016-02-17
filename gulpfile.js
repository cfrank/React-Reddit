// Needed for using ES6 with gulp
"use strict";

let gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    babel = require('babelify'),
    sass = require('gulp-sass');

// Source directories
let source_dir = 'application/',
    js_source = source_dir + 'js/',
    css_source = source_dir + 'css/';

// Dist directories
let build_dir = 'application/',
    js_build = build_dir + 'js/build/',
    css_build = build_dir + 'css/build/';

var sourcePath = {
    javascript: js_source + 'app.js',
    css: css_source
};

var buildPath = {
    javascript: js_build,
    css: css_build
};

const JS_FILE_NAME = "build.js";
const CSS_FILE_NAME = "build.css";

gulp.task('javascript', function()
{
    // Set up the browserify instance
    var wf = watchify(
        browserify({
            entries: sourcePath.javascript,
            debug: true,
            extensions: [' ', 'js', 'jsx']
        }).transform(babel)
    );

    function bundle(){
        wf.bundle()
            .on('error', function(err){
                console.error(err);
                console.log('There has been an error');
                this.emit('end');
            })
            .pipe(source(JS_FILE_NAME))
            .pipe(buffer())
            .pipe(gulp.dest(buildPath.javascript));
    }

    wf.on('update', function(){
        console.log('-> bundling...');
        bundle();
    });

    bundle();
});

gulp.task('sass', function()
{
    gulp.src(sourcePath.css + '**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(rename(CSS_FILE_NAME))
        .pipe(buffer())
        .pipe(gulp.dest(buildPath.css));
});

// Watch for file changes and send them to respective functions
gulp.task('watch', function()
{
    // Sass
    gulp.watch(sourcePath.css + '**/*.scss', ['sass']);
});

gulp.task('default', ['javascript', 'sass', 'watch']);
