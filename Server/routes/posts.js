import express from "express";

// import from controller
import {
  getPosts,
  getPostById,
  createPosts,
  deletePostById,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", createPosts);
router.delete("/:id", deletePostById);

export default router;
