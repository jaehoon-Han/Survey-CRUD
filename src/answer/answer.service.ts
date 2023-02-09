import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Answer } from './entities/answer.entity';
import { Repository } from 'typeorm';
import { CreateAnswerInput, CreateAnswerOutput } from './dto/create-answer.dto';
import { QuestionOptionService } from 'src/question-option/question-option.service';

@Injectable()
export class AnswerService {
    constructor(
        @InjectRepository(Answer)
        private answerRepository: Repository<Answer>,
    ) {}

    async getAllAnswer(): Promise<Answer[]> {
        return this.answerRepository.find();
    }

    async createAnswer(
        createAnswerInput: CreateAnswerInput
    ): Promise<CreateAnswerOutput> {
        const newAnswer = this.answerRepository.create(createAnswerInput);
        this.answerRepository.save(newAnswer);
        return{
            ok: true,
            message: '답변 생성에 성공했습니다.'
        }
    }

    // async sumScore(id: number) {
    //     const answer = await this.answerRepository.findBy({id});
    //     const answerScore = await questionOptionService.findBy({id})
    // }

    // async sumScore(id: number) {
    //     const answer = await this.answerRepository.findOne({where: {id}});
    //     var totalScore = 
    //     for (var i = 0; i < answer.answerOption.length; i++) {
    //         var answerId = answer.question[i].id;
    //         this.questionOptionService.getAllQuestionOption();

    //         totalScore += answer.question[i].getAllAnswerOption;
    //     }

    //     answer.totalScore = totalScore;

    //     return this.answerRepository.save(answer);
    // }

    // async pickAnswer(id:number) {
    //     const answer = await this.answerRepository.findOne({ where: {id}});
    //     for (var i = 0; i < answer.answerOption.length; i++) {
    //         if (answer.answerOption[i].answerScore >= 1) {
    //             answer.questionId = i;
    //             answer.question.questionOption[i].score = answer.answerOption[i].answerScore;
    //             this.answerRepository.save(answer);
    //         }
    //     }
    }

    // async createAnswer(createAnswerDto: CreateAnswerDto): Promise<Answer> {
    //     const { userSurveyId, questionId } = createAnswerDto;

    //     const answer = this.answerRepository.create({
    //         userSurveyId,
    //         questionId
    //     })

    //     await this.answerRepository.save(answer);
    //     return answer;
    // }
    // // 유저의 답변을 관리

    // async getAllAnswer(): Promise<Answer[]>{
    //     return this.answerRepository.find();
    // }

