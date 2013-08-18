var app = app || {}

app.Comments = Backbone.Collection.extend({
  model: app.Comment,

  post_id: null,

  url: function(post_id){
    return '/posts/' + post_id + '/comments';
    // return '/posts/' + this.model.get(post_id) + '/comments';
  },
  parse: function (data){
    return data;
  }

});