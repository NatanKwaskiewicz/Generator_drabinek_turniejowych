import { PrismaClient } from '../generated/prisma/index.js'

const prisma = new PrismaClient()

async function main() {
    const formats = [
        {
            name: 'Single elimination',
            description: 'Each loser is eliminated from the tournament.',
            image_path: '/formats/single_elimination_bracket.svg',
        },

        {
            name: 'Double elimination',
            description:
                'Participants are eliminated after two losses. The winners of the upper and lower brackets face off in a grand final.',
            image_path: '/formats/double_elimination_bracket.svg',
        },

        {
            name: 'Round Robin',
            description:
                'All participants face each other twice, in separate games.',
            image_path: '/formats/round_robin_bracket.svg',
        },

        {
            name: 'Swiss',
            description:
                'Participants face each other based on their current results, but never twice.',
            image_path: '/formats/swiss_bracket.svg',
        },
    ]

    for (const format of formats) {
        await prisma.format.upsert({
            where: {
                name: format.name,
            },

            update: {
                description: format.description,
                image_path: format.image_path,
            },

            create: {
                name: format.name,
                description: format.description,
                image_path: format.image_path,
            },
        })
    }

    console.log('Seeded formats')
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())
