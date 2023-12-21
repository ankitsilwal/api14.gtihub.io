import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class Book {
  @Prop()
  name: string;

  @Prop()
  author: string;

  @Prop()
  genre: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
