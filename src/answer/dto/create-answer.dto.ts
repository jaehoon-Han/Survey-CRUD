// export class CreateAnswerDto {

import { InputType, ObjectType, PickType } from "@nestjs/graphql";
import { Answer } from "../entities/answer.entity";

//     userSurveyId: number;

//     questionId: number;

    
// }

@InputType()
export class CreateAnswerInput extends PickType(Answer, [
    'userSurveyId',
    'questionId',
]) {}
