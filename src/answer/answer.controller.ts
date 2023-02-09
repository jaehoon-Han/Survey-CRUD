// import { Controller, Get, Post } from '@nestjs/common';
// import { AnswerService } from './answer.service';
// import { Answer } from './entities/answer.entity';
// import { Body } from '@nestjs/common/decorators';
// import { CreateAnswerDto } from './dto/create-answer.dto';

// @Controller('answer')
// export class AnswerController {
//     constructor(private answerService: AnswerService) {}
    
//     @Get()
//     getAllAnswer(): Promise<Answer[]> {
//         return this.answerService.getAllAnswer();
//     }

//     @Post()
//     createAnswer(
//         @Body() createAnswerDto: CreateAnswerDto) : Promise<Answer>{
//         return this.answerService.createAnswer(createAnswerDto);
//         }
     
        
//     }

