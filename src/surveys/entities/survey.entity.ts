import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SurveyStatus } from "../survey-status.enum";
import { Question } from "src/question/entities/question.entity";

@Entity()
export class Survey extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: SurveyStatus;

    @CreateDateColumn()
    readonly createdAt: Date;

    @UpdateDateColumn()
    readonly updatedAt: Date;

    @OneToMany(type => Question, question => question.survey, {eager: true})
    question: Question[];
    

    
}