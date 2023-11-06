import {PrismaClient} from '@prisma/client'

// create prisma client (once)

// db var: type PrismaClient
let db: PrismaClient;

declare global {
  var __db: PrismaClient | undefined;
}

if (!global.__db) {
  global.__db = new PrismaClient();
}

db = global.__db;

export {db}