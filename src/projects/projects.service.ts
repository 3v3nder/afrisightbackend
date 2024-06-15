import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { ProjectRepository } from './project.repository';




@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectRepository)
    private projectRepository: ProjectRepository,
    ) {}

  create(createProjectDto: CreateProjectDto) {
    return this.projectRepository.save(createProjectDto);
  }

  findAll() : Promise<Project[]> {
    return this.projectRepository.find();
    }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }


  async update(id: number, updateProjectDto: UpdateProjectDto){

    const update = await this.projectRepository.update(id, updateProjectDto);
    return update;
  }

  async remove(id: number) {
    const deletion = await this.projectRepository.delete(id);
    return deletion
  }
}

