import { SupabaseService } from './supabase/supabase.service';
export declare class AppController {
    private readonly supabaseService;
    constructor(supabaseService: SupabaseService);
    getLogs(): Promise<any>;
    getActiveIssues(): Promise<any>;
}
