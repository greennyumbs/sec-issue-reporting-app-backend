import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AssignTechnicianDto {
  @IsInt()
  @ApiProperty({
    example: 1,
    description: 'The ID of the technician',
  })
  technicianId: number;

  @IsInt()
  @ApiProperty({
    example: 1,
    description: 'The ID of the machine',
  })
  issueId: number;
}
