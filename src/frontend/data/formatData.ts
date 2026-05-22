//only for development for now, kind of mock, will be deleted when hooks are ready (I think)
import type { FormatData } from '../types'
import singleElim from '../assets/single_elimination_bracket.svg'
import doubleElim from '../assets/double_elimination_bracket.svg'
import roundRobin from '../assets/round_robin_bracket.svg'

const formatData: FormatData[] = [
    {
        id: 1,
        name: 'Single elimination',
        description: 'Each loser is eliminated from the tournament. ',
        image: singleElim,
    },
    {
        id: 2,
        name: 'Double elimination',
        description:
            'Participants are eliminated after two losses. The winners of the upper and lower brackets face off in a grand final.',
        image: doubleElim,
    },
    {
        id: 3,
        name: 'Round Robin',
        description:
            'All participants face each other twice, in separate games.',
        image: roundRobin,
    },
]

export default formatData
