import express from "express";
import mongoose from "mongoose";
import PostSchema from '../models/PostShema.js'
//import { postList }  from '../controllers/controller.js'
import controller from '../controllers/controller.js';
const { postList, createPost, getPostById, deletePostById, updatePostById } = controller;

const router = express.Router();

router.get("/", postList);

router.post("/", createPost);

router.patch("/:id", updatePostById);

router.delete("/:id", deletePostById);

router.get("/:id", getPostById);

export default router
