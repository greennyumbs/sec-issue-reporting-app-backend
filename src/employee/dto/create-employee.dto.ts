import { IsInt, IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateIssueDto {
  @IsInt()
  @ApiProperty({
    example: 1,
    description: 'The ID of the machine',
  })
  machine_id: number;

  @IsString()
  @ApiProperty({
    example: 'The machine is overheating',
    description: 'Details of the issue',
  })
  issue_detail: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'PENDING',
    description: 'Status of the issue',
    default: 'PENDING',
  })
  status?: string = 'PENDING';
}
