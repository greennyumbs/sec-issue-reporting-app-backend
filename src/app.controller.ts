import { Controller, Get } from '@nestjs/common';
import { SupabaseService } from './supabase/supabase.service';

@Controller('api')
export class AppController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Get('/logs')
  async getLogs() {
    const data = await this.supabaseService.getLogs();
    return data;
  }

  @Get('/active-issues')
  async getActiveIssues() {
    const data = await this.supabaseService.getActiveIssues();
    return data;
  }
}
