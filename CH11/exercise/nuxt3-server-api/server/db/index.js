import mongoose from "mongoose";

export default async (_nitroApp) => {
  try {
    mongoose.set("strictQuery", true);  // 嚴格模式
    await mongoose.connect(
      "mongodb+srv://mandy3152618:rZD0mlRbeBy2qo7D@mandy-nuxt3.xzlstqk.mongodb.net/mandy-test-nuxt3"
    );
    console.log("連接 MongoDB");
  } catch (e) {
    console.error("Error MongoDB =>", e);
  }
};
