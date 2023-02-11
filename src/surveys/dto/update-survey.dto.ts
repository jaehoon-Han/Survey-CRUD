import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UpdateSurveyInput {

    @Field(() => Int, {nullable: false})
    surveyId? : number;

    @Field(() => String, {nullable: true})
    title?: string;

    @Field(() => String, {nullable: true})
    description?: string;

    @Field(() => String, {nullable: true})
    status?: string
    
    @Field(() => Int, {nullable: true})
    amountQuestion?: number;
    
    
}