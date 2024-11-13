/*
  Arrays


*/

import { z } from 'zod'

const stringArray1 = z.array(z.string())
const stringArray2 = z.string().array() // equivalent

// Be careful with the .array() method. It returns a new ZodArray instance. This means the order in which you call methods matters. For instance:
z.string().optional().array() // (string | undefined)[]
z.string().array().optional() // string[] | undefined
