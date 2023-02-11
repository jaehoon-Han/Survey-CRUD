import { Injectable, NotFoundException } from '@nestjs/common';
import { Survey } from './entities/survey.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSurveyInput } from './dto/create-survey.dto';
import { UpdateSurveyInput } from './dto/update-survey.dto';

@Injectable()
export class SurveysService {
    [x: string]: any;
    constructor(
        @InjectRepository(Survey)
        private surveysRepository: Repository<Survey>,
    ) { }


    async getAllSurvey(): Promise<Survey[]> {
        const surveys = await this.surveysRepository.find();
        return  surveys;
        
    }

    async getSurveyById(id: number): Promise<Survey> {
        const survey = await this.surveysRepository.findOne({
            where: { id },
        });
        return survey;
    }

    async getSurveyByStatus(status: string): Promise<Survey[]> {
        const found = this.surveysRepository.findBy({ status })

        return found;
    }


    async createSurvey(
        createSurveyInput: CreateSurveyInput
    ): Promise<Survey> {
        const newSurvey = this.surveysRepository.create(createSurveyInput);
        await this.surveysRepository.save(newSurvey);
        return newSurvey;
    }

    async deleteSurvey(
        id: number) {
        const survey = await this.surveysRepository.findOne({
            where: { id }
        });
        return this.surveysRepository.remove(survey);

    }



    async updateSurveys(updateSurveyInput: UpdateSurveyInput
    ): Promise<Survey> {
        const survey = await this.surveysRepository.findOne({
            where: { id: updateSurveyInput.surveyId },
        });

        let id = updateSurveyInput.surveyId;
        if (!survey) throw new NotFoundException(`ID : ${id}의 설문이 존재하지 않습니다.`);

        this.surveysRepository.merge(survey, updateSurveyInput);
        const updateSurvey = await this.surveysRepository.save(survey);

        return updateSurvey;
    }

}

