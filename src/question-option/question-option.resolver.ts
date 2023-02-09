import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { QuestionOptionService } from './question-option.service';
import { QuestionOption } from './entities/question-option.entity';
import { CreateQuestionOptionInput, CreateQuestionOptionOutput } from './dto/create-question-option.dto';

@Resolver()
export class QuestionOptionResolver {
    constructor(private readonly questionOptionService: QuestionOptionService) {}

    @Query(() => [QuestionOption])
    async getAllQuestionOption() {
        return this.questionOptionService.getAllQuestionOption();
    }

    @Query(() => QuestionOption)
    async getQuestionById(
        @Args('id',{ type: () => Int}) id: number) {
        try {
            await this.questionOptionService.getQuestionById(id);
        } catch(error) {
            throw "왜왜"
        }
        const questionOption = await this.questionOptionService.getQuestionById(id);

        return questionOption;
    }

    @Mutation(() => CreateQuestionOptionOutput)
    async createQuestionOption(
        @Args('input') createQuestionOptionInput :CreateQuestionOptionInput,
    ): Promise<CreateQuestionOptionOutput> {
        return this.questionOptionService.createQuestionOption(createQuestionOptionInput)
    }
}
