var gulp         = require('gulp'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    sass         = require('gulp-sass'),
    minifyCss    = require('gulp-minify-css'),
    del          = require('del'),
    imagemin     = require('gulp-imagemin'),
    sourcemaps   = require('gulp-sourcemaps'),
    babel        = require('gulp-babel'),
    browserSync  = require('browser-sync').create(),
    php          = require('gulp-connect-php'),
    util         = require('gulp-util');
var reload  = browserSync.reload;

gulp.task('default', ['clean'], function() {
    gulp.start('images', 'css', 'scss', 'js', 'scripts');
});

gulp.task('clean', function () {
    del(['scss', 'js/*', 'images']);
});

gulp.task('scss', function () {
    return gulp.src('web-src/scss/*.scss')
        .pipe(sourcemaps.init(''))
        .pipe(sass().on('error', sass.logError))
        .on('error', browserifyHandler)
        .pipe(autoprefixer('last 2 versions'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

gulp.task('images', function () {
    return gulp.src(['web-src/images/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('images/'))
        .pipe(browserSync.stream());
});


gulp.task('scripts', function() {
    return gulp.src(['web-src/js/*.js'])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .on('error', browserifyHandler)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('js/'))
        .pipe(browserSync.stream());
});

function browserifyHandler(err) {
    util.log(util.colors.red('Error: ' + err.message));
    this.end();
}

gulp.task('watch', function () {
    var css = gulp.watch('web-src/scss/*.scss', ['scss']),
        js = gulp.watch('web-src/js/*', ['scripts']);
});


gulp.task('css', function () {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
    ])
        .pipe(gulp.dest('css/'))
});

gulp.task('js', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
    ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('js/'));
});


gulp.task('serve', function () {

   browserSync.init({
       scriptPath: function (path, port, options) {
           return "/browser-sync/browser-sync-client.js";
       },
       socket: {
           domain: 'localhost:3000'
       },
       server: {
           baseDir: "./"
       },
       notify: false
   });

   var css = gulp.watch('web-src/scss/*.scss', ['scss']),
       js = gulp.watch('web-src/js/*', ['scripts']);
});

























