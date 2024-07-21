import { Injectable } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-employee.dto';
// import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class EmployeeService {
  private supabase: SupabaseClient;

  constructor() {
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_KEY;

    this.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  }


  async createIssue(createIssueDto: CreateIssueDto) {

    try {
      const { data, error } = await this.supabase.from('issue').insert([
        {
          machine_id: createIssueDto.machine_id,
          issue_detail: createIssueDto.issue_detail,
        },
      ]);

      return "Issue created successfully!"
      
    } catch (error) {
      console.log('error', error);
      return {
        message: "Issue creation failed!",
        error: error
      }
    }
  }

  // findAll() {
  //   return `This action returns all employee`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} employee`;
  // }

  // update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
  //   return `This action updates a #${id} employee`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} employee`;
  // }
}
