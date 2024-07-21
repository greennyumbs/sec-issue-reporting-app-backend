import { Controller, Post, Body } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateIssueDto } from './dto/create-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() createIssueDto: CreateIssueDto) {
    return this.employeeService.createIssue(createIssueDto);
  }
}
