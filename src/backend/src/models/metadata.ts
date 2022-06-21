import { prop } from "@typegoose/typegoose";

class MetaDataSchema {
  @prop({ required: true, default: Date() })
  public createdAt!: Date;

  @prop({ required: true, default: Date() })
  public updatedAt!: Date;
}

export default MetaDataSchema;
