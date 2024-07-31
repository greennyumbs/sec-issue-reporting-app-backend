import { TechnicianService } from './technician.service';
import { UpdateIssueStatusDto } from './dto/update-issue.dto';
import { AssignTechnicianDto } from './dto/assign-technician.dto';
export declare class TechnicianController {
    private readonly technicianService;
    constructor(technicianService: TechnicianService);
    findAll(): Promise<any>;
    updateStatus(updateIssueStatusDto: UpdateIssueStatusDto): Promise<any>;
    assignTechnician(assignTechnicianDto: AssignTechnicianDto): Promise<any>;
}
