var app = app || {}

// Create the app/home view
app.AppView = Backbone.View.extend({
  el: '#main',
  initialize: function(){
    this.$el.html(app.templates.appView);
    this.list = $('#posts');
    // this is setting the event
    this.collection.on('add', this.renderItem, this);

    if (this.collection.length === 0) {
      this.collection.fetch();
    }
  },

  renderItem: function(post) {
    var view = new app.PostListView({model: post});

    this.list.append(view.render().el);

    // view.render()
    // this.list.append(view.el);
    // this.list.append(view.render().$el); The $
    // $('#posts').append(view.render().el); - if we don't pass this in line 10
  },

  render: function(){
    //render the home view. i have changed the view to do PostView
    this.collection.each(function(post){
      this.renderItem(post)
    },this);
    return this;
  }

});