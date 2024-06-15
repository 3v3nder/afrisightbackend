import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResearcherService } from './researcher.service';
import { CreateResearcherDto } from './dto/create-researcher.dto';
import { UpdateResearcherDto } from './dto/update-researcher.dto';

@Controller('researcher')
export class ResearcherController {
  constructor(private readonly researcherService: ResearcherService) {}

  @Post()
  create(@Body() createResearcherDto: CreateResearcherDto) {
    return this.researcherService.create(createResearcherDto);
  }

  @Get()
  findAll() {
    return this.researcherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.researcherService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResearcherDto: UpdateResearcherDto) {
    return this.researcherService.update(+id, updateResearcherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.researcherService.remove(+id);
  }
}
