import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const Post = mongoose.model('post', postSchema);


export default Post