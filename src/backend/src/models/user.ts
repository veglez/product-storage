import { prop } from "@typegoose/typegoose";
import uniqueValidator from "../utils/uniqueValidator";
import MetaDataSchema from "./metadata";

class UserSchema extends MetaDataSchema {
  @prop({ required: true })
  public name!: string;

  @prop({ required: true })
  public password!: string;

  @prop({
    required: true,
    validate: {
      validator: (value: string) => {
        return uniqueValidator("email", value);
      },
      message: "Email already exists",
    },
  })
  public email!: string;

  @prop({ required: true })
  public role!: string;
}

export default UserSchema;
