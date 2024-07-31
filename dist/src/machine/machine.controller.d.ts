import { MachineService } from './machine.service';
export declare class MachineController {
    private readonly machineService;
    constructor(machineService: MachineService);
    findAll(): Promise<any>;
}
