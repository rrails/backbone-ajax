var app = app || {}

// Create an individual post view object
app.PostView = Backbone.View.extend({
  el: '#main',
  tagName: 'li',
  events:{
    'click li': 'getComments'
  },
  initialize: function(){
  this.model.on('change', this.render, this);

  },
  render: function(){
    var template = Handlebars.compile(app.templates.blogView);
    this.$el.html( template(this.model.toJSON() ));
    return this;
  },

  getComments: function(id){
    post = this;
    post.comments = new app.Comments();
    commentView = new app.CommentListView({collection: post.comments})
    post.post_id = post.model.get('id');
    post.comments.url = post.comments.url(post.post_id);
    post.comments.fetch();
          // view.renderCommentForm(view.post_id);

    return false;

  }
});
