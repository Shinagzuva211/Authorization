export interface ICar {
    brand: string;
    model: string;
    year: number;
    price: number;
    fuel: string;
    transmission: string;
    mileage: number;
    color: string;
    engine: string;
    driveType: string;
    features: string[];
    description?: string;
    image: string;
    condition?: 'new' | 'used';
}
export declare const Car: import("mongoose").Model<ICar, {}, {}, {}, import("mongoose").Document<unknown, {}, ICar, {}, import("mongoose").DefaultSchemaOptions> & ICar & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, ICar>;
//# sourceMappingURL=Car.d.ts.map