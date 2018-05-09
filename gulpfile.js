var gulp = require('gulp');
var exec = require('gulp-exec');

const sites = ['environmental_solutions', 'oil_and_gas', 'renewable_energy', 'next_gen', 'smart_grid', 'civil_nuclear'];

sites.forEach((site) => {

  gulp.task(`start:${site}`, () => {
    return gulp.src('./**/**')
    	.pipe(exec(`node_modules/.bin/webpack-dev-server --config ./sites/${site}/webpack.dev.js`))
    	.pipe(exec.reporter());
  });

  gulp.task(`build:${site}`, () => {
		return gulp.src('./**/**')
    	.pipe(exec(`node_modules/.bin/webpack --config ./sites/${site}/webpack.prod.js`))
    	.pipe(exec.reporter());
  });

});