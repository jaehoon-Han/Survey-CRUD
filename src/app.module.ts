import { Module } from '@nestjs/common';
import { SurveysModule } from './surveys/surveys.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { typeORMConfig } from './configs/typeorm.config';
import { QuestionService } from './question/question.service';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    SurveysModule,
    QuestionModule
  ],
  

})
export class AppModule {}
