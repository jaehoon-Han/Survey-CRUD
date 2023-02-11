import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { QuestionService } from './question.service';
import { CreateQuestionInput } from './dto/create-question.dto';
import { Question } from './entities/question.entity';
import { NotFoundException } from '@nestjs/common';

@Resolver()
export class QuestionResolver {
    constructor(private readonly questionService: QuestionService) { }

    @Mutation(() => Question)
    async createQuestion(
        @Args('input') createQuestionInput: CreateQuestionInput,
    ): Promise<Question> {
        const newQuestion = this.questionService.createQuestion(createQuestionInput);
        return newQuestion;
    }

    @Query(() => [Question])
    async getAllQuestion() {
        return this.questionService.getAllQuestion();
    }

    @Query(() => [Question])
    async getQuestionBySurveyId(
        @Args('surveyId', { type: () => Int }) surveyId: number) {
            const question = this.questionService.getQuestionBySurveyId(surveyId);
            if (!question) throw new NotFoundException(`SurveyID : ${surveyId}인 질문을 찾을수 없습니다.`);
            return  question;
    }
   
}

