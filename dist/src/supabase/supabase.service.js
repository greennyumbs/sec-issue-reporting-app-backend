"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupabaseService = void 0;
const common_1 = require("@nestjs/common");
const supabase_js_1 = require("@supabase/supabase-js");
let SupabaseService = class SupabaseService {
    constructor() {
        const SUPABASE_URL = process.env.SUPABASE_URL;
        const SUPABASE_KEY = process.env.SUPABASE_KEY;
        this.supabase = (0, supabase_js_1.createClient)(SUPABASE_URL, SUPABASE_KEY);
    }
    async getLogs() {
        try {
            const { data, error } = await this.supabase
                .from('issue')
                .select('*, machine_part (name, address), technician (tech_name)')
                .order('updated_at', { ascending: false });
            if (!error)
                return data;
        }
        catch (error) {
            console.error('error', error);
            throw error;
        }
    }
    async getActiveIssues() {
        try {
            const { data, error } = await this.supabase
                .from('issue')
                .select('*, machine_part (name, address), technician (tech_name)')
                .or('status.eq.PENDING,status.eq.IN_PROGRESS');
            if (!error)
                return data;
        }
        catch (error) {
            console.error('error', error);
            throw error;
        }
    }
};
exports.SupabaseService = SupabaseService;
exports.SupabaseService = SupabaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SupabaseService);
//# sourceMappingURL=supabase.service.js.map