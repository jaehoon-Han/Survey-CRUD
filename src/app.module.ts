import { Module } from '@nestjs/common';
import { SurveysModule } from './surveys/surveys.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { typeORMConfig } from './configs/typeorm.config';
import { QuestionModule } from './question/question.module';
import { UserModule } from './user/user.module';
import { UserSurveyModule } from './user-survey/user-survey.module';
import { AnswerModule } from './answer/answer.module';
import { QuestionOptionModule } from './question-option/question-option.module';
import { AnswerOptionModule } from './answer-option/answer-option.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo'
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
      
    })
      ,
    SurveysModule,
    QuestionModule,
    UserModule,
    UserSurveyModule,
    AnswerModule,
    QuestionOptionModule,
    AnswerOptionModule,
    CommonModule,
  ],




})
export class AppModule {}
