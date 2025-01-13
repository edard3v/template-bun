import { Encrypt } from "services/encrypt/encrypt";
import { Role } from "../schemas";

export const ACCOUNTS = [
  {
    id: "a1000000-0000-0000-0000-000000000000",
    email: process.env.ADMIN_EMAIL,
    password: Encrypt.hash(process.env.ADMIN_PASSWORD),
    role: Role.admin,
  },
  {
    id: "a2000000-0000-0000-0000-000000000000",
    email: "lore@gmail.com",
    password: Encrypt.hash("123456"),
  },
];
