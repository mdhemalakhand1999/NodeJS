const {
  posts,
  getSinglePost,
  createNewPost,
  updateSinglePost,
  deletePost,
} = require("./postController");

const postRouter = require("express").Router();

// Query String.
postRouter.get("/", posts);

// Dynamic parameter.
postRouter.get("/:postID", getSinglePost);

postRouter.post("/", createNewPost);

postRouter.put("/:postID", updateSinglePost);

postRouter.delete("/:postID", deletePost);

module.exports = postRouter;
