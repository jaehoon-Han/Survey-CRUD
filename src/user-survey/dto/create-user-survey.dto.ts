import { InputType, PickType } from "@nestjs/graphql";
import { UserSurvey } from "../entities/user-survey.entity";


@InputType()
export class CreateUserSurveyInput extends PickType(UserSurvey, [
    'userId',
    'surveyId',
    'status',
    'totalScore'
]) {}

