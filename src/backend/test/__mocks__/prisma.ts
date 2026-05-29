import { PrismaClient } from '../../../../generated/prisma/index.js'
import { mockDeep, mockReset, type DeepMockProxy } from 'jest-mock-extended'

const prisma = mockDeep<PrismaClient>()
export { prisma }
export type { DeepMockProxy }

beforeEach(() => {
    mockReset(prisma)
})
