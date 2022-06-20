import { prop } from "@typegoose/typegoose";

class MetaDataSchema {
  @prop({ required: true })
  public createdAt!: Date;

  @prop({ required: true })
  public updatedAt!: Date;
}

export default MetaDataSchema;
