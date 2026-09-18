import { IUser } from '../models/User';
export interface UserResponse {
    id: string;
    name: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
}
declare class UserService {
    create(name: string, email: string, password: string): Promise<UserResponse>;
    findAll(): Promise<UserResponse[]>;
    findById(id: string): Promise<UserResponse | null>;
    update(id: string, data: Partial<IUser>): Promise<UserResponse | null>;
    delete(id: string): Promise<boolean>;
    verifyCredentials(email: string, password: string): Promise<UserResponse | null>;
}
export declare const userService: UserService;
export {};
//# sourceMappingURL=UserService.d.ts.map