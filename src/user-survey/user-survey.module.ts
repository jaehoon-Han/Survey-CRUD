import { Module } from '@nestjs/common';
import { UserSurveyService } from './user-survey.service';
import { UserSurvey } from './entities/user-survey.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSurveyResolver } from './user-survey.resolver';
import { Survey } from 'src/surveys/entities/survey.entity';
import { SurveysService } from 'src/surveys/surveys.service';
import { Answer } from 'src/answer/entities/answer.entity';
import { AnswerService } from 'src/answer/answer.service';
import { AnswerOptionService } from 'src/answer-option/answer-option.service';
import { AnswerOption } from 'src/answer-option/entities/answer-option.entity';
import { QuestionOption } from 'src/question-option/entities/question-option.entity';
import { QuestionOptionService } from 'src/question-option/question-option.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserSurvey]),
            TypeOrmModule.forFeature([Survey]),
            TypeOrmModule.forFeature([Answer]),
          TypeOrmModule.forFeature([AnswerOption]),
        TypeOrmModule.forFeature([QuestionOption])],
            
  exports: [UserSurveyService],
  providers: [
    UserSurveyService, 
    UserSurveyResolver, 
    SurveysService, 
    AnswerService, 
    AnswerOptionService, 
    QuestionOptionService]
})
export class UserSurveyModule {}
