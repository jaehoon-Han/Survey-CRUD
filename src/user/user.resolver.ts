import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput, CreateUserOutput } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Resolver()
export class UserResolver {
    constructor(private readonly usersService: UserService) {}

    // get All User 모든 유저 조회
    @Query(() => [User])
    async getAllUser(){
        return this.usersService.getAllUser();
    }

    @Query(() => [User])
    async getUserByName(@Args('name',{ type: () => String}) name: string){
        try {
            await this.usersService.getUserByName(name);
        } catch (error) {
            throw "위위"
        }
        const user = await this.usersService.getUserByName(name);

        return user;
    }


    @Mutation(() => CreateUserOutput)
    async createUser(
        @Args('input') createUserInput: CreateUserInput,
    ): Promise<CreateUserOutput> {
        return this.usersService.createUser(createUserInput);
    }
}
