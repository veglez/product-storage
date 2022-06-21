import AttributeSchema from "../../models/category/attribute";
import ProductSchema from "../../models/product";
import CategorySchema from "../../models/category/index";
// product schema
export const product_error_messages: Partial<
  Record<keyof ProductSchema, string>
> = {
  name: "El producto {VALUE} ya existe en la base de datos",
};

export const category_error_messages: Partial<
  Record<keyof CategorySchema, string>
> = {
  name: "La categoría {VALUE} ya existe en la base de datos",
};

// attribute schema
export const attribute_error_messages: Partial<
  Record<keyof AttributeSchema, string>
> = {
  attribute_name: "El attributo {VALUE} ya existe en la base de datos",
};
