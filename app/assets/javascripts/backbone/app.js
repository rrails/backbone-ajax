// control the include order of our backbone app

//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

var app = app || {};

  // Object to hold the template HTML. These should be in html files. you should not have html in javascript file.
  // include the scripts
  // you can have a separate folder with templates that can be shared with rails. Not covered in class but can be done.
  app.templates = {
    appView: '<h1>My Posts</h1><ul id="posts"></ul>',
    blogList: '{{title}}',
    blogView: '<div class="post"><h1 class="title">{{title}}</h1><h3 class="slug">{{slug}}</h3><div class="content">{{{content}}}<ul id="com"><li type="button">Comment</li></ul></div></div>',
    blogCommentView: '{{twaddle}}',
    commentNew: '<h1 class="title">New Comment</h1>'
  };

$(document).ready(function(){

  app.router = new app.Router();
  Backbone.history.start({pushState: Modernizr.history});


  });
