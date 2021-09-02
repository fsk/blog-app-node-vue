import express from "express";
//import { postList }  from '../controllers/controller.js'
import controller from '../controllers/controller.js';
const { postList, createPost, getPostById, deletePostById, updatePostById, getTxtFile } = controller;

const router = express.Router();

router.get("/", postList);

router.post("/", createPost);

router.patch("/:id", updatePostById);

router.delete("/:id", deletePostById);

router.get("/:id", getPostById);


router.post("/file", getTxtFile);

export default router
