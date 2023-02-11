import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { QuestionService } from './question.service';
import { QuestionResolver } from './question.resolver';
import { Survey } from 'src/surveys/entities/survey.entity';
import { SurveysService } from 'src/surveys/surveys.service';

@Module({
  imports: [TypeOrmModule.forFeature([Question]),
            TypeOrmModule.forFeature([Survey])],
  exports: [QuestionService],
  providers: [
    QuestionService, 
    QuestionResolver, 
    SurveysService, ]
})
export class QuestionModule { }
