import peopleModel from "~~/server/models/people.model";
export default defineEventHandler(async (event) => {
  const body = readBody(event);
  const { _id, name } = body;
  const oldData = await peopleModel.findById(_id);
  await peopleModel.updateOne(oldData, { name })
  peopleModel.save();

  return { success: true };
});
