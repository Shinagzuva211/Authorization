"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CarService_1 = require("../services/CarService");
const router = (0, express_1.Router)();
router.post('/', (req, res) => {
    const prompt = (req.body?.prompt || '').toString().toLowerCase();
    const cars = CarService_1.carService.findAll();
    if (!prompt) {
        return res.json({ response: "Please enter a question." });
    }
    const matched = cars.filter((c) => prompt.includes(c.brand.toLowerCase()) ||
        prompt.includes(c.model.toLowerCase()));
    let response;
    if (/price|narx|цена|cost/.test(prompt)) {
        response = matched.length
            ? matched
                .map((c) => `${c.brand} ${c.model} (${c.year}): $${c.price.toLocaleString()}`)
                .join('\n')
            : `We have ${cars.length} cars available. Ask about a specific brand for pricing.`;
    }
    else if (matched.length) {
        const c = matched[0];
        response = `${c.brand} ${c.model} (${c.year}) — $${c.price.toLocaleString()}, ${c.fuel}, ${c.transmission || 'automatic'}, ${c.mileage ?? 0} km. ${c.description || ''}`;
    }
    else {
        response = `Hello! We currently have ${cars.length} cars in stock: ${cars
            .map((c) => `${c.brand} ${c.model}`)
            .join(', ')}. How can I help you?`;
    }
    res.json({ response });
});
exports.default = router;
//# sourceMappingURL=AiRoutes.js.map