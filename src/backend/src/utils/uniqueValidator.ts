// @ts-nocheck
export default async function uniqueValidator(fieldName, fieldValue) {
  const search = {};
  search[fieldName] = fieldValue;
  console.log("This is: ", this)
  try {
    const doc = await this.constructor.findOne(search);
    console.log("This doc: ", doc)
    if (!doc) return true;
    return false;
  } catch (error) {
    console.log("Unique validation error")
    console.log("THE ERROR IS", error)
    return false;
  }
}
