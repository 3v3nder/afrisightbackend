

// entities/project.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne, JoinTable } from 'typeorm';
import { Project } from '../../projects/entities/project.entity';

@Entity()
export class Researcher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;


}

