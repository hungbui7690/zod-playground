import { z } from 'zod'

const one = z.literal('one')

console.log(one.value) // one
