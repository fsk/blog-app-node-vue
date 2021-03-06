import Post from "../models/PostShema.js";
import PostSchema from "../models/PostShema.js";
//import download from "download";

import fs from "fs";
import fastcsv from "fast-csv";

const ws = fs.createWriteStream("bezkoder_mongodb_fastcsv.csv");

const postList = async (req, res) => {
  try {
    const allPosts = await PostSchema.find({});
    res.json(allPosts);
  } catch (error) {
    res.json({ error: `${error}` });
  }
};

const createPost = async (req, res) => {
  try {
    const postInfo = req.body;
    const createdPost = await PostSchema.create(postInfo);
    res.status(201).json(createdPost);
  } catch (error) {
    res.json({ message: `${error}` });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: "Post Bulunamadi" });
    res.status(200).json(post);
  } catch (error) {
    res.json({ message: `${error}` });
  }
};

const deletePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete({ _id: id });
    if (post !== undefined) {
      return res.status(404).json({ message: "Post Bulunamadi" });
    }
    res.json({ message: `${id} id li postunu sildiniz` });
  } catch (error) {
    res.json({ message: `${error}` });
  }
};

const updatePostById = async (req, res) => {
  try {
    const result = await PostSchema.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (result) {
      return res.json(result);
    } else {
      return res.status(404).json({
        mesaj: "Post bulunamadi",
      });
    }
  } catch (error) {
    res.json({ message: `${error}` });
  }
};

const getTxtFile = async (req, res) => {
  
    const allPosts = await PostSchema.find({});
    // console.log(allPosts);
    // console.log(typeof allPosts);
    const json = JSON.stringify(allPosts);
    const buffer = Buffer.from(json);
    console.log(typeof buffer);

    // fs.writeFile('helloworld.txt', allPosts, function (err) {
    //   if (err) return console.log(err);
    //   console.log('Hello World > helloworld.txt');
    // });

    

    fs.writeFile('logs.txt', buffer, err => {
      if (err) throw err;

      console.log("Logs saved.!");
      //file written successfully
    })

};

export default {
  postList,
  createPost,
  getPostById,
  deletePostById,
  updatePostById,
  getTxtFile,
};
