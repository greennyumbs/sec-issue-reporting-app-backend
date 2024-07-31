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
exports.UpdateIssueStatusDto = void 0;
const class_validator_1 = require("class-validator");
const enum_1 = require("../enum");
const swagger_1 = require("@nestjs/swagger");
class UpdateIssueStatusDto {
}
exports.UpdateIssueStatusDto = UpdateIssueStatusDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The ID of the machine',
    }),
    __metadata("design:type", Number)
], UpdateIssueStatusDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)([
        enum_1.STATUS.PENDING,
        enum_1.STATUS.IN_PROGRESS,
        enum_1.STATUS.COMPLETED,
        enum_1.STATUS.CANCELLED,
    ]),
    (0, swagger_1.ApiProperty)({
        example: 'PENDING',
        description: 'Status of the issue (PENDING, IN_PROGRESS, COMPLETED, CANCELLED)',
    }),
    __metadata("design:type", String)
], UpdateIssueStatusDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'Fixed the machine',
        description: 'Details of the work done',
    }),
    __metadata("design:type", String)
], UpdateIssueStatusDto.prototype, "techDetail", void 0);
//# sourceMappingURL=update-issue.dto.js.map