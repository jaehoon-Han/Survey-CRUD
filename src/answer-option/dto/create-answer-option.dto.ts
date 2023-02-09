// export class createAnswerOptionDto {
//     questionOptionId: number;

import { InputType, ObjectType, PickType } from "@nestjs/graphql";
import { CoreOutput } from "src/common/dto/output.dto";
import { AnswerOption } from "../entities/answer-option.entity";

//     answerId: number;
// }

@InputType()
export class CreateAnswerOptionInput extends PickType(AnswerOption, [
    'answerId',
    'questionOptionId',
    'answerScore'
]) {}

@ObjectType()
    export class CreateAnswerOptionOutput extends CoreOutput{}