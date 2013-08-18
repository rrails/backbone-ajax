var app = app || {}

// Create a template for the home page blog post subview
app.PostListView = Backbone.View.extend({
  tagName: 'li',
  events:{
    'click': 'view'
  },

  initialize: function(){

  },

  render: function(){
    var template = Handlebars.compile(app.templates.blogList);
    this.$el.html( template(this.model.toJSON()));
    return this;
  },

  view: function () {
    app.router.navigate('posts/' + this.model.get('slug'), true);
    return false;
  }
});