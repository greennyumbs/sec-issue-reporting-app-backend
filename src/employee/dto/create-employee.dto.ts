import { IsInt, IsString, IsOptional } from 'class-validator';

export class CreateIssueDto {
    @IsInt()
    machine_id: number;

    @IsString()
    issue_detail: string;

    @IsString()
    @IsOptional()
    status?: string = 'PEDNING';
}
