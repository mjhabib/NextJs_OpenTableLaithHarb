// built mode

// import { PrismaClient } from '@prisma/client';
// const db = new PrismaClient();
// export default db;

// dev mode
// this is only to solve 'too many prisma client error' in dev mode, since nextjs uses a feature called fast-refresh which causes this issue.

import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var db: undefined | ReturnType<typeof prismaClientSingleton>;
}

const db = globalThis.db ?? prismaClientSingleton();

export default db;

if (process.env.NODE_ENV !== 'production') globalThis.db = db;
