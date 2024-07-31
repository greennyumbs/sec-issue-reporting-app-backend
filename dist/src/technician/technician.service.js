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
exports.TechnicianService = void 0;
const common_1 = require("@nestjs/common");
const supabase_js_1 = require("@supabase/supabase-js");
let TechnicianService = class TechnicianService {
    constructor() {
        const SUPABASE_URL = process.env.SUPABASE_URL;
        const SUPABASE_KEY = process.env.SUPABASE_KEY;
        if (!SUPABASE_URL || !SUPABASE_KEY) {
            throw new Error('Supabase environment variables are not defined');
        }
        this.supabase = (0, supabase_js_1.createClient)(SUPABASE_URL, SUPABASE_KEY);
    }
    async findAll() {
        try {
            const { data, error } = await this.supabase
                .from('technician')
                .select('technician_id, tech_name');
            if (error) {
                console.error('Fetch Error:', error);
                throw new common_1.InternalServerErrorException('Technician fetching failed!');
            }
            return data;
        }
        catch (error) {
            console.error('Unexpected Error:', error);
            throw new common_1.InternalServerErrorException('Technician fetching failed!');
        }
    }
    async assignTechnician(assignTechnicianDto) {
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
                throw new common_1.InternalServerErrorException('Technician assignment failed!');
            }
            return {
                message: 'Technician assigned successfully!',
                httpStatus: 'successful',
            };
        }
        catch (error) {
            console.error('Unexpected Error:', error);
            return {
                message: 'Technician assignment failed!',
                httpStatus: 'failed',
                error: error,
            };
        }
    }
    async updateStatus(updateIssueStatusDto) {
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
                throw new common_1.InternalServerErrorException('Issue status update failed!');
            }
            return {
                message: 'Issue status updated successfully!',
                httpStatus: 'successful',
                data: updateIssueStatusDto,
            };
        }
        catch (error) {
            console.error('Unexpected Error:', error);
            return {
                message: 'Issue status update failed!',
                httpStatus: 'failed',
                error: error,
            };
        }
    }
    async findTechnicianById(id) {
        try {
            const { data: data, error: fetchError } = await this.supabase
                .from('technician')
                .select('technician_id')
                .eq('technician_id', id)
                .single();
            if (fetchError) {
                console.error('Fetch Error:', fetchError);
                throw new common_1.NotFoundException('Technician not found!');
            }
            return data;
        }
        catch (error) {
            console.error('Unexpected Error:', error);
            throw new common_1.InternalServerErrorException('Technician finding failed!');
        }
    }
    async findIssueById(id) {
        try {
            const { data, error: fetchError } = await this.supabase
                .from('issue')
                .select('*')
                .eq('issue_id', id)
                .single();
            if (fetchError) {
                console.error('Fetch Error:', fetchError);
                throw new common_1.NotFoundException('Issue not found!');
            }
            console.log('returned data', data);
            return data;
        }
        catch (error) {
            console.error('Unexpected Error:', error);
            throw new common_1.InternalServerErrorException('Issue status finding failed!');
        }
    }
};
exports.TechnicianService = TechnicianService;
exports.TechnicianService = TechnicianService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TechnicianService);
//# sourceMappingURL=technician.service.js.map