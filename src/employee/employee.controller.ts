import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateIssueDto } from './dto/create-employee.dto';
// import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { SupabaseService } from '../supabase/supabase.service';

@Controller('employee') // path '/employee'
export class EmployeeController {
  constructor(private readonly supabaseService: SupabaseService,
    private readonly employeeService: EmployeeService,
  ) {}

  @Get('/logs')
  async getLogs() {
    const data = await this.supabaseService.getLogs('issue');
    return data;
  }

  @Post()
  create(@Body() createIssueDto: CreateIssueDto) {
    return this.employeeService.createIssue(createIssueDto);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.employeeService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
  //   return this.employeeService.update(+id, updateEmployeeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.employeeService.remove(+id);
  // }
}
