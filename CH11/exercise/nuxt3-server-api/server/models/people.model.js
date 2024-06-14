import mongoose from "mongoose";

// schema: api 欄位格式
const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: String,
  },
});

const people = mongoose.model("mandy-test-nuxt3", schema, "people");

// people model
export default people;
