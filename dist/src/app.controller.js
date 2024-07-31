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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("./supabase/supabase.service");
let AppController = class AppController {
    constructor(supabaseService) {
        this.supabaseService = supabaseService;
    }
    async getLogs() {
        const data = await this.supabaseService.getLogs();
        return data;
    }
    async getActiveIssues() {
        const data = await this.supabaseService.getActiveIssues();
        return data;
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('/logs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getLogs", null);
__decorate([
    (0, common_1.Get)('/active-issues'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getActiveIssues", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], AppController);
//# sourceMappingURL=app.controller.js.map