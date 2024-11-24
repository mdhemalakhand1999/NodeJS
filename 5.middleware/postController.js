exports.posts = (req, res) => {
  const { category, page, filter } = req.query;
  res.send(
    "<h2>Post fetch successfully. Category: " +
      category +
      ", Page: " +
      page +
      ", Filter: " +
      filter +
      "</h2>"
  );
};

exports.getSinglePost = (req, res) => {
  res.send("Post ID: " + req.params.postID);
};

exports.createNewPost = (req, res) => {
  res.send("Post created");
};

exports.updateSinglePost = (req, res) => {
  res.send("Post updated: " + req.params.postID);
};

exports.deletePost = (req, res) => {
  res.send("Post deleted: " + req.params.postID);
};
