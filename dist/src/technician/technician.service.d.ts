import { UpdateIssueStatusDto } from './dto/update-issue.dto';
import { AssignTechnicianDto } from './dto/assign-technician.dto';
export declare class TechnicianService {
    private supabase;
    constructor();
    findAll(): Promise<any>;
    assignTechnician(assignTechnicianDto: AssignTechnicianDto): Promise<any>;
    updateStatus(updateIssueStatusDto: UpdateIssueStatusDto): Promise<any>;
    private findTechnicianById;
    private findIssueById;
}
