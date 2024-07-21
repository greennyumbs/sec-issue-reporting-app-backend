import { Injectable } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-employee.dto';
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
      await this.supabase.from('issue').insert([
        {
          machine_id: createIssueDto.machine_id,
          issue_detail: createIssueDto.issue_detail,
        },
      ]);
      return {
        message: 'Issue created successfully!',
        httpStatus: 'successful',
      };
    } catch (error) {
      console.log('error', error);
      return {
        message: 'Issue creation failed!',
        httpStatus: 'failed',
        error: error,
      };
    }
  }
}
