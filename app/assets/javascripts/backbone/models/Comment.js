var app = app || {}

app.Comment = Backbone.Model.extend({
  url: function (post_id){
    return '/posts/' + post_id + '/comments';

  },
  defaults: {
    twaddle: 'BlahBlah',
    post_id: 'id'
  },
  schema: {
            twaddle:       'Text',
        },
  parse: function (data){
    return data;
  }

});

