import { Schema, model, models } from "mongoose";

const FilesSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref:'User'
  },
  postTitle: {
    type: String,
    required: [true, 'post title is required']
  },
  boardgameId: {
    type: String,
    required:[true, 'boardgame id required']
  },
  images: {
    type: [String],
  },
  files: {
    type:[]
  },
  tag: {
    type:String
  },
  desc: {
    type: String,
  }
})

const File = models.File || model('File', FilesSchema);

export default File;