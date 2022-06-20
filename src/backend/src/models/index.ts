import { getModelForClass } from "@typegoose/typegoose";
import UserSchema from "./user";

export const User = getModelForClass(UserSchema);
