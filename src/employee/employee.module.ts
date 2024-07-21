import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { SupabaseService } from '../supabase/supabase.service';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService, SupabaseService],
})
export class EmployeeModule {}
