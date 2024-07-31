import { CreateIssueDto } from './dto/create-employee.dto';
export declare class EmployeeService {
    private supabase;
    constructor();
    createIssue(createIssueDto: CreateIssueDto): Promise<{
        message: string;
        httpStatus: string;
    }>;
}
