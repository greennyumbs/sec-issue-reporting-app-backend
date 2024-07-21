import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SupabaseService } from './supabase/supabase.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly supabaseService: SupabaseService,
  ) {}

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
