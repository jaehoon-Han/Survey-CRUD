import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionInput, CreateQuestionOutput } from './dto/create-question.dto';
import { Question } from './entities/question.entity';
import { SurveysService } from 'src/surveys/surveys.service';

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(Question)
        private questionRepository: Repository<Question>,
        private surveysService: SurveysService,
    ){}

    // 생성하는거부터 하고 get all by survey id

    async getAllQuestion(): Promise<Question[]> {
        return this.questionRepository.find();
    }
    
    // async createQuestion(
    //     createQuestionInput: CreateQuestionInput
    // ) : Promise<CreateQuestionOutput> {
    //     const newQuestion = this.questionRepository.create(createQuestionInput);
    //     await this.questionRepository.save(newQuestion);
    //     return {
    //         ok: true,
    //         message: '질문 생성에 성공했습니다.',
    //     }
    // }

    // async createQuestion(
    //     createQuestionInput: CreateQuestionInput
    // ): Promise<CreateQuestionInput> {
    //     const  fromSurveyId  = createQuestionInput;
    //     const survey = await this.surveysService.getOneSurvey(createQuestionInput.fromSurveyId);
    //     if (!survey) throw new NotFoundException(`없다네 ~~`);
    //     const question = new Question();
    //     question.survey = survey;
    //     question.surveyId = fromSurveyId;

    //     const newQuestion = await this.questionRepository.save(question);
    //     return newQuestion;

    // }

    async createQuestion(
        createQuestionInput: CreateQuestionInput
    ): Promise<CreateQuestionOutput> {
        // const newQuestion = this.questionRepository.create(createQuestionInput);

        // const newQuestion = this.questionRepository.create(createQuestionInput);
        const fromSurvey = await this.surveysService.getOneSurvey(createQuestionInput.surveyId);
        if(!fromSurvey) throw new NotFoundException('Survey가 존재하지 않습니다. ')

        const newQuestion = this.questionRepository.create(createQuestionInput);
        
        console.log('getOneSurvye의 surveyId = ', fromSurvey.id)
        
        newQuestion.id = fromSurvey.id;

        await this.questionRepository.save(newQuestion)
        return {ok: true,
        message: '제발'}

    }

    async getQuestionBySurveyId(surveyId:number) : Promise<Question[]>{
        const found = await this.questionRepository.findBy({surveyId});

        if((await found).length === 0) {
            throw new NotFoundException(`surveyId : ${surveyId}인 질문을 찾을 수 없습니다.`)
        }

        return found;
    }
   


        // async getQuestionBySurveyId(surveyId:number): Promise<Question[]> {
    //     const found = await this.questionRepository.findBy({surveyId});

    //     if(!found) {
    //         throw new NotFoundException(`Can't find Question with Survey ID : ${surveyId}`)
    //     }

    //     return found;
    // }
}

    // async createQuestion(createQuestionDto: CreateQuestionDto) : Promise<Question>{
    //     const {surveyId, questionContent} = createQuestionDto;

    //     const question = this.questionRepository.create({
    //         surveyId,
    //         questionContent
    //     })

    //     await this.questionRepository.save(question);
    //     return question;
    // }


