import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class MachineService {
  private supabase: SupabaseClient;

  constructor() {
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_KEY;

    this.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  }

  async findAll(): Promise<any> {
    try {
      const { data } = await this.supabase
        .from('machine_part')
        .select('id, name')
        .order('id');

      return {
        data,
        message: 'Machine list fetched successfully!',
        httpStatus: 'successful',
      };
    } catch (error) {
      console.error('error', error);
      throw new HttpException(
        {
          message: 'Failed to fetch machine list!',
          error: error,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
