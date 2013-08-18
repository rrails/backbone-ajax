var app = app || {}

// Create a model for the posts
// why do you have to have defaults?
// what is the purpose of idAttribute
app.Post = Backbone.Model.extend({
  idAttribute: 'slug',
  urlRoot: '/posts',
  defaults: {
    id: 'id',
    title: 'Title',
    slug: 'Slug',
    content: 'Content',
    comments: []
  }
})