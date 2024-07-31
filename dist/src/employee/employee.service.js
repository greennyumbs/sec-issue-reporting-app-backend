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
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const supabase_js_1 = require("@supabase/supabase-js");
let EmployeeService = class EmployeeService {
    constructor() {
        const SUPABASE_URL = process.env.SUPABASE_URL;
        const SUPABASE_KEY = process.env.SUPABASE_KEY;
        this.supabase = (0, supabase_js_1.createClient)(SUPABASE_URL, SUPABASE_KEY);
    }
    async createIssue(createIssueDto) {
        try {
            const { error } = await this.supabase.from('issue').insert([
                {
                    machine_id: createIssueDto.machine_id,
                    issue_detail: createIssueDto.issue_detail,
                },
            ]);
            if (error) {
                throw new common_1.HttpException({
                    message: 'Issue creation failed!',
                    error: error,
                }, common_1.HttpStatus.NOT_FOUND);
            }
            return {
                message: 'Issue created successfully!',
                httpStatus: 'successful',
            };
        }
        catch (error) {
            throw new common_1.HttpException({
                message: 'Issue creation failed!',
                error: error,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.EmployeeService = EmployeeService;
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], EmployeeService);
//# sourceMappingURL=employee.service.js.map