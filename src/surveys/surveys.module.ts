import { Module } from '@nestjs/common';
import { SurveysService } from './surveys.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from './entities/survey.entity';
import { SurveysResolver } from './surveys.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Survey])],
  exports: [SurveysService],
  providers: [SurveysService, SurveysResolver]

})
export class SurveysModule {}

// todo : one to many ,, many to one 관계망 구축하기