// entities/project.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne, JoinTable } from 'typeorm';
import { Task } from '../../task/entities/task.entity';
import { Researcher } from '../../researcher/entities/researcher.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string; // Planning, In Progress, Completed

  @Column()
  dueDate: Date;

  @Column('text', {nullable: true})
  notes: string;

  @Column('simple-array', {nullable: true})
  researchFindings: string[];

  @Column('simple-array', { nullable: true })
  @OneToMany(() => Task, (task) => task.project, {eager:true})
  tasks: Task[];

  @Column('simple-array', { nullable: true })
  researcherNames: string[];


}

