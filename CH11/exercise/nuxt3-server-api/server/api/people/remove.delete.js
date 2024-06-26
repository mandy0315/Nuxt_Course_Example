import peopleModel from "~~/server/models/people.model";
export default defineEventHandler(async (event) => {
  const body = readBody(event);
  const { _id } = body;
  await peopleModel.deleteOne(_id);
  return { success: true };
});
