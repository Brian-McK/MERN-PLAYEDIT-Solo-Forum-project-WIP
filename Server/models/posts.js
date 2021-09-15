import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: new Date()
  },
  jimmy: {
    type: String,
    default: "test"
  }
});

const Posts = mongoose.model("Posts", postSchema);

export default Posts;
