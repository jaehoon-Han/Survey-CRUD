import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserInput, CreateUserOutput } from './dto/create-user.dto';
import { getAllUserOutput } from './dto/get-all-user.dto';
// import { CreateUserDto } from './dto/user-create.dto';

@Injectable()
export class UserService {
constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
) {}

async getAllUser(): Promise <User[]> {
    return this.userRepository.find();
}

async getUserByName(name: string) {
    const user = this.userRepository.findBy({name})

    return user;
}
 
async createUser(
    // name,
    // gender,
    createUserInput: CreateUserInput,
) : Promise<CreateUserOutput> {
    const newUser = this.userRepository.create(createUserInput);
    await this.userRepository.save(newUser);
    return {
         ok: true,
         message: '회원가입에 성공했습니다.'}}
   
// async createUser(createUserDto: CreateUserDto) : Promise<User> {
//     const { name } = createUserDto;

//     const user = this.userRepository.create({
//         name
//     })
//     await this.userRepository.save(user);
//     return user;
    
// }

    
}
