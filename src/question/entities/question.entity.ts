import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { Answer } from "src/answer/entities/answer.entity";
import { QuestionOption } from "src/question-option/entities/question-option.entity";
import { Survey } from "src/surveys/entities/survey.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@InputType('QuestionInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Question extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => Int, { defaultValue: null })
    @Column()
    surveyId: number;

    @Field(() => Int, { defaultValue: null })
    @Column()
    questionNumber: number;

    @Field(() => String)
    @Column()
    questionContent: string;

    @CreateDateColumn()
    readonly createdAt: Date;

    @UpdateDateColumn()
    readonly updatedAt: Date;

    @Field(() => Survey)
    @ManyToOne(() => Survey, survey => survey.question)
    survey: Survey;

    @Field(() => [QuestionOption], { nullable: true })
    @OneToMany(type => QuestionOption, questionOption => questionOption.question, { eager: true })
    questionOption: QuestionOption[];

    @Field(() => [Question], { nullable: true })
    @OneToMany(type => Answer, answer => answer.question, { eager: true })
    answer: Answer[];

}