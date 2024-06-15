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
    private researchRepository: ResearcherRepository,
    ) {}

  create(createResearcherDto: CreateResearcherDto) {
    return this.researchRepository.save(createResearcherDto);
  }

  findAll(): Promise<Researcher[]> {
    return this.researchRepository.find();
    }

  findOne(id: number) {
    return `This action returns a #${id} researcher`;
  }

  async update(id: number, updateResearcherDto: UpdateResearcherDto) {
    const update = await this.researchRepository.update(id, updateResearcherDto);
    return update;
  }

  async remove(id: number) {
    const deletion = await this.researchRepository.delete(id);
    return deletion
  }
}
