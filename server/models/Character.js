import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const characterSchema = new Schema ({
  name: String,
  height: Number,
  weight: Number
});

const CharacterModel = model('Character', characterSchema);

export default CharacterModel;