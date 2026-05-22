import { PrismaClient } from '../generated/prisma/index.js'

const prisma = new PrismaClient()

async function main() {
    const formats = ['Single elimination', 'Double elimination', 'Round Robin']

    for (const name of formats) {
        await prisma.format.upsert({
            where: { name },
            update: {},
            create: { name },
        })
    }

    console.log('Seeded formats')
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())
