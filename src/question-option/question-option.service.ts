import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuestionOption } from './entities/question-option.entity';
import { CreateQuestionOptionInput, CreateQuestionOptionOutput } from './dto/create-question-option.dto';

@Injectable()
export class QuestionOptionService {
    constructor(
        @InjectRepository(QuestionOption)
        private questionOptionRepository: Repository<QuestionOption>,
    ){}

    async getAllQuestionOption(): Promise<QuestionOption[]> {
        return this.questionOptionRepository.find();
    }

    async getQuestionById(id: number) {
        const questionOption = this.questionOptionRepository.findOneBy({id})
        
        return questionOption
    }

    async createQuestionOption(
        createQuestionOptionInput: CreateQuestionOptionInput
        ) : Promise<CreateQuestionOptionOutput>{
            const newQuestionOption = this.questionOptionRepository
            .create(createQuestionOptionInput);
            await this.questionOptionRepository.save(newQuestionOption);
            return {
                ok: true,
                message: '응답 항목 생성에 성공했습니다.'
            }
       
        }

    // async getQuestionOptionByQuestionId(questionId: number): Promise<QuestionOption[]> {
    //     const found = await this.questionOptionRepository.findBy({questionId});

    //     if(!found) {
    //         throw new NotFoundException(`Can't find Question with Question ID : ${questionId}`)
    //     }

    //     return found;
    // }

}
