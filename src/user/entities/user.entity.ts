import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { UserSurvey } from "src/user-survey/entities/user-survey.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@InputType('UserInputType', { isAbstract: true})
@ObjectType()
@Entity()
export class User extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => String)
    @Column()
    gender: string;

    @CreateDateColumn()
    readonly createdAt: Date;
  
    @UpdateDateColumn()
    readonly updatedAt: Date;

    @Field(() => [UserSurvey], { nullable: true })
    @OneToMany(type => UserSurvey, userSurvey => userSurvey.user, { eager : true})
    userSurvey: UserSurvey[];
}