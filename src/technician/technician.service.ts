import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UpdateIssueStatusDto } from './dto/update-issue.dto';
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

  public async updateStatus(
    updateIssueStatusDto: UpdateIssueStatusDto,
  ): Promise<any> {
    const { id, status } = updateIssueStatusDto;

    try {
      const { data: data, error: fetchError } = await this.supabase
        .from('issue')
        .select('status')
        .eq('issue_id', id)
        .single();

      if (fetchError) {
        console.error('Fetch Error:', fetchError);
        throw new NotFoundException('Issue not found!');
      }

      if (data.status === status) {
        return {
          message: 'Cannot update to the same status!',
          httpStatus: 'failed',
          data: updateIssueStatusDto,
        };
      }

      const now = new Date();
      const utc7Offset = 7 * 60;
      const localTime = new Date(now.getTime() + utc7Offset * 60 * 1000);

      const { error: updateError } = await this.supabase
        .from('issue')
        .update({ status: status, updated_at: localTime })
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
}
