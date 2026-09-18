"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carController = void 0;
const Car_1 = require("../models/Car");
exports.carController = {
    getAllCars: async (req, res, next) => {
        try {
            const cars = await Car_1.Car.find();
            res.status(200).json(cars);
        }
        catch (err) {
            next(err);
        }
    },
    getCarById: async (req, res, next) => {
        try {
            const car = await Car_1.Car.findById(req.params.id);
            if (!car) {
                res.status(404).json({ message: 'Mashina topilmadi' });
                return;
            }
            res.status(200).json(car);
        }
        catch (err) {
            next(err);
        }
    },
    createCar: async (req, res, next) => {
        try {
            const newCar = await Car_1.Car.create(req.body);
            res.status(201).json({ message: "Mashina qo'shildi", car: newCar });
        }
        catch (err) {
            next(err);
        }
    },
    updateCar: async (req, res, next) => {
        try {
            const car = await Car_1.Car.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true,
            });
            if (!car) {
                res.status(404).json({ message: 'Mashina topilmadi' });
                return;
            }
            res.status(200).json({ message: 'Mashina o`zgartirildi', car });
        }
        catch (err) {
            next(err);
        }
    },
    partialChange: async (req, res, next) => {
        try {
            const car = await Car_1.Car.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true,
            });
            if (!car) {
                res.status(404).json({ message: 'Mashina topilmadi' });
                return;
            }
            res.status(200).json({ message: 'Mashina qisman o`zgartirildi', car });
        }
        catch (err) {
            next(err);
        }
    },
    deleteCar: async (req, res, next) => {
        try {
            const car = await Car_1.Car.findByIdAndDelete(req.params.id);
            if (!car) {
                res.status(404).json({ message: 'Mashina topilmadi' });
                return;
            }
            res.status(200).json({ message: "Mashina o'chirildi", car });
        }
        catch (err) {
            next(err);
        }
    },
};
//# sourceMappingURL=CarController.js.map