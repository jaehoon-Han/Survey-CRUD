import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionInput } from './dto/create-question.dto';
import { Question } from './entities/question.entity';
import { SurveysService } from 'src/surveys/surveys.service';

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(Question)
        private questionRepository: Repository<Question>,
        private surveysService: SurveysService,
    ){}

    async getAllQuestion(): Promise<Question[]> {
        return this.questionRepository.find();
    }
    
  
    async createQuestion(
        createQuestionInput: CreateQuestionInput
    ): Promise<Question> {
        const fromSurvey = await this.surveysService.getSurveyById(createQuestionInput.surveyId);
        if(!fromSurvey) throw new NotFoundException('Survey가 존재하지 않습니다. ')

        const newQuestion = this.questionRepository.create(createQuestionInput);
        
        console.log('getSurveyById의 surveyId = ', fromSurvey.id)
        
        newQuestion.surveyId = fromSurvey.id;
        
        fromSurvey.amountQuestion = fromSurvey.amountQuestion + 1 ;
        
        this.surveysService.updateSurveys(fromSurvey)

        await this.questionRepository.save(newQuestion)
        return newQuestion;
        

    }

    async getQuestionBySurveyId(surveyId:number) : Promise<Question[]>{
        const found = await this.questionRepository.findBy({surveyId});
        return found;
    }
   


   
}

  