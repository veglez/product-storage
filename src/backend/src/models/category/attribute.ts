import { prop } from "@typegoose/typegoose";
import { Types } from "mongoose";
import uniqueValidator from "../../utils/uniqueValidator";
import { attribute_error_messages } from "../../config/messages/errors_models";

class AttributeSchema {
  @prop({
    required: true,
    validate: {
      validator: (value: string) =>
        uniqueValidator.bind(this, "attribute_name", value),
      message: attribute_error_messages.attribute_name,
    },
  })
  public attribute_name!: string;

  @prop({ required: true, type: String })
  public values!: Types.Array<string>;
}

export default AttributeSchema;
