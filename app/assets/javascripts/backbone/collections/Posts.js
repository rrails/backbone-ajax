var app = app || {}

// Create a collection of blog posts
//the type of collection goes in here.
app.Posts = Backbone.Collection.extend({
  model: app.Post,
  url: '/posts'
});