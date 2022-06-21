import { prop } from "@typegoose/typegoose";
import { Types } from "mongoose";
import uniqueValidator from "../../utils/uniqueValidator";
import AttributeSchema from "./attribute";
import { category_error_messages } from "../../config/messages/errors_models";
// import autopopulate from "mongoose-autopopulate";

// @plugin(autopopulate as any)
class CategorySchema {
  @prop({
    required: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: async function (value: string) { return uniqueValidator.bind(this, "name", value) },      
      message: category_error_messages.name,
    },
  })
  public name!: string;

  @prop({ type: () => AttributeSchema, autopopulate: true,  })
  public properties?: Types.Array<AttributeSchema>;
}

export default CategorySchema;
