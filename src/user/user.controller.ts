// import { Body, Controller, Get, Post } from '@nestjs/common';
// import { UserService } from './user.service';
// import { CreateUserDto } from './dto/user-create.dto';
// import { User } from './entities/user.entity';

// @Controller('user')
// export class UserController {
//     constructor(private userService: UserService) {}

//     @Post()
//     createUser(
//         @Body() createUserDto: CreateUserDto): Promise<User> {
//             return this.userService.createUser(createUserDto);
//         }
    
//     @Get()
//     getAllUser(): Promise<User[]> {
//         return this.userService.getAlluser();
//     }
// }
