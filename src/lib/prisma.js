const { PrismaClient } = require("@prisma/client");

if (!global.prisma) {
    global.prisma = new PrismaClient();
}

if (process.env.NODE_ENV !== "production") {
    global.prisma = global.prisma;
}

module.exports = {
    prisma: global.prisma
};