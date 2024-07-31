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
exports.MachineController = void 0;
const common_1 = require("@nestjs/common");
const machine_service_1 = require("./machine.service");
let MachineController = class MachineController {
    constructor(machineService) {
        this.machineService = machineService;
    }
    findAll() {
        return this.machineService.findAll();
    }
};
exports.MachineController = MachineController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MachineController.prototype, "findAll", null);
exports.MachineController = MachineController = __decorate([
    (0, common_1.Controller)('machine'),
    __metadata("design:paramtypes", [machine_service_1.MachineService])
], MachineController);
//# sourceMappingURL=machine.controller.js.map