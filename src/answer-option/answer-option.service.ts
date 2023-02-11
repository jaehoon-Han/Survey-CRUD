import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnswerOption } from './entities/answer-option.entity';
import { CreateAnswerOptionInput } from './dto/create-answer-option.dto';
import { QuestionOptionService } from 'src/question-option/question-option.service';

@Injectable()
export class AnswerOptionService {
    constructor(
    @InjectRepository(AnswerOption)
    private answerOptionRepository: Repository<AnswerOption>,
    private questionOptionService: QuestionOptionService,
) {}

    async getAllAnswerOption(): Promise<AnswerOption[]> {
        return this.answerOptionRepository.find();
    }
   

    async createAnswerOption(
        createAnswerOptionInput: CreateAnswerOptionInput
    ): Promise<AnswerOption> {
        
        const newAnswerOption = this.answerOptionRepository.create(createAnswerOptionInput);

        const optionId = newAnswerOption.questionOptionId
        console.log('optionId : ', optionId)

        
        const getQuestionOption = this.questionOptionService.getQuestionById(optionId);
        console.log('getQuestionOption : ', getQuestionOption)

        var score =  (await getQuestionOption).score
        console.log('score : ', score)

        newAnswerOption.answerScore = score;
        
        await this.answerOptionRepository.save(newAnswerOption);

        return newAnswerOption;

        
    }

}
