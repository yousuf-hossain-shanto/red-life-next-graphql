import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(): Promise<void> {
    await prisma.bloodGroup.createMany({
        data: [
            {
                name: "A+"
            },
            {
                name: "A-"
            },
            {
                name: "B+"
            },
            {
                name: "B-"
            },
            {
                name: "O+"
            },
            {
                name: "O-"
            },
            {
                name: "AB+"
            },
            {
                name: "AB-"
            }
        ]
    })
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(() => {
        prisma.$disconnect()
    })