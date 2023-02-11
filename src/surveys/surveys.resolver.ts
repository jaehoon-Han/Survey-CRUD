import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SurveysService } from './surveys.service';
import { Survey } from './entities/survey.entity';
import { CreateSurveyInput } from './dto/create-survey.dto';
import { Request } from 'express';
import { UpdateSurveyInput } from './dto/update-survey.dto';
import { NotFoundException } from '@nestjs/common';


@Resolver()
export class SurveysResolver {
    constructor(private readonly surveysService: SurveysService) { }

    @Query(() => [Survey])
    async getAllSurvey() {
        const survey = this.surveysService.getAllSurvey();
        return survey;
    }

    @Mutation(() => Survey)
    async createSurvey(
        @Args('input') createSurveyInput: CreateSurveyInput
    ) {
        const newSurvey = this.surveysService.createSurvey(createSurveyInput);
        return newSurvey;
    }

    @Query(() => [Survey])
    async getSurveyByStatus(
        @Args('status', { type: () => String }) status: string) {
        const survey = this.surveysService.getSurveyByStatus(status);
        if (!survey) 
            throw new NotFoundException(`Status : ${status}인 설문을 찾을 수 없습니다.`);
        return survey;
    }

    @Query(() => [Survey])
    async getSurveyById(
        @Args('id', { type: () => Int }) id: number) {
        const survey = this.surveysService.getSurveyById(id);
        if (!survey) throw new NotFoundException(`ID : ${id}의 설문이 존재하지 않습니다.`);

        return survey;
    }

    @Mutation(() => Survey)
    async updateSurvey(
        @Args('input') updateSurveyInput: UpdateSurveyInput) {
        const newSurvey = await this.surveysService.updateSurveys(updateSurveyInput);
        return newSurvey;

    }

    @Mutation(() => Survey)
    deleteSurvey(@Args('input') id: number) {

        const deleteSurvey = this.surveysService.deleteSurvey(id);
        return deleteSurvey;

    }
}
