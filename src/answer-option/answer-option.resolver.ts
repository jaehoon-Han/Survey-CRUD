import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AnswerOptionService } from './answer-option.service';
import { AnswerOption } from './entities/answer-option.entity';
import { CreateAnswerOptionInput } from './dto/create-answer-option.dto';

@Resolver()
export class AnswerOptionResolver {
    constructor(private readonly answerOptionService: AnswerOptionService) {}

    @Query(() => [AnswerOption])
    async getAllAnswerOption() {
        return this.answerOptionService.getAllAnswerOption();
    }

    @Mutation(() => AnswerOption)
    async createAnswerOption(
        @Args('input') createAnswerOptionInput: CreateAnswerOptionInput,
    ){
        const newAnswerOption = this.answerOptionService.createAnswerOption(createAnswerOptionInput);
        return newAnswerOption;
    }
}
