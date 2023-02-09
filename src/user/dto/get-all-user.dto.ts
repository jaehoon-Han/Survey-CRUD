import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "../entities/user.entity";
import { CoreOutput } from "src/common/dto/output.dto";

@ObjectType()
export class getAllUserOutput extends CoreOutput {

}