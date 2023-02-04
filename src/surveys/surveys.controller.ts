import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SurveysService } from './surveys.service';
import { SurveyStatus } from './survey-status.enum';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { SurveyStatusValidationPipe } from './pipes/survey-status-validation.pipe';
import { Survey } from './entities/survey.entity';

@Controller('surveys')
export class SurveysController {
    constructor(private surveysService: SurveysService) { }

    @Post()
    @UsePipes(ValidationPipe) //유효성 검사 Pipe
    createSurvey(
        @Body() createSurveyDto: CreateSurveyDto): Promise<Survey> {
        return this.surveysService.createSurvey(createSurveyDto);
    }

    @Get()
    getAllSurvey(): Promise<Survey[]> {
        return this.surveysService.getAllSurvey();
    }

    @Get('/:id')
    getSurveyById(@Param('id') id:number) : Promise<Survey> {
        return this.surveysService.getSurveyById(id);
    }    

    @Delete('/:id')
    deleteSurvey(@Param('id', ParseIntPipe) id): Promise<void> {
        return this.surveysService.deleteSurvey(id)
    }
  
    @Patch('/:id/status')
    updateSurveyStatus(
        @Param('id', ParseIntPipe) id:number,
        @Body('status', SurveyStatusValidationPipe) status: SurveyStatus
        ) {
            return this.surveysService.updateSurveyStatus(id, status);
        }
    
    }

    // @Delete('/:id')
    // deleteSurvey(@Param('id') id: string): void {
    //     this.surveysService.deleteSurvey(id);
    // }

    // @Patch('/:id/status')
    // updateSurveyStatus(
    //     @Param('id') id: string,
    //     @Body('status', SurveyStatusValidationPipe) status: SurveyStatus
    // ){
    //     return this.surveysService.updateSurveyStatus(id, status);
    // }

