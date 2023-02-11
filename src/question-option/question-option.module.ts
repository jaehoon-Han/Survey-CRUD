import { Module } from '@nestjs/common';
import { QuestionOptionService } from './question-option.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionOption } from './entities/question-option.entity';
import { QuestionOptionResolver } from './question-option.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionOption])],
  exports: [QuestionOptionService],
  providers: [
    QuestionOptionService, 
    QuestionOptionResolver, ]
})
export class QuestionOptionModule {}
