import { IsInt, IsString, IsIn } from 'class-validator';
import { STATUS } from '../enum';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateIssueStatusDto {
  @IsInt()
  @ApiProperty({
    example: 1,
    description: 'The ID of the machine',
  })
  issueId: number;

  @IsString()
  @IsIn([
    STATUS.PENDING,
    STATUS.IN_PROGRESS,
    STATUS.COMPLETED,
    STATUS.CANCELLED,
  ])
  @ApiProperty({
    example: 'PENDING',
    description:
      'Status of the issue (PENDING, IN_PROGRESS, COMPLETED, CANCELLED)',
  })
  status: string;

  @IsString()
  @ApiProperty({
    example: 'Fixed the machine',
    description: 'Details of the work done',
  })
  techDetail: string;
}
