var app = app || {}

// Create the app router

app.Router = Backbone.Router.extend({
  routes: {
    '':            'index',
    'posts/:id': 'getPost',
  },

  initialize: function(){
    this.posts = new app.Posts();
  },

  index: function(){
    //get all the posts and then display them
    var appView = new app.AppView({ collection: this.posts});
    if (this.posts.length !== 0) {
      appView.render();//may not this as it gets renders twice
    };
  },

  getPost: function(id){
    //get an individual post and display
    // var post = this.posts.get(id);
    var post = new app.Post({slug: id})
    postView = new app.PostView({model: post}); //we are rendering this in the initialise and therefore we dont have to keep the id
    post.fetch();
  },

})
