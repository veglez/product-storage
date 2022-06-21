import MetaDataSchema from "./metadata";
import { prop } from '@typegoose/typegoose'
import uniqueValidator from "../utils/uniqueValidator";
import { product_error_messages } from '../config/messages/errors_models';

class ProductSchema extends MetaDataSchema {
    @prop({
        required: true, validate: {
            validator: (value: string) => uniqueValidator('name', value),
            message: product_error_messages.name
    } })
    public name!: string;

    @prop({ required: true })
    public sku!: string;

    @prop({ required: true,  })
    public brand!: string;

    @prop({ required: true })
    public cost!: number;
}

export default ProductSchema;