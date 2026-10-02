// Admin foydalanuvchini yaratadi/yangilaydi:
//   npm run seed:admin
// .env da ADMIN_EMAIL va ADMIN_PASSWORD bo'lishi shart.
import dotenv from 'dotenv';
dotenv.config();

import connectDB from '../config/db';
import { userService } from '../services/UserService';

async function run(): Promise<void> {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    console.error('ADMIN_EMAIL yoki ADMIN_PASSWORD .env da topilmadi');
    process.exit(1);
  }
  if (password.length < 8) {
    console.error('ADMIN_PASSWORD kamida 8 belgidan iborat bolishi kerak');
    process.exit(1);
  }

  await connectDB();
  const admin = await userService.upsertAdmin('Admin', email, password);
  console.log(`Admin tayyor: ${admin.email} (id=${admin.id}, role=${admin.role})`);
  process.exit(0);
}

run().catch((err) => {
  console.error('Seed xatosi:', err instanceof Error ? err.message : err);
  process.exit(1);
});
