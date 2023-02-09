import { Module } from '@nestjs/common';
import { UserSurveyService } from './user-survey.service';
import { UserSurvey } from './entities/user-survey.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSurveyResolver } from './user-survey.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UserSurvey])],
  exports: [UserSurveyService],
  providers: [UserSurveyService, UserSurveyResolver]
})
export class UserSurveyModule {}
