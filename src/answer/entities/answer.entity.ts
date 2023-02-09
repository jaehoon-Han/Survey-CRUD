import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { AnswerOption } from "src/answer-option/entities/answer-option.entity";
import { Question } from "src/question/entities/question.entity";
import { UserSurvey } from "src/user-survey/entities/user-survey.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@InputType('AnswerInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Answer extends BaseEntity{
    
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id:number;

    @Field(() => Int)
    @Column()
    userSurveyId: number;

    @Field(() => Int)
    @Column()
    questionId: number;

    @CreateDateColumn()
    readonly createdAt: Date;
  
    @UpdateDateColumn()
    readonly updatedAt: Date;

    @Field(() => Question)
    @ManyToOne(() => Question, question => question.answer,  {eager: false})
    question: Question;

    @Field(() => [UserSurvey], { nullable: true })
    @ManyToOne(() => UserSurvey, userSurvey => userSurvey.answer, { eager: false})
    userSurvey: UserSurvey;

    @Field(() => [AnswerOption], { nullable: true })
    @OneToMany(type => AnswerOption, answerOption => answerOption.answer, {eager: true} )
    answerOption: AnswerOption[];
} 