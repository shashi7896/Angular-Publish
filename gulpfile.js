var gulp = require('gulp'),
inlineNg2Template = require('gulp-inline-ng2-template');
// inlineCss = require('gulp-inline-css');

gulp.task('templates', function(){
    var result = gulp.src(['./src/app/**/*.ts'])
    .pipe(inlineNg2Template({
        useRelativePaths : true
    }));

return result.pipe(gulp.dest('./dist/app'));
});

//Copying files that are needed for package//
gulp.src(['./src/assets/**/*']).pipe(gulp.dest('./dist/assets'));
gulp.src(['./src/index.ts']).pipe(gulp.dest('./dist'));
gulp.src(['./src/public_api.ts']).pipe(gulp.dest('./dist'));
gulp.src(['./.npmignore']).pipe(gulp.dest('./dist'));
gulp.src(['./package.json']).pipe(gulp.dest('./dist'));

gulp.task('default', function(){
    return gulp.src('./*.html')
    // .pipe(inlineCss())
    .pipe(gulp.dest('build/'));
});