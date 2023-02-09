import { InputType, ObjectType, PickType } from "@nestjs/graphql";
import { UserSurvey } from "../entities/user-survey.entity";
import { CoreOutput } from "src/common/dto/output.dto";


@InputType()
export class CreateUserSurveyInput extends PickType(UserSurvey, [
    'userId',
    'surveyId',
    'status',
    'totalScore'
]) {}

@ObjectType()
export class CreateUserSurveyOutput extends CoreOutput {}