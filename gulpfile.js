const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const imagemin = require('gulp-imagemin');
const shell = require('gulp-shell');

// Compiles SCSS To CSS
gulp.task(
	'styles',
	gulp.series(() => {
		return gulp
			.src('./src/scss/**/*.scss')
			.pipe(
				sass({
					outputStyle: 'compressed'
				}).on('error', sass.logError)
			)
			.pipe(
				autoprefixer()
			)
            .pipe(gulp.dest('./public/css'))
            .pipe(browserSync.stream());
	})
);

// Browser-sync to get live reload and sync with mobile devices
gulp.task(
	'browser-sync',
	gulp.series(function() {
		browserSync.init({
			server: './public',
			notify: false,
			open: false // set to true if you want the browser to open automatically
		});
	})
);

// Minimise Your Images
gulp.task(
	'imagemin',
	gulp.series(function minizingImages() {
		return gulp
			.src('./src/img/**/*')
			.pipe(
				imagemin([
					imagemin.gifsicle({ interlaced: true }),
					imagemin.jpegtran({ progressive: true }),
					imagemin.optipng({ optimizationLevel: 5 }),
					imagemin.svgo({
						plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
					})
				])
			)
			.pipe(gulp.dest('./public/img'));
	})
);

gulp.task(
	'webpack', 
	gulp.series(function() {
		return gulp
		.src('*.js', {read: false})
		.pipe(shell([
			'webpack'
		]))
		.pipe(browserSync.stream());
	})
)

gulp.task(
	'default',
	gulp.parallel([
		gulp.series([
			'styles',
			'webpack',
			function runningWatch() {
				gulp.watch('./src/scss/**/*', gulp.parallel('styles'));
				gulp.watch('./src/js/**/*', gulp.parallel('webpack'));
                gulp.watch(['./public/**/*', './public/*']).on('change', reload);

			}
        ]),
        gulp.series(['browser-sync'])
	])
);