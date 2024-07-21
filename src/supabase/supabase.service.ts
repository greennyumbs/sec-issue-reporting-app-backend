import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_KEY;

    this.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  }

  async getLogs(): Promise<any> {
    try {
      const { data, error } = await this.supabase
        .from('issue')
        .select('*, machine_part (name, address)');
      if (!error) return data;
    } catch (error) {
      console.error('error', error);
      throw error;
    }
  }

  async getActiveIssues(): Promise<any> {
    try {
      const { data, error } = await this.supabase
        .from('issue')
        .select('*, machine_part (name, address)')
        .or('status.eq.PENDING,status.eq.IN_PROGRESS');

      if (!error) return data;
    } catch (error) {
      console.error('error', error);
      throw error;
    }
  }
}
