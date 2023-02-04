import { Injectable, NotFoundException } from '@nestjs/common';
import { SurveyStatus } from './survey-status.enum';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { Survey } from './entities/survey.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SurveysService {
    constructor(
        @InjectRepository(Survey)
        private surveysRepository: Repository<Survey>,
    ) {}

    async getAllSurvey(): Promise <Survey[]> {
        return this.surveysRepository.find();
    }



    async getSurveyById(id:number): Promise <Survey> {
        const found = await this.surveysRepository.findOneBy({id});

        if(!found) {
            throw new NotFoundException(`Can't find Survey with ID : ${id}`)
        }

        return found;
    }

        // 설문지 생성
    async createSurvey(createSurveyDto: CreateSurveyDto) : Promise<Survey> {
        const {title, description} = createSurveyDto;

        const survey = this.surveysRepository.create({
            title,
            description,
            status: SurveyStatus.ON_GOING
        })
        
        await this.surveysRepository.save(survey);
        return survey;
    }

  
    async deleteSurvey(id:number): Promise<void> {
        const result = await this.surveysRepository.delete(id);
        // remove 는 (존재 유무 + 삭제) 두번의 일을 진행하기에 delete 사용
        // 대신 에러메시지 하나 던져주기
        
        if(result.affected === 0) {
            throw new NotFoundException(`Can't find Survey with ID : ${id}`)
        }

        console.log('result : ', result);
    }

    async updateSurveyStatus(id: number, status: SurveyStatus): Promise<Survey> {
        const survey = await this.getSurveyById(id);

        survey.status = status;
        await this.surveysRepository.save(survey);

        return survey;
    }

    // deleteSurvey(id: string): void{
    //     const found = this.getSurveyById(id);
    //     this.surveys = this.surveys.filter((survey) => survey.id !== found.id);
    // }

    // updateSurveyStatus(id: string, status: SurveyStatus): Survey{
    //     const survey = this.getSurveyById(id);
    //     survey.status = status;
    //     return survey;
    //     // todo : 지금 작성한 쿼리는 하드코딩으로 바꾸는거지만
    //     // 시간 나면 survey의 모든 항목이 작성되면 자동으로 complete로 바꾸게 수정하기
    // }

}
