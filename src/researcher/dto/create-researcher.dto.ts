import { IsString, IsNotEmpty, IsDate, IsOptional, IsArray, ArrayMinSize} from '@nestjs/class-validator';

import { ApiProperty } from "@nestjs/swagger";
export class CreateResearcherDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({type:String, description:'text'})
    name: string;

}