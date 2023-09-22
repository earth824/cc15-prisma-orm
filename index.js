const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const run = async () => {
  try {
    // CREATE
    // const result = await prisma.user.create({
    //   data: {
    //     username: 'john',
    //     password: '123456'
    //   }
    // });

    // const result = await prisma.category.createMany({
    //   data: [{ name: 'Food' }, { name: 'Transport' }]
    // });

    // const result = await prisma.transaction.create({
    //   data: {
    //     payee: '7-11',
    //     amount: 20,
    //     date: new Date('2023-09-02'),
    //     userId: 1,
    //     categoryId: 1
    //   }
    // });

    // const result = await prisma.transaction.create({
    //   data: {
    //     payee: 'Tesco',
    //     amount: 60,
    //     date: new Date('2023-09-03'),
    //     user: {
    //       create: {
    //         username: 'jack',
    //         password: '123456'
    //       }
    //     },
    //     category: {
    //       create: {
    //         name: 'Grocery'
    //       }
    //     }
    //   }
    // });

    // const result = await prisma.transaction.create({
    //   data: {
    //     payee: 'Safari World',
    //     amount: 500,
    //     date: new Date('2023-09-03'),
    //     user: {
    //       create: {
    //         username: 'jane',
    //         password: '123456'
    //       }
    //     },
    //     category: {
    //       create: {
    //         name: 'Travel'
    //       }
    //     }
    //   },
    //   include: {
    //     user: true,
    //     category: true
    //   }
    // });

    // const result = await prisma.user.create({
    //   data: {
    //     username: 'max',
    //     password: '123456',
    //     transactions: {
    //       create: [
    //         { payee: '7-11', amount: 68, date: new Date('2023-09-04'), categoryId: 3 },
    //         { payee: 'CJ', amount: 123, date: new Date('2023-09-04'), categoryId: 1 }
    //       ]
    //     }
    //   },
    //   include: {
    //     transactions: true
    //   }
    // });

    // const result = await prisma.user.create({
    //   data: {
    //     username: 'manuel',
    //     password: '123456',
    //     transactions: {
    //       create: {
    //         payee: '7-11',
    //         amount: 86,
    //         date: new Date('2023-09-05'),
    //         category: {
    //           create: {
    //             name: 'Beverage'
    //           }
    //         }
    //       }
    //     }
    //   },
    //   include: {
    //     transactions: true
    //   }
    // });

    // UPDATE
    // const result = await prisma.user.update({
    //   data: {
    //     password: '654321'
    //   },
    //   where: {
    //     id: 1
    //   }
    // });

    // const result = await prisma.user.updateMany({
    //   data: {
    //     password: '098765'
    //   },
    //   where: {
    //     username: {
    //       startsWith: 'J'
    //     }
    //   }
    // });

    // const result = await prisma.user.upsert({
    //   create: {
    //     username: 'ann',
    //     password: '123456'
    //   },
    //   update: {
    //     password: '123456'
    //   },
    //   where: {
    //     username: 'ann'
    //   }
    // });

    // const result = await prisma.user.delete({
    //   where: {
    //     username: 'ann'
    //   }
    // });

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

run();
