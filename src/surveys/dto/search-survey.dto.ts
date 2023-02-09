import { InputType, ObjectType, PickType } from "@nestjs/graphql";
import { CoreOutput } from "src/common/dto/output.dto";
import { Survey } from "../entities/survey.entity";

@InputType()
export class SearchSurveyInput extends PickType(Survey, ['status']) {}

