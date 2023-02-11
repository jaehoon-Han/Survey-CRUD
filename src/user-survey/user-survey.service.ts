import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { UserSurvey } from './entities/user-survey.entity';
import { CreateUserSurveyInput } from './dto/create-user-survey.dto';
import { SurveysService } from 'src/surveys/surveys.service';
import { AnswerService } from 'src/answer/answer.service';
import { AnswerOptionService } from 'src/answer-option/answer-option.service';



@Injectable()
export class UserSurveyService {

    constructor(
        @InjectRepository(UserSurvey)
        private userSurveyRepository: Repository<UserSurvey>,
        private surveysService: SurveysService,
        private answerService: AnswerService,
        private answerOptionService: AnswerOptionService,

    ) { }


    async getAllUserSurvey(): Promise<UserSurvey[]> {
        const userSurvey = this.userSurveyRepository.find();
        return userSurvey;
    }

    async getOneById(id: number) {
        const userSurvey = this.userSurveyRepository.findOneBy({ id });
        return userSurvey;
    }

    async createUserSurvey(
        createUserSurveyInput: CreateUserSurveyInput
    ): Promise<UserSurvey> {
        const newUserSurvey = this.userSurveyRepository.create(createUserSurveyInput);
        await this.userSurveyRepository.save(newUserSurvey);
        return newUserSurvey;
    }

    async getUserSurveyByStatus(status: string) {
        const userSurvey = this.userSurveyRepository.findBy({ status });
        return userSurvey;
    }

    async getUserSurveyById(id: number) {
        const userSurvey = this.userSurveyRepository.findOneBy({ id });
        return userSurvey;
    }


    async sumScore(id: number) {
        const userSurvey = await this.userSurveyRepository.findOne({ where: { id: id } });
        if (!userSurvey) throw new NotFoundException(` ID : ${id}인 유저가 참여한 설문이 존재하지 않습니다. `);

        var surveyID = userSurvey.surveyId;
        console.log(`SurveyId = ${surveyID}`)

        const fromSurvey = await this.surveysService.getSurveyById(surveyID);

        var numberOfQuestion = fromSurvey.amountQuestion;
        console.log(`numberOfQuestion = ${numberOfQuestion}`)

        const answer = await this.answerService.getAnswerByUserSurveyId(userSurvey.id);
        console.log(`answer.length = ${answer.length}`)

        let score = 0;
        for (let i = 0; i < answer.length; i++) {
            if (numberOfQuestion != answer.length) {
                throw new Error(` 모든 질문에 응답하지 않아 sumScore가 진행되지 않습니다.`)
            };
            var answerScore = answer[i].answerOption[0].answerScore;
            score = score + answerScore;
        };
        userSurvey.status = "완료";
        userSurvey.totalScore = score;
        const newSumScore = await this.userSurveyRepository.save(userSurvey);

        if (numberOfQuestion !== answer.length) {
            throw new Error(
                ` 모든 질문에 응답하지 않았습니다. `
            )
        };

        return userSurvey;

    }
}