import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserResolver } from './user.resolver';
import { UserSurvey } from 'src/user-survey/entities/user-survey.entity';
import { UserSurveyService } from 'src/user-survey/user-survey.service';
import { Survey } from 'src/surveys/entities/survey.entity';
import { SurveysService } from 'src/surveys/surveys.service';
import { Answer } from 'src/answer/entities/answer.entity';
import { AnswerService } from 'src/answer/answer.service';
import { AnswerOptionService } from 'src/answer-option/answer-option.service';
import { AnswerOption } from 'src/answer-option/entities/answer-option.entity';
import { QuestionOption } from 'src/question-option/entities/question-option.entity';
import { QuestionOptionService } from 'src/question-option/question-option.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
            TypeOrmModule.forFeature([UserSurvey]),
            TypeOrmModule.forFeature([Survey]),
            TypeOrmModule.forFeature([Answer]),
          TypeOrmModule.forFeature([AnswerOption]),
        TypeOrmModule.forFeature([QuestionOption])],
  exports: [UserService],
  providers: [
    UserService, 
    UserResolver,
    UserSurveyService, 
    SurveysService, 
    AnswerService, 
    AnswerOptionService,
    QuestionOptionService]
})
export class UserModule {}
