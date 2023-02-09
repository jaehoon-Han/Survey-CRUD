import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Question } from "src/question/entities/question.entity";
import { UserSurvey } from "src/user-survey/entities/user-survey.entity";
import { Field, ID, InputType, Int, ObjectType } from "@nestjs/graphql";


@InputType('SurveyInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Survey extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id:number;

    @Field(() => String)
    @Column()
    title: string;

    @Field(() => String)
    @Column()
    description: string;

    @Field(() => String, { defaultValue: "진행 중" })
    @Column({ nullable: true })
    status: string;
    
    @CreateDateColumn()
    readonly createdAt: Date;

    @UpdateDateColumn()
    readonly updatedAt: Date;

    @Field(() => [Question], { nullable: true })
    @OneToMany(type => Question, question => question.survey, {eager: true})
    question: Question[];

    @Field(() => [UserSurvey], { nullable: true })
    @OneToMany(type => UserSurvey, userSurvey => userSurvey.survey, {eager : true})
    userSurvey: UserSurvey[];

}