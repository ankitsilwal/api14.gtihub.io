import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Book } from "./schema/book.schema";
import { Model } from "mongoose";
import { BookDto } from "./dto/book.dto";

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookmodel: Model<Book>) {}

  async create(bookdto: BookDto) {
    return await this.bookmodel.create(bookdto);
  }
}
