"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CarController_1 = require("../controllers/CarController");
const validateCar_1 = __importDefault(require("../middlewares/validateCar"));
const router = (0, express_1.Router)();
router.get('/', CarController_1.carController.getAllCars);
router.get('/:id', CarController_1.carController.getCarById);
router.post('/', validateCar_1.default, CarController_1.carController.createCar);
router.delete('/:id', CarController_1.carController.deleteCar);
router.put('/:id', validateCar_1.default, CarController_1.carController.updateCar);
router.patch('/:id', validateCar_1.default, CarController_1.carController.partialChange);
exports.default = router;
//# sourceMappingURL=CarRoutes.js.map