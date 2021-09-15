// import the mongoose schema
import Posts from "../models/posts.js";

// handlers for the routes (the logic)
// use async await

// all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Posts.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

// single post by _id
export const getPostById = async (req, res) => {
  try {
    const id = req.params.id;
    const query = await Posts.find({ _id: id });
    res.status(200).json(query);
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

// not working properly
export const createPosts = async (req, res) => {
  try {
    // extract from req.body
    const { jimmy } = req.body;

    let newPost = new Posts({
      jimmy,
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ success: false, message: error.message });
  }
};
