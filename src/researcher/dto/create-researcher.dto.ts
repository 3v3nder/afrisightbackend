import { IsString, IsNotEmpty, IsDate, IsOptional, IsArray, ArrayMinSize, IsEmail} from '@nestjs/class-validator';
import { Project } from '../../projects/entities/project.entity';
import { ApiProperty } from "@nestjs/swagger";

export class CreateResearcherDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty({type:String, description:'text'})
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({type:String, description:'text'})
  email: string;

  @IsNotEmpty()
  @ApiProperty({type:Number, description:'text'})
  project: Project;

}
