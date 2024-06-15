import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Project } from '../../projects/entities/project.entity';

@Entity()
export class Researcher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @ManyToMany(() => Project, (project) => project.id)
  projects: Project[];
}
