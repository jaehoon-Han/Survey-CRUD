import { InputType, ObjectType, PickType } from "@nestjs/graphql";
import { Survey } from "../entities/survey.entity";

@InputType()
export class CreateSurveyInput extends PickType(Survey, [
    'title',
    'description',
    'status',
    'amountQuestion',
 
]) {}
