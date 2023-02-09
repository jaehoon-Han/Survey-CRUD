import { InputType, ObjectType, PickType } from "@nestjs/graphql";
import { Question } from "../entities/question.entity";
import { CoreOutput } from "src/common/dto/output.dto";

@InputType()
export class CreateQuestionInput extends PickType(Question, [
    'surveyId',
    'questionNumber',
    'questionContent'
]) {}

@ObjectType()
export class CreateQuestionOutput extends CoreOutput {}
