import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookDto } from "./dto/book.dto";

@Controller("book")
export class BookController {
  constructor(private bookservice: BookService) {}

  @Post("add")
  async creatboook(@Body() bookdto: BookDto) {
    return await this.bookservice.create(bookdto);
  }
}
