import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SurveysService } from './surveys.service';
import { Survey } from './entities/survey.entity';
import { CreateSurveyInput, CreateSurveyOutput } from './dto/create-survey.dto';
import { SearchSurveyInput,  } from './dto/search-survey.dto';
import { NotFoundException } from '@nestjs/common';

@Resolver()
export class SurveysResolver {
    constructor(private readonly surveysService: SurveysService) { }

    @Query(() => [Survey]) //GetAllSurveyOutput
    async getAllSurvey() { // Promise<GetAll>
        return this.surveysService.getAllSurvey();
    }

    @Mutation(() => CreateSurveyOutput)
    async createSurvey(
        @Args('input') createSurveyInput: CreateSurveyInput,
    ): Promise<CreateSurveyOutput> {
        return this.surveysService.createSurvey(createSurveyInput);
    }

    @Query(() => [Survey])
    async getSurveyByStatus(
        @Args('status',{ type: () => String}) status: string) {
        
        // const survey = await this.surveysService.getSurveyByStatus(status);

        return this.surveysService.getSurveyByStatus(status);
    }

 
}
