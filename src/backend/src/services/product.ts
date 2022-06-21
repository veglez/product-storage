import { Product } from "../models/index";
import ProductSchema from "../models/product";
import type { TypegooseDeleteModelMethodRespond } from "./types.services";

class ProductServices {
  static async getAll() {
    return Product.find();
  }

  static async getById(id: string) {
    return Product.findById(id);
  }

  static async getOne(filter: Partial<ProductSchema>) {
    return Product.findOne(filter);
  }

  static async create(data: ProductSchema) {
    return Product.create(data);
  }

  static async updateById(id: string, data: Partial<ProductSchema>) {
    return Product.findByIdAndUpdate(id, data, { new: true });
  }

  static async updateOneByFilter(
    filter: Partial<ProductSchema>,
    data: Partial<ProductSchema>
  ) {
    return Product.findOneAndUpdate(filter, data, { new: true });
  }

  static async updateManyByFilter(
    filter: Partial<ProductSchema>,
    data: Partial<ProductSchema>
  ) {
    return Product.updateMany(filter, data, { new: true });
  }

  static async deleteById(
    id: string
  ): Promise<TypegooseDeleteModelMethodRespond> {
    const value = await Product.findByIdAndDelete(id).exe();
    return value;
  }

  static async deleteManyByFilter(
    filter: Partial<ProductSchema>
  ): Promise<TypegooseDeleteModelMethodRespond> {
    return Product.deleteMany(filter, { new: true });
  }
}

export default ProductServices;
