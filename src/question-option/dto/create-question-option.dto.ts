import { InputType, ObjectType, PickType } from "@nestjs/graphql";
import { QuestionOption } from "../entities/question-option.entity";

@InputType()
export class CreateQuestionOptionInput extends PickType(QuestionOption, [
    'questionId',
    'optionContent',
    'score'

]) {}
