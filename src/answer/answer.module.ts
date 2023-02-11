import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from './entities/answer.entity';
import { AnswerResolver } from './answer.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Answer])],
  exports: [AnswerService],
  providers: [
    AnswerService, 
    AnswerResolver]
})
export class AnswerModule {}
