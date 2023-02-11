import { InputType, ObjectType, PickType } from "@nestjs/graphql";
import { Question } from "../entities/question.entity";

@InputType()
export class CreateQuestionInput extends PickType(Question, [
    'surveyId',
    'questionNumber',
    'questionContent'
]) {}
