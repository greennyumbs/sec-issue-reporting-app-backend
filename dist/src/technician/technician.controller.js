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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnicianController = void 0;
const common_1 = require("@nestjs/common");
const technician_service_1 = require("./technician.service");
const update_issue_dto_1 = require("./dto/update-issue.dto");
const assign_technician_dto_1 = require("./dto/assign-technician.dto");
let TechnicianController = class TechnicianController {
    constructor(technicianService) {
        this.technicianService = technicianService;
    }
    async findAll() {
        return this.technicianService.findAll();
    }
    async updateStatus(updateIssueStatusDto) {
        return this.technicianService.updateStatus(updateIssueStatusDto);
    }
    async assignTechnician(assignTechnicianDto) {
        return this.technicianService.assignTechnician(assignTechnicianDto);
    }
};
exports.TechnicianController = TechnicianController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TechnicianController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_issue_dto_1.UpdateIssueStatusDto]),
    __metadata("design:returntype", Promise)
], TechnicianController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Patch)('/assign'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [assign_technician_dto_1.AssignTechnicianDto]),
    __metadata("design:returntype", Promise)
], TechnicianController.prototype, "assignTechnician", null);
exports.TechnicianController = TechnicianController = __decorate([
    (0, common_1.Controller)('technician'),
    __metadata("design:paramtypes", [technician_service_1.TechnicianService])
], TechnicianController);
//# sourceMappingURL=technician.controller.js.map