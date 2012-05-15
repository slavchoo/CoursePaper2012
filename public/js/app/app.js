(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  _.templateSettings = {
    evaluate: /<@([\s\S]+?)@>/g,
    interpolate: /<@=([\s\S]+?)@>/g,
    escape: /<@-([\s\S]+?)@>/g
  };

  $(function() {
    var AlbumView, AppState, Controller, PostPage, PostView, SitePage, Views, controller;
    Controller = (function(_super) {

      __extends(Controller, _super);

      Controller.name = 'Controller';

      function Controller() {
        return Controller.__super__.constructor.apply(this, arguments);
      }

      Controller.prototype.routes = {
        "": "index",
        "!/": "index",
        "!/news": "news",
        "!/music": "music",
        "!/video": "video",
        "!/artists": "artists",
        "!/post/:id": "showPost"
      };

      Controller.prototype.index = function() {
        if (Views.page != null) {
          return Views.page.render();
        }
      };

      Controller.prototype.news = function() {
        return console.log("news");
      };

      Controller.prototype.music = function() {
        return console.log("music");
      };

      Controller.prototype.video = function() {
        return console.log("videos");
      };

      Controller.prototype.artists = function() {
        return console.log("artists");
      };

      Controller.prototype.showPost = function(id) {
        var post;
        if (Views.postPage != null) {
          post = new Post({
            _id: id
          });
          Views.postPage.setModel(post);
          return post.fetch();
        }
      };

      return Controller;

    })(Backbone.Router);
    AppState = {
      username: ""
    };
    Views = {};
    SitePage = (function(_super) {

      __extends(SitePage, _super);

      SitePage.name = 'SitePage';

      SitePage.prototype.el = $("#mainContainer");

      SitePage.prototype.posts = [];

      SitePage.prototype.albums = [];

      SitePage.prototype.events = {};

      function SitePage() {
        this.posts = new PostCollection();
        this.posts.bind('add', this.addPost, this);
        this.posts.bind('all', this.addAllPosts, this);
        this.albums = new AlbumCollection();
        this.albums.bind('add', this.addAlbum, this);
        this.albums.bind('all', this.addAllAlbums, this);
      }

      SitePage.prototype.render = function() {
        this.posts.fetch();
        this.albums.fetch();
        $(this.el).empty();
        if (!$(this.el).find('#NewsContainer').length) {
          $(this.el).append(_.template($('#NewsContainer').html()));
        }
        if (!$(this.el).find('#AlbumContainer').length) {
          return $(this.el).append(_.template($('#AlbumContainer').html()));
        }
      };

      SitePage.prototype.addPost = function(post) {
        var container, view;
        view = new PostView({
          model: post
        });
        container = $(this.el).find('.news');
        return container.append(view.render().el);
      };

      SitePage.prototype.addAllPosts = function() {
        return this.posts.each(this.addPost, this);
      };

      SitePage.prototype.addAlbum = function(album) {
        var container, view;
        view = new AlbumView({
          model: album
        });
        container = $(this.el).find('.albums');
        return container.append(view.render().el);
      };

      SitePage.prototype.addAllAlbums = function() {
        return this.albums.each(this.addAlbum, this);
      };

      return SitePage;

    })(Backbone.View);
    PostPage = (function(_super) {

      __extends(PostPage, _super);

      PostPage.name = 'PostPage';

      PostPage.prototype.el = $("#mainContainer");

      PostPage.prototype.template = $("#PostFull");

      PostPage.prototype.post = {};

      function PostPage() {}

      PostPage.prototype.render = function() {
        console.log(this.post.toJSON());
        return $(this.el).html(_.template(this.template.html(), this.post.toJSON()));
      };

      PostPage.prototype.setModel = function(model) {
        this.post = model;
        return this.post.bind('change', this.render, this);
      };

      return PostPage;

    })(Backbone.View);
    PostView = (function(_super) {

      __extends(PostView, _super);

      PostView.name = 'PostView';

      function PostView() {
        return PostView.__super__.constructor.apply(this, arguments);
      }

      PostView.prototype.tagName = "div";

      PostView.prototype.className = "span4 blog";

      PostView.prototype.template = $("#PostView");

      PostView.prototype.events = {
        "click .view-post": 'displayPost'
      };

      PostView.prototype.displayPost = function(e) {
        controller.navigate("!/post/" + (this.model.get('_id')), true);
        return false;
      };

      PostView.prototype.render = function() {
        this.$el.html(_.template(this.template.html(), this.model.toJSON()));
        return this;
      };

      return PostView;

    })(Backbone.View);
    AlbumView = (function(_super) {

      __extends(AlbumView, _super);

      AlbumView.name = 'AlbumView';

      function AlbumView() {
        return AlbumView.__super__.constructor.apply(this, arguments);
      }

      AlbumView.prototype.tagName = 'div';

      AlbumView.prototype.className = 'span4 blog';

      AlbumView.prototype.template = _.template($("#AlbumView").html());

      AlbumView.prototype.render = function() {
        this.$el.html(this.template());
        return this;
      };

      return AlbumView;

    })(Backbone.View);
    Views = {
      page: new SitePage(),
      postPage: new PostPage()
    };
    controller = new Controller();
    return Backbone.history.start();
  });

}).call(this);
