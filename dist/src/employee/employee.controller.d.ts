import { EmployeeService } from './employee.service';
import { CreateIssueDto } from './dto/create-employee.dto';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    create(createIssueDto: CreateIssueDto): Promise<{
        message: string;
        httpStatus: string;
    }>;
}
