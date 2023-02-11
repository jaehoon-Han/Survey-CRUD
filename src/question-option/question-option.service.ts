import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuestionOption } from './entities/question-option.entity';
import { CreateQuestionOptionInput } from './dto/create-question-option.dto';

@Injectable()
export class QuestionOptionService {
    constructor(
        @InjectRepository(QuestionOption)
        private questionOptionRepository: Repository<QuestionOption>,
    ){}

    async getAllQuestionOption(): Promise<QuestionOption[]> {
        const questionOption = this.questionOptionRepository.find();
        return questionOption;
    }

    async getQuestionById(id: number) {
        const questionOption = this.questionOptionRepository.findOneBy({id})
        return questionOption;
    }

    async createQuestionOption(
        createQuestionOptionInput: CreateQuestionOptionInput
        ) : Promise<QuestionOption>{
            const newQuestionOption = this.questionOptionRepository
            .create(createQuestionOptionInput);
            await this.questionOptionRepository.save(newQuestionOption);
            return newQuestionOption;
       
        }

}
