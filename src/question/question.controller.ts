import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './entities/question.entity';

@Controller('questions')
export class QuestionController {
    constructor(private questionService: QuestionService) {}
    

    @Post()
    createQestion(
        @Body() createQuestionDto: CreateQuestionDto): Promise<Question> {
            return this.questionService.createQuestion(createQuestionDto);
        }

    @Get('/:surveyId')
    getQuestionbySurveyId(@Param('surveyId') surveyId: number) : Promise<Question[]>{
        return this.questionService.getQuestionBySurveyId(surveyId);
    }
    

}

