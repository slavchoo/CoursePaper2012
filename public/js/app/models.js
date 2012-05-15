(function() {
  var Album, AlbumCollection, Post, PostCollection, Track, TrackCollection, User, UserColection,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Post = (function(_super) {

    __extends(Post, _super);

    Post.name = 'Post';

    function Post() {
      return Post.__super__.constructor.apply(this, arguments);
    }

    Post.prototype.urlRoot = '/post/';

    Post.prototype.url = function() {
      return this.urlRoot + this.get('_id');
    };

    return Post;

  })(Backbone.Model);

  window.Post = Post;

  PostCollection = (function(_super) {

    __extends(PostCollection, _super);

    PostCollection.name = 'PostCollection';

    function PostCollection() {
      return PostCollection.__super__.constructor.apply(this, arguments);
    }

    PostCollection.prototype.model = Post;

    PostCollection.prototype.url = '/post';

    return PostCollection;

  })(Backbone.Collection);

  window.PostCollection = PostCollection;

  User = (function(_super) {

    __extends(User, _super);

    User.name = 'User';

    function User() {
      return User.__super__.constructor.apply(this, arguments);
    }

    User.prototype.urlRoot = '/user';

    return User;

  })(Backbone.Model);

  window.User = User;

  UserColection = (function(_super) {

    __extends(UserColection, _super);

    UserColection.name = 'UserColection';

    function UserColection() {
      return UserColection.__super__.constructor.apply(this, arguments);
    }

    UserColection.prototype.model = User;

    UserColection.prototype.url = '/user';

    return UserColection;

  })(Backbone.Collection);

  window.UserColection = UserColection;

  Track = (function(_super) {

    __extends(Track, _super);

    Track.name = 'Track';

    function Track() {
      return Track.__super__.constructor.apply(this, arguments);
    }

    Track.prototype.urlRoot = '/track';

    return Track;

  })(Backbone.Model);

  window.Track = Track;

  TrackCollection = (function(_super) {

    __extends(TrackCollection, _super);

    TrackCollection.name = 'TrackCollection';

    function TrackCollection() {
      return TrackCollection.__super__.constructor.apply(this, arguments);
    }

    TrackCollection.prototype.model = Track;

    TrackCollection.prototype.url = '/track';

    return TrackCollection;

  })(Backbone.Collection);

  window.TrackCollection = TrackCollection;

  Album = (function(_super) {

    __extends(Album, _super);

    Album.name = 'Album';

    function Album() {
      return Album.__super__.constructor.apply(this, arguments);
    }

    Album.prototype.urlRoot = '/album';

    return Album;

  })(Backbone.Model);

  window.Album = Album;

  AlbumCollection = (function(_super) {

    __extends(AlbumCollection, _super);

    AlbumCollection.name = 'AlbumCollection';

    function AlbumCollection() {
      return AlbumCollection.__super__.constructor.apply(this, arguments);
    }

    AlbumCollection.prototype.model = Album;

    AlbumCollection.prototype.url = '/album';

    return AlbumCollection;

  })(Backbone.Collection);

  window.AlbumCollection = AlbumCollection;

}).call(this);
