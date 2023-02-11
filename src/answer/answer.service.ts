import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Answer } from './entities/answer.entity';
import { Repository } from 'typeorm';
import { CreateAnswerInput } from './dto/create-answer.dto';
import { QuestionOptionService } from 'src/question-option/question-option.service';

@Injectable()
export class AnswerService {
    constructor(
        @InjectRepository(Answer)
        private answerRepository: Repository<Answer>,
    ) {}

    async getAllAnswer(): Promise<Answer[]> {
        return this.answerRepository.find();
    }

    async getAnswerByUserSurveyId(userSurveyId: number): Promise<Answer[]> {
        const answer = await this.answerRepository.findBy({userSurveyId})
        return answer;
    }

    async createAnswer(
        createAnswerInput: CreateAnswerInput
    ): Promise<Answer> {
        const newAnswer = this.answerRepository.create(createAnswerInput);
        await this.answerRepository.save(newAnswer);
        return newAnswer;
    }
}

