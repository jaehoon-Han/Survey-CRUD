import { Module } from '@nestjs/common';
import { AnswerOptionService } from './answer-option.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerOption } from './entities/answer-option.entity';
import { AnswerOptionResolver } from './answer-option.resolver';
import { QuestionOptionService } from 'src/question-option/question-option.service';
import { QuestionOption } from 'src/question-option/entities/question-option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnswerOption]),
            TypeOrmModule.forFeature([QuestionOption])],
  exports: [AnswerOptionService],
  providers: [
    AnswerOptionService, 
    AnswerOptionResolver, 
    QuestionOptionService, ]
})
export class AnswerOptionModule {}
