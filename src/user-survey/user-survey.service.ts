import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { UserSurvey } from './entities/user-survey.entity';
import { CreateUserSurveyInput, CreateUserSurveyOutput } from './dto/create-user-survey.dto';
import { AnswerService } from 'src/answer/answer.service';


@Injectable()
export class UserSurveyService {
 
    constructor(
        @InjectRepository(UserSurvey)
        private userSurveyRepository: Repository<UserSurvey>,
      
    ) {}
   

    async getAllUserSurvey(): Promise<UserSurvey[]> {
        return this.userSurveyRepository.find();
    }

    async createUserSurvey(
        createUserSurveyInput: CreateUserSurveyInput
    ): Promise<CreateUserSurveyOutput> {
        const newUserSurvey = this.userSurveyRepository.create(createUserSurveyInput);
        await this.userSurveyRepository.save(newUserSurvey);
        return {
             ok: true,
             message: "설문조사 참가에 성공하였습니다."}
    }

    // status로 찾기 [ 완료 || 미완료 ]
    async getUserSurveyByStatus(status: string) {
        const userSurvey = this.userSurveyRepository.findBy({status})

        return userSurvey
    }


   
 
    
}
