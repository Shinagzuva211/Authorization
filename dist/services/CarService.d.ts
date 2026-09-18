import { Car, CreateCarDto } from '../models/Car';
declare class CarService {
    private cars;
    private idCounter;
    findAll(): Car[];
    findById(id: number): Car | null;
    create(dto: CreateCarDto): Car;
    update(id: number, dto: Partial<CreateCarDto>): Car | null;
    delete(id: number): boolean;
}
export declare const carService: CarService;
export {};
//# sourceMappingURL=CarService.d.ts.map