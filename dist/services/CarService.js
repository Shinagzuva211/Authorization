"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carService = void 0;
const Car_1 = require("../models/Car");
class CarService {
    constructor() {
        this.cars = [...Car_1.seedCars];
        this.idCounter = Car_1.seedCars.length + 1;
    }
    findAll() {
        return this.cars;
    }
    findById(id) {
        return this.cars.find((c) => c.id === id) || null;
    }
    create(dto) {
        const car = {
            ...dto,
            id: this.idCounter++,
            createdAt: new Date(),
        };
        this.cars.push(car);
        return car;
    }
    update(id, dto) {
        const index = this.cars.findIndex((c) => c.id === id);
        if (index === -1)
            return null;
        this.cars[index] = { ...this.cars[index], ...dto };
        return this.cars[index];
    }
    delete(id) {
        const initialLength = this.cars.length;
        this.cars = this.cars.filter((c) => c.id !== id);
        return this.cars.length < initialLength;
    }
}
exports.carService = new CarService();
//# sourceMappingURL=CarService.js.map