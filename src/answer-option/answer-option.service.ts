import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnswerOption } from './entities/answer-option.entity';
import { CreateAnswerOptionInput, CreateAnswerOptionOutput } from './dto/create-answer-option.dto';
import { QuestionOptionService } from 'src/question-option/question-option.service';

@Injectable()
export class AnswerOptionService {
    constructor(
    @InjectRepository(AnswerOption)
    private answerOptionRepository: Repository<AnswerOption>,
    private questionOptionService: QuestionOptionService,
) {}

    async getAllAnswerOption(): Promise<AnswerOption[]> {
        return this.answerOptionRepository.find();
    }

   
    

    async createAnswerOption(
        createAnswerOptionInput: CreateAnswerOptionInput
    ): Promise<CreateAnswerOptionOutput> {
        
        const newAnswerOption = this.answerOptionRepository.create(createAnswerOptionInput);
        // console.log('newAnswerOption : ', newAnswerOption)

        const optionId = newAnswerOption.questionOptionId
        console.log('optionId : ', optionId)

        
        const getQuestionOption = this.questionOptionService.getQuestionById(optionId);
        console.log('getQuestionOption : ', getQuestionOption)

        var score =  (await getQuestionOption).score
        console.log('score : ', score)

        newAnswerOption.answerScore = score;
        
        // questionOption에서 getquestionoptionbyId를 만들고 그걸 여기서 실행

        await this.answerOptionRepository.save(newAnswerOption);


        // this.answerOptionRepository.save(newAnswerOption.)
        return {
            ok: true,
            message: '선택지 생성에 성공했습니다.'
        }

        
    }

    // async pickAnswerOption(id: number) {
    //     const question = await this.answerOptionRepository.findOne({where: {id} });
    //     for (var i = 0; i < question.answer.answerOption.length; i++) {
    //         if (question.answer[i].answerOption.score >= 0) {
    //             question.questionOptionId = i;
    //             question.answerScore = question.answer[i].score;
    //             this.answerOptionRepository.save(question);
    //         }
    //     }
    // }


    // async getAllAnswerOption(): Promise <AnswerOption[]> {
    //     return this.answerOptionRepository.find();
    // }

    // async createAnswerOption(createAnswerOptionDto: createAnswerOptionDto) : Promise<AnswerOption>{
    //     const { questionOptionId, answerId } = createAnswerOptionDto;

    //     const answerOption = this.answerOptionRepository.create({
    //         questionOptionId,
    //         answerId
    //     })

    //     await this.answerOptionRepository.save(answerOption);
    //     return answerOption;
    // }
}
