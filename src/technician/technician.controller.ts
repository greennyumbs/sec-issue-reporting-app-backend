import { Controller, Body, Patch } from '@nestjs/common';
import { TechnicianService } from './technician.service';
import { UpdateIssueStatusDto } from './dto/update-issue.dto';

@Controller('technician')
export class TechnicianController {
  constructor(private readonly technicianService: TechnicianService) {}

  @Patch()
  async updateStatus(@Body() updateIssueStatusDto: UpdateIssueStatusDto) {
    return this.technicianService.updateStatus(updateIssueStatusDto);
  }
}
