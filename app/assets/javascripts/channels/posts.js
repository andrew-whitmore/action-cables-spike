App.messages = App.cable.subscriptions.create('PostsChannel', {
  received: function(data) {
    return $('#posts').append(this.renderPost(data));
  },

  renderPost: function(data) {
    var post = $('<div class="bs-callout bs-callout-primary">');
    post.append('<a class="pull-right" rel="nofollow" data-method="delete" href="/posts/' + data.post.id + '">X</a>');
    post.append('<h5><b>' + data.post.title + '</b></h5>');
    post.append('<p>' + data.post.body + '</p>');
    post.append("<h6 class='pull-right'><b>Posted by:</b>&nbsp;<small>" + data.owner + "</small></h6>");
    return post;
  }
});
