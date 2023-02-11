import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.dto';
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

    createUserInput: CreateUserInput,
) : Promise<User> {
    const newUser = this.userRepository.create(createUserInput);
    await this.userRepository.save(newUser);
    return newUser;
}
   
    
}
