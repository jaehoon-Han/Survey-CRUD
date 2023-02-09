import { Answer } from "src/answer/entities/answer.entity";
import { Survey } from "src/surveys/entities/survey.entity";
import { User } from "src/user/entities/user.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { userSurveyStatus } from "../user-survey-status.enum";
import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";

@InputType('UserSurveyInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class UserSurvey extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => Int)
    @Column()
    surveyId: number;

    @Field(() => Int)
    @Column()
    userId: number;

    @Field(() => String, { defaultValue: "미완료" })
    @Column()
    status: string;
    // 설문 완료 여부
    // false : 미완료 | true : 완료

    @Field(() => Int, { defaultValue: 0 })
    @Column()
    totalScore: number;

    @CreateDateColumn()
    readonly createdAt: Date;

    @UpdateDateColumn()
    readonly updatedAt: Date;

    @Field(() => [Answer], { nullable: true })
    @OneToMany(type => Answer, answer => answer.userSurvey, { eager: true })
    answer: Answer[];

    @Field(() => User)
    @ManyToOne(() => User, user => user.userSurvey, { eager: false })
    user: User;

    @Field(() => Survey)
    @ManyToOne(() => Survey, survey => survey.userSurvey, { eager: false })
    survey: Survey;

    // @Field(() => [Survey], {nullable: true})
    // @OneToMany(type => Survey, survey => survey,userSurvey, {eager: : true})
    // survey: Survey;

   

}
