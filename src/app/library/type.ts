import { User } from "@/prisma/client";

type M = Omit<User, 'password' | 'role'>
export type Member<R extends User['role']> = M & { role: R };
export type Anyone = M & { role: User['role'] }