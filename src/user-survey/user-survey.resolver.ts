import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserSurveyService } from './user-survey.service';
import { UserSurvey } from './entities/user-survey.entity';
import { CreateUserSurveyInput, CreateUserSurveyOutput } from './dto/create-user-survey.dto';

@Resolver()
export class UserSurveyResolver {
    constructor(private readonly userSurveyService: UserSurveyService) {}

    @Query(() => [UserSurvey])
    async getAllUserSurvey() {
        return this.userSurveyService.getAllUserSurvey();
    }

    @Mutation(() => CreateUserSurveyOutput)
    async createUserSurvey(
        @Args('input') createUserSurveyInput: CreateUserSurveyInput,
    ): Promise<CreateUserSurveyOutput> {
        return this.userSurveyService.createUserSurvey(createUserSurveyInput);
    }

    // user name으로 불러오기
    @Query(() => [UserSurvey])
    async getUserSurveyByStatus(@Args('status',{ type: () => String}) status: string) {
        try {
            await this.userSurveyService.getUserSurveyByStatus(status);
        } catch (error) {
            throw "와와"
        }
        const userSurvey = await this.userSurveyService.getUserSurveyByStatus(status);

        return userSurvey;
    }
}