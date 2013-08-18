var app = app || {}

app.CommentListView = Backbone.View.extend({
  tagName: 'li',

  initialize: function(){
    this.list = $('#com');
    this.collection.on('add', this.render, this);
  },

  render: function(comment){

    var commview = new app.CommentView({model: comment});
    this.list.append(commview.render().el);

    // var template = Handlebars.compile(app.templates.blogCommentView);
    // this.$el.html( template(comment.toJSON() ));
    // $('#com').append(this.el);
    return this;

  }
});