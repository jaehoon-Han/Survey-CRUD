import { InputType, ObjectType, PickType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { Survey } from "../entities/survey.entity";
import { CoreOutput } from "src/common/dto/output.dto";
import { SurveyStatus } from "../survey-status.enum";

@InputType()
export class CreateSurveyInput extends PickType(Survey, [
    'title',
    'description',
    'status',
 
    
    
    
]) {}

@ObjectType()
    export class CreateSurveyOutput extends CoreOutput {}
