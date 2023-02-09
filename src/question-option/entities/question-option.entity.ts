import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { AnswerOption } from "src/answer-option/entities/answer-option.entity";
import { Question } from "src/question/entities/question.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";

@InputType('QuestionOptionInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class QuestionOption extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => Int, { defaultValue: null })
    @Column()
    questionId: number;

    @Field(() => String, { defaultValue: null })
    @Column()
    optionContent: string;

    @Field(() => Int, { defaultValue: null })
    @Column()
    score: number;

    @CreateDateColumn()
    readonly createdAt: Date;

    @UpdateDateColumn()
    readonly updatedAt: Date;

    @Field(() => Question)
    @ManyToOne(() => Question, question => question.questionOption)
    question: Question;
    
    @Field(() => [AnswerOption], { nullable: true })
    @OneToMany(type=> AnswerOption, answerOption => answerOption.questionOption, {eager:false})
    answerOption: AnswerOption;

    // @Field(() => AnswerOption)
    // @ManyToOne(() => AnswerOption, answerOption => answerOption.questionOption, {eager: false})
    // answerOption: AnswerOption;
    // 종속 관계 바꾸기

   



    // @Field(() => ID, { name: 'id'})
    // get relayId(): number{
    //     return toGlobalId('QuestionOption', this.id)
    // }

    // @RelationId((questionOption: QuestionOption) => questionOption.question)
    // questionId: number;
}
