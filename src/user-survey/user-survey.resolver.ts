import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserSurveyService } from './user-survey.service';
import { UserSurvey } from './entities/user-survey.entity';
import { CreateUserSurveyInput } from './dto/create-user-survey.dto';
import { NotFoundException } from '@nestjs/common';

@Resolver()
export class UserSurveyResolver {
    constructor(private readonly userSurveyService: UserSurveyService) {}

    @Query(() => [UserSurvey])
    async getAllUserSurvey() {
        const userSurvey = this.userSurveyService.getAllUserSurvey();
        return userSurvey;
    }

    @Mutation(() => UserSurvey)
    async createUserSurvey(
        @Args('input') createUserSurveyInput: CreateUserSurveyInput,
    ): Promise<UserSurvey> {
        const newUserSurvey = this.userSurveyService.createUserSurvey(createUserSurveyInput);
        return newUserSurvey;
    }

    @Query(() => [UserSurvey])
    async getUserSurveyByStatus(
        @Args('status',{ type: () => String}) status: string) {
        const userSurvey = await this.userSurveyService.getUserSurveyByStatus(status);
        if (userSurvey.length == 0) throw new NotFoundException( ` Status : ${status}인 유저가 참여한 설문이 존재하지 않습니다. `);
        return userSurvey;
    }

    @Query(() => [UserSurvey])
    async getUserSurveyById(
        @Args('id',{ type: () => Int}) id:number) {
            const userSurvey = await this.userSurveyService.getUserSurveyById(id);
            if (!userSurvey) throw new NotFoundException( ` ID : ${id}인 유저가 참여한 설문이 존재하지 않습니다. `);
            return userSurvey;
            
        }

    @Query(() => UserSurvey)
    async sumScore(@Args('id', {type:() => Int}) id:number) {
        
        const userSurvey = await this.userSurveyService.getUserSurveyById(id);
        if (!userSurvey) throw new NotFoundException( ` ID : ${id}인 유저가 참여한 설문이 존재하지 않습니다. `);
        return userSurvey;
        
    }
        
    
}
