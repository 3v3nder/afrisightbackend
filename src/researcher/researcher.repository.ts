import { CustomRepository } from "src/database/typeorm-ex.decorator";
import { Researcher} from "./entities/researcher.entity";
import { Repository } from "typeorm";

@CustomRepository(Researcher)
export class ResearcherRepository extends Repository<Researcher>{

}