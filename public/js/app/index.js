(function() {
  var Controller, controller,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Controller = (function(_super) {

    __extends(Controller, _super);

    Controller.name = 'Controller';

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.routes = {
      "": "start",
      "!/": "srart",
      "amin": "admin"
    };

    Controller.prototype.start = function() {
      return console.log("start");
    };

    Controller.prototype.admin = function() {
      return console.log("admin");
    };

    return Controller;

  })(Backbone.Router);

  controller = new Controller();

  Backbone.history.start();

}).call(this);
