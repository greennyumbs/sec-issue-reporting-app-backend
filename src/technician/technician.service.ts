import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UpdateIssueStatusDto } from './dto/update-issue.dto';
import { AssignTechnicianDto } from './dto/assign-technician.dto';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class TechnicianService {
  private supabase: SupabaseClient;

  constructor() {
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_KEY;

    if (!SUPABASE_URL || !SUPABASE_KEY) {
      throw new Error('Supabase environment variables are not defined');
    }

    this.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  }

  public async assignTechnician(
    assignTechnicianDto: AssignTechnicianDto,
  ): Promise<any> {
    const { issueId, technicianId } = assignTechnicianDto;

    try {
      await this.findTechnicianById(technicianId);
      const issue = await this.findIssueById(issueId);

      if (issue.technician_id === technicianId) {
        return {
          message: 'Cannot assign the same technician',
          httpStatus: 'failed',
        };
      }

      const { error: updateError } = await this.supabase
        .from('issue')
        .update({ technician_id: technicianId })
        .eq('issue_id', issueId);

      if (updateError) {
        console.error('Update Error:', updateError);
        throw new InternalServerErrorException('Technician assignment failed!');
      }

      return {
        message: 'Technician assigned successfully!',
        httpStatus: 'successful',
      };
    } catch (error) {
      console.error('Unexpected Error:', error);
      return {
        message: 'Technician assignment failed!',
        httpStatus: 'failed',
        error: error,
      };
    }
  }

  public async updateStatus(
    updateIssueStatusDto: UpdateIssueStatusDto,
  ): Promise<any> {
    const { id, status, techDetail } = updateIssueStatusDto;

    try {
      const issue = await this.findIssueById(id);

      if (issue.status === status) {
        return {
          message: 'Cannot update to the same status!',
          httpStatus: 'failed',
        };
      }

      const now = new Date();
      const utc7Offset = 7 * 60;
      const localTime = new Date(now.getTime() + utc7Offset * 60 * 1000);

      const { error: updateError } = await this.supabase
        .from('issue')
        .update({
          status: status,
          tech_detail: techDetail,
          updated_at: localTime,
        })
        .eq('issue_id', id);

      if (updateError) {
        console.error('Update Error:', updateError);
        throw new InternalServerErrorException('Issue status update failed!');
      }

      return {
        message: 'Issue status updated successfully!',
        httpStatus: 'successful',
        data: updateIssueStatusDto,
      };
    } catch (error) {
      console.error('Unexpected Error:', error);
      return {
        message: 'Issue status update failed!',
        httpStatus: 'failed',
        error: error,
      };
    }
  }

  private async findTechnicianById(id: number): Promise<any> {
    try {
      const { data: data, error: fetchError } = await this.supabase
        .from('technician')
        .select('technician_id')
        .eq('technician_id', id)
        .single();

      if (fetchError) {
        console.error('Fetch Error:', fetchError);
        throw new NotFoundException('Technician not found!');
      }

      return data;
    } catch (error) {
      console.error('Unexpected Error:', error);
      throw new InternalServerErrorException('Technician finding failed!');
    }
  }

  private async findIssueById(id: number): Promise<any> {
    try {
      const { data, error: fetchError } = await this.supabase
        .from('issue')
        .select('*')
        .eq('issue_id', id)
        .single();

      if (fetchError) {
        console.error('Fetch Error:', fetchError);
        throw new NotFoundException('Issue not found!');
      }
      console.log('returned data', data);
      return data;
    } catch (error) {
      console.error('Unexpected Error:', error);
      throw new InternalServerErrorException('Issue status finding failed!');
    }
  }
}
