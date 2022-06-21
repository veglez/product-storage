import { prop, plugin } from "@typegoose/typegoose";
import { Types } from "mongoose";
import uniqueValidator from "../../utils/uniqueValidator";
import AttributeSchema from "./attribute";
import { category_error_messages } from "../../config/messages/errors_models";
import * as autopopulate from "mongoose-autopopulate";

@plugin(autopopulate as any)
class CategorySchema {
  @prop({
    required: true,
    validate: {
      validator: (value: string) => uniqueValidator.bind(this, "name", value),
      message: category_error_messages.name,
    },
  })
  public name!: string;

  @prop({ type: () => AttributeSchema, autopopulate: true })
  public properties?: Types.Array<AttributeSchema>;
}

export default CategorySchema;
