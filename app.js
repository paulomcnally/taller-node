var express = require('express');
var enrouten = require('express-enrouten');
var adaro = require('adaro');
var app = express();

// assets
app.use(express.static('public'));

// controllers
app.use(enrouten({
  directory: 'controllers'
}));

// views
var options = {
  helpers: [
    'dustjs-helpers-gravatar'
  ]
};

app.engine('dust', adaro.dust(options));
app.set('view engine', 'dust');

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
