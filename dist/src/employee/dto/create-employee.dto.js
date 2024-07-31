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
exports.CreateIssueDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateIssueDto {
    constructor() {
        this.status = 'PENDING';
    }
}
exports.CreateIssueDto = CreateIssueDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The ID of the machine',
    }),
    __metadata("design:type", Number)
], CreateIssueDto.prototype, "machine_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'The machine is overheating',
        description: 'Details of the issue',
    }),
    __metadata("design:type", String)
], CreateIssueDto.prototype, "issue_detail", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'PENDING',
        description: 'Status of the issue',
        default: 'PENDING',
    }),
    __metadata("design:type", String)
], CreateIssueDto.prototype, "status", void 0);
//# sourceMappingURL=create-employee.dto.js.map