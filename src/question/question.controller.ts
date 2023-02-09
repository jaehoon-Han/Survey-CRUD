// import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import { QuestionService } from './question.service';
// import { CreateQuestionDto } from './dto/create-question.dto';
// import { Question } from './entities/question.entity';

// @Controller('questions')
// export class QuestionController {
//     constructor(private questionService: QuestionService) {}
    

//     // 질문 생성
//     @Post()
//     createQestion(
//         @Body() createQuestionDto: CreateQuestionDto): Promise<Question> {
//             return this.questionService.createQuestion(createQuestionDto);
//         }

//     // 설문지 ID에 맞는 질문 전부 조회
//     @Get('/:surveyId')
//     getQuestionBySurveyId(@Param('surveyId') surveyId: number) : Promise<Question[]>{
//         return this.questionService.getQuestionBySurveyId(surveyId);
//     }
    
//     // 

// }

