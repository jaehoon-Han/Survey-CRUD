// import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import { QuestionOptionService } from './question-option.service';
// import { CreateQuestionOptionDto } from './dto/create-question-option.dto';
// import { QuestionOption } from './entities/question-option.entity';

// @Controller('question-option')
// export class QuestionOptionController {
//     constructor(private questionOptionService: QuestionOptionService) { }

//     @Post()
//     createQuestionOption(
//         @Body() createQuestionOptionDto: CreateQuestionOptionDto): Promise<QuestionOption> {
//         return this.questionOptionService.createQuestionOption(createQuestionOptionDto);
//     }

//     @Get('/:questionId')
//     getQuestionOptionbyQuestionId(@Param('questionId') questionId: number): Promise<QuestionOption[]> {
//         return this.questionOptionService.getQuestionOptionByQuestionId(questionId);
//     }

// }
