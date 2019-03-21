// __Dependencies__
var baucis = require('baucis');
var deco = require('deco');
var path = require('path')
var decorators = deco.require(path.join(__dirname, 'src'), [ 'controller', 'api' ]).hash;

baucis.Controller.decorators(decorators.controller);
baucis.Api.decorators(decorators.api);
