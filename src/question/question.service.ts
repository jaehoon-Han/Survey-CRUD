import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(Question)
        private questionRepository: Repository<Question>,
    ){}

    // 생성하는거부터 하고 get all by survey id
    

    async createQuestion(createQuestionDto: CreateQuestionDto) : Promise<Question>{
        const {surveyId, questionNumber, questionContent} = createQuestionDto;

        const question = this.questionRepository.create({
            surveyId,
            questionNumber,
            questionContent
        })

        await this.questionRepository.save(question);
        return question;
    }

    async getQuestionBySurveyId(surveyId:number): Promise<Question[]> {
        const found = await this.questionRepository.findBy({surveyId});

        if(!found) {
            throw new NotFoundException(`Can't find Question with Survey ID : ${surveyId}`)
        }

        return found;
    }
}
