import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SupabaseService } from './supabase/supabase.service';
import { ConfigModule } from '@nestjs/config';
import { TechnicianModule } from './technician/technician.module';
import { EmployeeModule } from './employee/employee.module';
import { MachineModule } from './machine/machine.module';
import config from '../config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    TechnicianModule,
    EmployeeModule,
    MachineModule,
  ],
  controllers: [AppController],
  providers: [SupabaseService],
})
export class AppModule {}
