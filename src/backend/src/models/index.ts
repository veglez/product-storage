import { getModelForClass } from "@typegoose/typegoose";
import UserSchema from "./user";
import ProductSchema from './product';
import CategorySchema from './category/index';

export const User = getModelForClass(UserSchema);
export const Product = getModelForClass(ProductSchema);
export const Category = getModelForClass(CategorySchema);
