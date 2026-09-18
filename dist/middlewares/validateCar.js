"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateCar = (req, res, next) => {
    const requiredFields = {
        brand: 'Brand',
        model: 'Model',
        year: 'Year',
        price: 'Price',
        fuel: 'Fuel',
        transmission: 'Transmission',
        mileage: 'Mileage',
        color: 'Color',
        engine: 'Engine',
        driveType: 'Drive type',
        image: 'Image',
    };
    const missingFields = [];
    for (const [field, label] of Object.entries(requiredFields)) {
        if (!req.body[field]) {
            missingFields.push(label);
        }
    }
    if (missingFields.length > 0) {
        res
            .status(400)
            .json({ message: `Majburiy maydonlar to'ldirilmagan: ${missingFields.join(', ')}` });
        return;
    }
    const { year, price, mileage } = req.body;
    if (typeof year !== 'number' || year <= 0) {
        res.status(400).json({ message: "Year musbat son bo'lishi kerak." });
        return;
    }
    if (typeof price !== 'number' || price <= 0) {
        res.status(400).json({ message: 'Price 0 dan katta bo`lishi kerak' });
        return;
    }
    if (typeof mileage !== 'number' || mileage < 0) {
        res.status(400).json({ message: 'Mileage manfiy bo`lmasligi kerak' });
        return;
    }
    next();
};
exports.default = validateCar;
//# sourceMappingURL=validateCar.js.map