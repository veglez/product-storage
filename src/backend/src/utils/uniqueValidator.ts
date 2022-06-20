// @ts-nocheck
import UserSchema from "../models/user";

export default async function uniqueValidator(
  fieldName: string,
  fieldValue: string
) {
  const search = {};
  search[fieldName] = fieldValue;
  try {
    const doc = await this.constructor.findOne(search);
    if (!doc) return true;
    return false;
  } catch (error) {
    return false;
  }
}
