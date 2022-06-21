import MetaDataSchema from "./metadata";
import { prop, Ref } from "@typegoose/typegoose";
import uniqueValidator from "../utils/uniqueValidator";
import { product_error_messages } from "../config/messages/errors_models";
import CategorySchema from "./category/index";

class ProductSchema extends MetaDataSchema {
  @prop({
    required: true,
    validate: {
      validator: (value: string) => uniqueValidator.bind(this, "name", value),
      message: product_error_messages.name,
    },
  })
  public name!: string;

  @prop({ required: true })
  public sku!: string;

  @prop({ required: true })
  public brand!: string;

  @prop({ required: true })
  public cost!: number;

  @prop({ required: true, ref: () => CategorySchema, autopopulate: true })
  public category: Ref<CategorySchema>;
}

export default ProductSchema;
