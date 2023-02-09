import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AnswerService } from './answer.service';
import { Answer } from './entities/answer.entity';
import { CreateAnswerInput, CreateAnswerOutput } from './dto/create-answer.dto';

@Resolver()
export class AnswerResolver {
    constructor(private readonly answerService: AnswerService) {}

    @Query(() => [Answer])
    async getAllAnswer() {
        return this.answerService.getAllAnswer();
    }

    @Mutation(() => CreateAnswerOutput)
    async createAnswer(
        @Args('input') createAnswerInput: CreateAnswerInput,
    ): Promise<CreateAnswerOutput> {
        return this.answerService.createAnswer(createAnswerInput);
    }
}
