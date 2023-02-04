import { Survey } from "src/surveys/entities/survey.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Question extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    surveyId: number;

    @Column()
    questionNumber: number;

    @Column()
    questionContent: string;

    @CreateDateColumn()
    readonly createdAt: Date;
  
    @UpdateDateColumn()
    readonly updatedAt: Date;

    @ManyToOne(() => Survey, survey => survey.question)
    survey: Survey;
    
    
}