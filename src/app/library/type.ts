import { User } from "@/prisma/client";

type RawUser = Omit<User, 'password' | 'role'>
export type Member<R extends User['role']> = RawUser & { role: R };
export type Anyone = RawUser & { role: User['role'] }