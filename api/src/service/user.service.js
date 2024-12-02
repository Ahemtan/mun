import prisma from "../db/db.config.js";

export function createUser(input) {
  return prisma.user.create({ data: input });
}

export async function findUserByEmail(input) {
  return prisma.user.findUnique({
    where: {
      email: input,
    },
  });
}

export async function findUserById(input) {
  return prisma.user.findUnique({
    where: {
      id: input,
    },
  });
}
