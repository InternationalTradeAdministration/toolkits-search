var gulp = require('gulp');
var exec = require('child_process').exec;

const sites = ['environmental_solutions', 'oil_and_gas', 'renewable_energy', 'next_gen', 'smart_grid', 'civil_nuclear'];

sites.forEach((site) => {
  gulp.task(`start:${site}`, () => {
    .exec(`node_modules/.bin/webpack-dev-server --config ./sites/${site}/webpack.dev.js`, (err, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
    });
  });

  gulp.task(`build:${site}`, () => {
		exec(`node_modules/.bin/webpack --config ./sites/${site}/webpack.prod.js`, (err, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
    });
  });
});

gulp.task('build_all', () => {
  sites.forEach((site) => {
    exec(`node_modules/.bin/webpack --config ./sites/${site}/webpack.prod.js`, (err, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
    });
  });
});