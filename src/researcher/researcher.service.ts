import { Injectable } from '@nestjs/common';
import { CreateResearcherDto } from './dto/create-researcher.dto';
import { UpdateResearcherDto } from './dto/update-researcher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Researcher } from './entities/researcher.entity';
import { ResearcherRepository } from './researcher.repository';

@Injectable()
export class ResearcherService {
  constructor(
    @InjectRepository(ResearcherRepository)
    private researcherRepository: ResearcherRepository,
    ) {}

  create(createResearcherDto: CreateResearcherDto) {
    return this.researcherRepository.save(createResearcherDto);
  }

  findAll() : Promise<Researcher[]> {
    return this.researcherRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} researcher`;
  }

  // findAllByProjectId(projectId: number): Promise<Researcher[]> {
  //   return this.researcherRepository.find({
  //     where: {
  //       project: {
  //         id: projectId,
  //       },
  //     },
  //     relations: ['project'],
  //   });
  // }

  async update(id: number, updateResearcherDto: UpdateResearcherDto) {
    
    const update = await this.researcherRepository.update(id, updateResearcherDto);
    return update;
  }

  async remove(id: number) {
    const deletion = await this.researcherRepository.delete(id);
    return deletion
  }
}
