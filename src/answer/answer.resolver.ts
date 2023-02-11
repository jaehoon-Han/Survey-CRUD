import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AnswerService } from './answer.service';
import { Answer } from './entities/answer.entity';
import { CreateAnswerInput } from './dto/create-answer.dto';
import { NotFoundException } from '@nestjs/common';

@Resolver()
export class AnswerResolver {
    constructor(private readonly answerService: AnswerService) {}

    @Query(() => [Answer])
    async getAllAnswer() {
        return this.answerService.getAllAnswer();
    }

    @Query(() => [Answer])
    async getAnswerUserSurveyId(
        @Args('input', { type: () => Int}) userSurveyId: number) {
            const answer = await this.answerService.getAnswerByUserSurveyId(userSurveyId);
            if(!answer) throw new NotFoundException(` UserSurveyID : ${userSurveyId}인 응답을 찾을 수 없습니다.`);
            return answer;
        }
    

    @Mutation(() => Answer)
    async createAnswer(
        @Args('input') createAnswerInput: CreateAnswerInput        
    ) {
        const newAnswer = this.answerService.createAnswer(createAnswerInput);
        return newAnswer;
    }
    
}
