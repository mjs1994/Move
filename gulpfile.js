var gulp   = require('gulp'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify');

gulp.task('build', function() {

	gulp.src('js/move.js')
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('js/build'));

});

gulp.task('default', ['build']);