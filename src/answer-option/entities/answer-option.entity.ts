import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { Answer } from "src/answer/entities/answer.entity";
import { QuestionOption } from "src/question-option/entities/question-option.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";

@InputType('AnswerOptionInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class AnswerOption extends BaseEntity{

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => Int)
    @Column()
    questionOptionId: number;

    @Field(() => Int)
    @Column()
    answerId: number;

    @Field(() => Int, {defaultValue: 0})
    @Column()
    answerScore: number;

    @CreateDateColumn()
    readonly createdAt: Date;
  
    @UpdateDateColumn()
    readonly updatedAt: Date;

    @Field(() => Answer)
    @ManyToOne(() => Answer, answer => answer.answerOption, { onDelete: 'CASCADE',eager: false})
    answer: Answer;

    // @Field(() => [QuestionOption], {nullable: true})
    // @OneToMany(type => QuestionOption, questionOption => questionOption.answerOption, {eager:false})
    // questionOption: QuestionOption;

    @Field(() => QuestionOption)
    @ManyToOne(() => QuestionOption, qusetionOption => qusetionOption.answerOption, { onDelete: 'CASCADE',eager: false})
    questionOption: QuestionOption;
    // questionOption 테이블과 answerOption의 종속관계를 바꿔보자
    // 기존엔 여기가 manytoone이였다!

    // @RelationId((answerOption: AnswerOption) => answerOption.questionOption)
    // OptionId: number;



}