import bcrypt from 'bcryptjs';
import { User, IUser } from '../models/User';

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type UserDoc = IUser & { _id: unknown; createdAt?: Date; updatedAt?: Date };

const toUserResponse = (user: UserDoc): UserResponse => ({
  id: String(user._id),
  name: user.name,
  email: user.email,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});

class UserService {
  async create(name: string, email: string, password: string): Promise<UserResponse> {
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      throw new Error('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    return toUserResponse(user as UserDoc);
  }

  findAll(): Promise<UserResponse[]> {
    return User.find().then((users) =>
      users.map((u) => toUserResponse(u as unknown as UserDoc))
    );
  }

  async findById(id: string): Promise<UserResponse | null> {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) return null;
    const user = await User.findById(id);
    return user ? toUserResponse(user as unknown as UserDoc) : null;
  }

  update(id: string, data: Partial<IUser>): Promise<UserResponse | null> {
    return User.findByIdAndUpdate(id, data, { new: true }).then((user) =>
      user ? toUserResponse(user as unknown as UserDoc) : null
    );
  }

  delete(id: string): Promise<boolean> {
    return User.findByIdAndDelete(id).then((user) => !!user);
  }

  async verifyCredentials(email: string, password: string): Promise<UserResponse | null> {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return null;

    return toUserResponse(user as unknown as UserDoc);
  }
}

export const userService = new UserService();
