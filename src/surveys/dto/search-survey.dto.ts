import { InputType, ObjectType, PickType } from "@nestjs/graphql";
import { Survey } from "../entities/survey.entity";

@InputType()
export class SearchSurveyInput extends PickType(Survey, ['status']) {}

