import { Category } from '../models/index';
import CategorySchema from '../models/category/index';
import type { TypegooseDeleteModelMethodRespond } from './types.services';

class CategoryServices {
    static async getAll() {
        return Category.find();
    }

    static async getById(id: string) {
        return Category.findById(id)
    }

    static async getOne(filter: Partial<CategorySchema>) {
        return Category.findOne(filter)
    }

    static async create(data: CategorySchema) {
        return Category.create(data)
    }

    static async updateById(id: string, data: Partial<CategorySchema>) {
        return Category.findByIdAndUpdate(id, data, { new: true })
    }
    
    static async updateOneByFilter(filter: Partial<CategorySchema>, data: Partial<CategorySchema>) {
        return Category.findOneAndUpdate(filter, data, {new: true })
    }

    static async updateManyByFilter(filter: Partial<CategorySchema>, data: Partial<CategorySchema>) {
        return Category.updateMany(filter, data, { new: true })
    }

    static async deleteById(id: string): Promise<TypegooseDeleteModelMethodRespond> {
        const value = await Category.findByIdAndDelete(id).exe()
        return value
    }

    static async deleteManyByFilter(filter: Partial<CategorySchema>): Promise<TypegooseDeleteModelMethodRespond> {
        return Category.deleteMany(filter, { new: true})
    }
}

export default CategoryServices;