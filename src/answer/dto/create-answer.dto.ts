// export class CreateAnswerDto {

import { InputType, ObjectType, PickType } from "@nestjs/graphql";
import { Answer } from "../entities/answer.entity";
import { CoreOutput } from "src/common/dto/output.dto";

//     userSurveyId: number;

//     questionId: number;

    
// }

@InputType()
export class CreateAnswerInput extends PickType(Answer, [
    'userSurveyId',
    'questionId',
]) {}

@ObjectType()
    export class CreateAnswerOutput extends CoreOutput {}