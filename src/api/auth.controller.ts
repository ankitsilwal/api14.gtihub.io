import {
  Body,
  Controller,
  HttpException,
  Post,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserDto } from "./dto/user.dto";
import { LoginDto } from "./dto/login.dto";

@Controller("user")
export class AuthController {
  constructor(private authservice: AuthService) {}

  @Post("add")
  async creatuser(@Body() userdto: UserDto) {
    try {
      return await this.authservice.createuser(userdto);
    } catch (error) {
      throw new HttpException(error.message, error.statuscode ?? 400);
    }
  }

  @Post("login")
  async login(@Body() logindto: LoginDto) {
    try {
      return await this.authservice.login(logindto.username, logindto.password);
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
