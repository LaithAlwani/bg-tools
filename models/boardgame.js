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
    required: [true, "year is required"],
  },
  minPlayers: {
    type: Number,
    required: [true, "min players is required"],
  },
  maxPlayers: {
    type: Number,
    required: [true, "max players is required"],
  },
  minPlayTime: {
    type: Number,
    required: [true, "min playing time required"],
  },
  maxPlayTime: {
    type: Number,
    required: [true, "max playing time required"],
  },
  minAge: {
    type: Number,
    required: false,
  },
  description: {
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
  ]
});

const Boardgame = models.Boardgame || model("Boardgame", BoardgameSchema);

export default Boardgame;
