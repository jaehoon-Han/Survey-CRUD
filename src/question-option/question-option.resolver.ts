import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { QuestionOptionService } from './question-option.service';
import { QuestionOption } from './entities/question-option.entity';
import { CreateQuestionOptionInput } from './dto/create-question-option.dto';
import { NotFoundException } from '@nestjs/common';

@Resolver()
export class QuestionOptionResolver {
    constructor(private readonly questionOptionService: QuestionOptionService) {}

    @Query(() => [QuestionOption])
    async getAllQuestionOption() {
        const questionOption = this.questionOptionService.getAllQuestionOption();
        if (!questionOption) throw new NotFoundException( ` 선택지가 존재하지 않습니다. `)
        return questionOption;
    }

    @Query(() => QuestionOption)
    async getQuestionById(
        @Args('id',{ type: () => Int}) id: number) {
            const questionOption = await this.questionOptionService.getQuestionById(id);
        if(!questionOption) throw new NotFoundException  (` ID : ${id}인 질문의 선택지가 존재하지 않습니다. `);
       
        return questionOption;
    }

    @Mutation(() => QuestionOption)
    async createQuestionOption(
        @Args('input') createQuestionOptionInput :CreateQuestionOptionInput,
    ): Promise<QuestionOption> {
        const newQuestionOption = this.questionOptionService.createQuestionOption(createQuestionOptionInput);
        return newQuestionOption;
    }
       
}
