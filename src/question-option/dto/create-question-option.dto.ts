// export class CreateQuestionOptionDto {

import { InputType, ObjectType, PickType } from "@nestjs/graphql";
import { QuestionOption } from "../entities/question-option.entity";
import { CoreOutput } from "src/common/dto/output.dto";

//     questionId: number;

//     optionContent: string;

//     score: number;

// }

@InputType()
export class CreateQuestionOptionInput extends PickType(QuestionOption, [
    'questionId',
    'optionContent',
    'score'

]) {}

@ObjectType()
export class CreateQuestionOptionOutput extends CoreOutput {}