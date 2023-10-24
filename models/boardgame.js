import { Schema, model, models } from "mongoose";

const BoardgameSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  image: {
    type: String,
    required: [true, "image is required"],
  },
  thumbnail: {
    type: String,
    required: [true, "image is required"],
  },
  title: {
    type: String,
    required: [true, "title is required"],
  },
  year: {
    type: String,
    required:true
  },
  minPlayers: {
    type: Number,
    required:true,
  },
  maxPlayers: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
  },
  bggId: {
    type: String,
    required: [true, "bgg id required"],
  },
  bggLink: {
    type: String,
    required: [true, "bgg link required"],
  },
  files: [
    {
      type: Schema.Types.ObjectId,
      ref: "File",
    },
  ],
  tag: {
    type: [String],
  },
});

const Boardgame = models.Boardgame || model("Boardgame", BoardgameSchema);

export default Boardgame;
