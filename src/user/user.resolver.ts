import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { NotFoundException } from '@nestjs/common';

@Resolver()
export class UserResolver {
    constructor(private readonly usersService: UserService) { }

    @Query(() => [User])
    async getAllUser() {
        return this.usersService.getAllUser();
    }

    @Query(() => [User])
    async getUserById(@Args('id', { type: () => Int }) id: number) {
        const user = await this.usersService.getUserById(id);
        if (!user) throw new NotFoundException( ` ID : ${id}의 유저가 존재하지 않습니다. `);
        return user;
    }

    @Query(() => [User])
    async getUserByName(@Args('name', { type: () => String }) name: string) {
        const user = await this.usersService.getUserByName(name);
        if (user.length ===0 ) throw new NotFoundException( ` Name : ${name}인 유저가 존재하지 않습니다. `);
        return user;
    }


    @Mutation(() => User)
    async createUser(
        @Args('input') createUserInput: CreateUserInput,
    ): Promise<User> {
        const newUser = this.usersService.createUser(createUserInput);
        return newUser;
    }
}
