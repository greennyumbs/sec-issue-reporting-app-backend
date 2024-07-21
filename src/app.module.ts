import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { SupabaseService } from './supabase/supabase.service';
import { ConfigModule } from '@nestjs/config';
import config from '../config/config';

@Module({
  imports: [EmployeeModule, ConfigModule.forRoot({
    load: [config],
    isGlobal: true,
  })],
  controllers: [AppController],
  providers: [AppService, SupabaseService],
})
export class AppModule {}
