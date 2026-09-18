import { Request, Response, NextFunction } from 'express';
export declare const carController: {
    getAllCars: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getCarById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createCar: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateCar: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    partialChange: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteCar: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=CarController.d.ts.map