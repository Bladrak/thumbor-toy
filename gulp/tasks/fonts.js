/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
var gulp   = require('gulp');
var config = require('../config');

gulp.task('fonts', function() {
    return gulp
        .src(config.npmSrc + '/font-awesome-stylus/fonts/*')
        .pipe(gulp.dest(config.dest + '/fonts'))
    ;
});