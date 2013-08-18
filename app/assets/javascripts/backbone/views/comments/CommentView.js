var app = app || {}

app.CommentView = Backbone.View.extend({
  tagName: 'li',
  initialize: function(){

  },

  render: function(){
    var template = Handlebars.compile(app.templates.blogCommentView);
    this.$el.html( template(this.model.toJSON() ));
    return this;
  }
});

