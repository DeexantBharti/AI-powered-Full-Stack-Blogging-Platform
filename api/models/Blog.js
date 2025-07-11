import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{type:String,required:true },
    subTitle:{type:String},
    description:{type:String, required:true},
    category:{type:String, required:true},
    image:{type:String,required:true},
    isPublished: {type:Boolean,required:true},
    author : {type:mongoose.Schema.Types.ObjectId, ref:"user"},
    visibility:{type:String,enum:['public','private'],default:'public'},

},{timestamps:true});

const Blog = mongoose.model('blog',blogSchema);
export default Blog;
