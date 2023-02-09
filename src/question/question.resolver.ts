import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { QuestionService } from './question.service';
import { CreateQuestionInput, CreateQuestionOutput } from './dto/create-question.dto';
import { Question } from './entities/question.entity';

@Resolver()
export class QuestionResolver {
    constructor(private readonly questionService: QuestionService) { }

    @Mutation(() => CreateQuestionOutput)
    async createQuestion(
        @Args('input') createQuestionInput: CreateQuestionInput,
    ): Promise<CreateQuestionOutput> {
        return this.questionService.createQuestion(createQuestionInput);
    }

    @Query(() => [Question])
    async getAllQuestion() {
        return this.questionService.getAllQuestion();
    }

    @Query(() => [Question])
    async getQuestionBySurveyId(
        @Args('surveyId', { type: () => Int }) surveyId: number) {
            return  this.questionService.getQuestionBySurveyId(surveyId);
        
    }
    




    // /     @Get('/:surveyId')
    //     getQuestionBySurveyId(@Param('surveyId') surveyId: number) : Promise<Question[]>{
    //         return this.questionService.getQuestionBySurveyId(surveyId);
    //     }

    //     // 
}

