"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = require("../models/User");
const toUserResponse = (user) => ({
    id: String(user._id),
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
});
class UserService {
    async create(name, email, password) {
        const existing = await User_1.User.findOne({ email: email.toLowerCase() });
        if (existing) {
            throw new Error('Email already exists');
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const user = await User_1.User.create({ name, email, password: hashedPassword });
        return toUserResponse(user);
    }
    findAll() {
        return User_1.User.find().then((users) => users.map((u) => toUserResponse(u)));
    }
    async findById(id) {
        if (!id.match(/^[0-9a-fA-F]{24}$/))
            return null;
        const user = await User_1.User.findById(id);
        return user ? toUserResponse(user) : null;
    }
    update(id, data) {
        return User_1.User.findByIdAndUpdate(id, data, { new: true }).then((user) => user ? toUserResponse(user) : null);
    }
    delete(id) {
        return User_1.User.findByIdAndDelete(id).then((user) => !!user);
    }
    async verifyCredentials(email, password) {
        const user = await User_1.User.findOne({ email: email.toLowerCase() });
        if (!user)
            return null;
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatch)
            return null;
        return toUserResponse(user);
    }
}
exports.userService = new UserService();
//# sourceMappingURL=UserService.js.map