import { InputType, ObjectType, PickType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { CoreOutput } from "src/common/dto/output.dto";
import { User } from "../entities/user.entity";

    // @IsNotEmpty()
    // name: string;

    @InputType()
    export class CreateUserInput extends PickType(User, [
        'name',
        'gender',
    ]) {}

    @ObjectType()
    export class CreateUserOutput extends CoreOutput {}
