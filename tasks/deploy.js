var ghPages = require('gh-pages');
var path = require('path');

var root = path.join(__dirname, '..');

ghPages.publish(path.join(root, 'dist'));
