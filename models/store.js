import { Schema, model, models } from "mongoose";

const StoreSchema = new Schema({
  name: {
    type: String,
    // unique: [true, "Store name Already Exists"],
    require: [true, "store name is Required"],
  },
  boardgames: {
    type: Array,
  },
  views: {
    type:Number
  }
}, {timestamps: true });

const Store = models.Store || model("Store", StoreSchema);

export default Store;
