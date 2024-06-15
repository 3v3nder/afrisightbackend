import { Module } from '@nestjs/common';
import { ResearcherService } from './researcher.service';
import { ResearcherController } from './researcher.controller';
import { TypeOrmModule } from 'src/database/typeorm-ex.module';
import { ResearcherRepository } from './researcher.repository';

@Module({
  imports:[TypeOrmModule.forCustomRepository([ResearcherRepository])],
  controllers: [ResearcherController],
  providers: [ResearcherService],
})
export class ResearcherModule {}
