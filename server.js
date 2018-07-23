var history = require('connect-history-api-fallback');

var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();

app.use(history());
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);
